#!/bin/bash
# Common library location
datasrvc_lambda_common_lib_bucket=$1


if [ -z "$1" ]; then
    echo "No Arguments supplied for lib_bucket argument. Using datasrvc-codepipeline-artifacts-store-eu-west-1-359772415770/datasrvc-shared"
    datasrvc_lambda_common_lib_bucket="datasrvc-codepipeline-artifacts-store-eu-west-1-359772415770/datasrvc-shared"
fi

# runs pip install for each lambda function
install_dependencies() {
    echo $1
    echo "Installing dependencies to $(pwd)/"
    pip install --upgrade pip
    pip install --ignore-installed -r $1 -t "$(pwd)/"
}

install_node_dependencies() {
	echo $1
	echo "Installing dependencies to $(pwd)"
	PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm i --production
}

for dir in $(ls -d */)
    do
    cd $dir
    echo "I am in $dir"
    
    if [ -d "lambda" ]
    then
        echo "Found Lambda subfolder"
        CUR_DIR="lambda"
        cd $CUR_DIR
        for dir2 in $(ls -d */)
            do
                if [ -d "$dir2" ]
                then
                    echo "Entering $dir2, looking for requirements file ..."
                    cd $dir2
                    CUR_DIR=${PWD##*/}
                    if [ -s requirements* ]
                    then
                        echo "Requirements file found."
                        install_dependencies requirements*
                    else
                        echo "$(echo requirements*) is empty or not found. Nothing to install."
                    fi

                    if [ -s package.json ]
                    then
                        echo "package.json file found."
				        install_node_dependencies
			        else
				        echo "pakage.json is empty or not found. Nothing to install."
			        fi

                    # Unzip oracle lib into lambda folder
                    if [ "$dir" = "monitoring/" ]
                    then
                        echo "unzip oracle lib file"
                        mkdir ./lib
                        cd ./lib
                        unzip ../../../../lib/oracle_db.zip
                        cd ../../
                    else
                        cd ..
                    fi

                else
                    echo "$dir2 is not a directory"
                fi
		
            done
	cd ..        
    else
	echo "$dir does not have Lambda subfolder"
	 
    fi
    cd ..
    done
