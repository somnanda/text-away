import boto3
import json
import platform
import urllib3
from botocore.config import Config

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def token_issuer():
    
    proxies = {
        'http': 'http://cnanda:password@tor1mwg01.ad.ent.citco.com:8080/',
        'https': 'http://cnanda:password@tor1mwg01.ad.ent.citco.com:8080/',
        }
    
    if (platform.system() == 'Windows'):
        client = boto3.client(
            'lambda', 
            region_name = 'eu-west-1', 
            api_version = '2015-03-31', 
            verify = False, 
            config = Config( proxies = proxies )
            )
    else:
        client = boto3.client(
            'lambda', 
            region_name = 'eu-west-1', 
            api_version = '2015-03-31', 
            verify = False
            )

    payload = { "queryStringParameters": { "username": 'cwf_dev_deladmin', "password": 'Xjj4@DLQp2' } }
        
    response = client.invoke(
        FunctionName = 'DEV-CSG-CWF-MicroServices-CitcoLogin',
        InvocationType = 'RequestResponse',
        LogType = 'None',
        Payload = json.dumps(payload)
        )
            
    res = json.loads(response['Payload'].read())
    return json.loads(res['body'])['JWT']


if __name__ == '__main__':
    token = token_issuer()
    print(token)
