from locust import web

@web.app.route("/added_page")
def my_added_page():
    return "Another page"