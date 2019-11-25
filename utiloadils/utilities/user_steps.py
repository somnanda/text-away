import os
from locust import HttpLocust, TaskSet, task
from config_loader import *
import urllib3
from jwt import *

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

env = 'DEV'

configFilePath = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'configs', env + '.yml')

def get_config(filePath):
    config =  ConfigLoader().load(configFile = filePath)
    return config

config = get_config(configFilePath)
# URL = config.url()

def get_jwt(self):
    # proxies = {
    #     'http': 'http://cnanda@tor1mwg01.ad.ent.citco.com:8080/',
    #     'https': 'http://cnanda@tor1mwg01.ad.ent.citco.com:8080/',
    # }
    # with self.client.get("https://apigateway.waterfall.qad.int.csgdev01.citcosvc.com/Prod/CitcoLogin?username=svcuatuser1&password=citco123%24", verify=False) as response:
    #     resp = response.json()
    #     jwt = resp['JWT']

    # return jwt
    return token_issuer(self)
    