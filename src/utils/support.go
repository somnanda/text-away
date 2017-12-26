package utils

import (
	"os"
	"log"
	"encoding/json"
)

type AccountInfo struct {
	AccountId string `json:"accountId"`
	AuthToken string `json:"authToken"`
}

func LoadConfiguration(file string) AccountInfo {
	var config AccountInfo
	configFile, err := os.Open(file)
	defer configFile.Close()
	if err != nil {
		log.Println(err.Error())
	}
	jsonParser := json.NewDecoder(configFile)
	jsonParser.Decode(&config)
	return config
}
