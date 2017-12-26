package main

import(
	"github.com/text-away/src/utils"
	"fmt"
	"io/ioutil"
	"log"
)

func main() {

	a:= utils.LoadConfiguration("properties.json")
	fmt.Println(a.AuthToken)
	fmt.Println(a.AccountId)


	files, err := ioutil.ReadDir("./src/static")
	if err != nil {
		log.Fatal(err)
	}

	for _, f := range files {
		fmt.Println(f.Name())
	}
}
