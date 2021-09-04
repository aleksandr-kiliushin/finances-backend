package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
)

// app entry point
func main() {
	botToken := "secret"
	botUrl := "https://api.telegram.org/bot" + botToken

	offset := 0

	for {
		updates, err := getUpdates(botUrl, offset)

		if err != nil {
			log.Println("Something went wrong: ", err.Error())
		}

		for _, update := range updates {
			addTodo(botUrl, update)
			offset = update.UpdateId + 1
		}

		fmt.Println(updates)
	}
}

func getUpdates(botUrl string, offset int) ([]Update, error) {
	resp, err := http.Get(botUrl + "/getUpdates" + "?offset=" + strconv.Itoa(offset))

	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		return nil, err
	}

	var restResponse RestResponse

	err = json.Unmarshal(body, &restResponse)

	if err != nil {
		return nil, err
	}

	return restResponse.Result, nil
}

func addTodo(botUrl string, update Update) error {
	var botMessage BotMessage

	botMessage.ChatId = update.Message.Chat.ChatId
	botMessage.Text = update.Message.Text

	buf, err := json.Marshal(botMessage)

	if err != nil {
		return err
	}

	_, err = http.Post(botUrl+"/sendMessage", "application/json", bytes.NewBuffer(buf))

	if err != nil {
		return err
	}

	return nil
}

// log.Println(update)

// var jsonStr = []byte(`{
// 	"parent": { "database_id": "secret" },
// 	"properties": {
// 		"title": {
// 			"title": [
// 				{
// 					"text": {
// 						"content": "wash hands"
// 					}
// 				}
// 			]
// 		},
// 		"Status":{
// 			"id":"F%3A%5CQ",
// 			"type":"select",
// 			"select":{
// 				"id":"1",
// 				"name":"Not started",
// 				"color":"red"
// 			}
// 		}
// 	}
// }`)

// req, err := http.NewRequest("POST", "https://api.notion.com/v1/pages", bytes.NewBuffer(jsonStr))

// req.Header.Set("Authorization", "Bearer secret")
// req.Header.Set("Content-Type", "application/json")
// req.Header.Set("Notion-Version", "2021-08-16")

// client := &http.Client{}
// resp, err := client.Do(req)

// if err != nil {
// 	panic(err)
// }

// defer resp.Body.Close()

// fmt.Println("response Status:", resp.Status)
// fmt.Println("response Headers:", resp.Header)
// body, _ := ioutil.ReadAll(resp.Body)
// fmt.Println("response Body:", string(body))
