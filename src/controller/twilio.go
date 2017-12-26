package controller

import (
	"net/url"
	"strings"
	"net/http"
	"io/ioutil"
	"encoding/json"
	"log"
)

func SendTextWithTwilio(toNumber string, messageBody string) string {

	// Provide API Account Info
	accountSid := apiAccount.AccountId
	authToken := apiAccount.AuthToken

	urlStr := "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json"

	// Prepare request body for your text message
	v := url.Values{}
	v.Set("To", toNumber)
	v.Set("From", "")
	v.Set("Body", messageBody)
	requestbody := *strings.NewReader(v.Encode())

	req, _ := http.NewRequest("POST", urlStr, &requestbody)
	req.SetBasicAuth(accountSid, authToken)
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	// Initiate Twilio API call
	client := &http.Client{}
	resp, _ := client.Do(req)

	// Get Response and status
	if resp.StatusCode >= 200 && resp.StatusCode < 300 {
		var data map[string]interface{}
		bodyBytes, _ := ioutil.ReadAll(resp.Body)
		err := json.Unmarshal(bodyBytes, &data)
		if err == nil {
			log.Println(data["sid"])
		}
	} else {
		log.Println(resp.Status)
	}
	return resp.Status
}
