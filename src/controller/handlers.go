package controller

import (
	"net/http"
	"log"
	"github.com/julienschmidt/httprouter"
	"regexp"
	"html/template"
	"github.com/text-away/src/utils"
)

var tpl *template.Template
var apiAccount utils.AccountInfo

func init() {
	tpl = template.Must(template.ParseGlob("./src/static/*.html"))
	apiAccount = utils.LoadConfiguration("properties.json")
}

func GetSignup(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	err := tpl.ExecuteTemplate(w, "signup.html", nil)
	if err != nil {
		log.Fatalln("template didn't execute: ", err)
	}
}

func GetLogin(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	err := tpl.ExecuteTemplate(w, "login.html", nil)
	if err != nil {
		log.Fatalln("template didn't execute: ", err)
	}
}

func PostSignup(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	err := r.ParseForm()
	if err != nil {
		log.Fatalln("couldn't parse: ", err)
	}

	log.Println(r.Form)

	err = tpl.ExecuteTemplate(w, "index.html", r.FormValue("username"))
	if err != nil {
		log.Fatalln("template didn't execute: ", err)
	}
}

func GetHomePage(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	err := tpl.ExecuteTemplate(w, "homepage.html", nil)
	if err != nil {
		log.Panic(err)
	}
}

func SendText(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	var textStatus = ""
	err := r.ParseForm()
	if err != nil {
		log.Panic(err)
	}

	phone := r.FormValue("toNumber")
	message := r.FormValue("messageBody")

	phoneRegExPatter := "^(?:(?:\\+?1\\s*(?:[.-]\\s*)?)?(?:\\(\\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\\s*\\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\\s*(?:[.-]\\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\\s*(?:[.-]\\s*)?([0-9]{4})(?:\\s*(?:#|x\\.?|ext\\.?|extension)\\s*(\\d+))?$"

	didItMatch, _ := regexp.Match(phoneRegExPatter, []byte(phone))

	if didItMatch {

		reg := regexp.MustCompile("[^0-9a-zA-Z+]+")
		twilioPhone := reg.ReplaceAllString(phone, "")
		textStatus = SendTextWithTwilio(twilioPhone, message)

	} else {
		textStatus = "Please enter a valid phone number"
	}

	tpl.ExecuteTemplate(w, "homepage.html", textStatus)
}

