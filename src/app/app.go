package main

import (
	"github.com/text-away/src/controller"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

const APP_VERSION = "1.0"

func main() {

	r := httprouter.New()
	fs := http.FileServer(http.Dir("./src/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	r.GET("/", controller.GetHomePage)
	r.GET("/home", controller.GetHomePage)
	r.POST("/home", controller.SendText)
	r.GET("/login", controller.GetLogin)
	r.POST("/login", controller.GetHomePage)
	r.GET("/signup", controller.GetSignup)
	r.POST("/signup", controller.PostSignup)

	log.Fatal(http.ListenAndServe(":8001", r))
}
