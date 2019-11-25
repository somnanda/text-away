#!/bin/bash

# Initialization file copied/run by Dockerfile.dev
# (for development environment)

# Setup proxy settings
echo "======> Initializing proxy settings"
echo "proxy = http://fakeusername:fakepw@tor1mwg01.ad.ent.citco.com:8080/" >> ~/.curlrc
echo -e ":sources:\n- http://rubygems.org" >> ~/.gemrc
git config --global http.sslVerify "false"
git config --global http.proxy "http://fakeusername:fakepw@tor1mwg01.ad.ent.citco.com:8080/"
git config --global https.proxy "http://fakeusername:fakepw@tor1mwg01.ad.ent.citco.com:8080/"
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global url."https://".insteadOf git://

# Setup colourful cli
gem install -p http://fakeusername:fakepw@tor1mwg01.ad.ent.citco.com:8080 lolcat

# Setup nvm
echo "======> Bootstraping nvm" | lolcat
chmod 700 /opt/app/docker/nvm/install-nvm.sh
mkdir /root/.nvm
cd /opt/app/docker/nvm
unzip -j nvm-master.zip -d /root/.nvm
/opt/app/docker/nvm/install-nvm.sh

# Setup npm config
# npm config set proxy "http://fakeusername:fakepw@tor1mwg01.ad.ent.citco.com:8080/"
# npm config set https-proxy "http://fakeusername:fakepw@tor1mwg01.ad.ent.citco.com:8080/"
# npm config set strict-ssl false

echo "======> Cleaning up nvm directory" | lolcat

echo "======> Setting nvm environment variables" | lolcat
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist
export NVM_IOJS_ORG_MIRROR=http://iojs.org/dist

# nvm install 8.11 && echo "======> nvm setup complete!" | lolcat

# Start SSH server (for remote editing/debugging)
/etc/init.d/ssh start

# TODO
# Include AWS SDK packages
# Python
#

# Setup complete
figlet -c -f /opt/app/docker/colossal.flf "c w f - core" | lolcat -p 1.5
echo "======> Dev Environment setup complete!" | lolcat
