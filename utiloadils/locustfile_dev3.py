from locust import HttpLocust, TaskSet, task
from locust.exception import (ResponseError, CatchResponseError, LocustError)
from utilities.user_steps import *
import urllib3
import os

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class TransactionNav(TaskSet):
    @task(0)
    def upload_nav(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }

        nav_file_path = os.path.join(os.path.dirname(__file__), 'pool/nav.xlsx')
        nav_file = {'file': open(nav_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/nav", verify=False, headers=headers, files=nav_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Nav Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('Nav Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(100)
    def get_nav(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '7a48121f-a234-498f-9075-1f4e788b44e2',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/nav/7a48121f-a234-498f-9075-1f4e788b44e2", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Nav Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Nav Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(0)
    def stop(self):
        self.interrupt()


class TransactionContributions(TaskSet):
    @task(0)
    def upload_contributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }

        contributions_file_path = os.path.join(os.path.dirname(__file__), 'pool/contributions.xlsx')
        contributions_file = {'file': open(contributions_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/contribution", verify=False, headers=headers, files=contributions_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Contributions Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('Contributions Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def get_contributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '7a48121f-a234-498f-9075-1f4e788b44e2',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/contribution/7a48121f-a234-498f-9075-1f4e788b44e2", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Contributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Contributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionDistributions(TaskSet):
    @task(0)
    def upload_distributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }

        distributions_file_path = os.path.join(os.path.dirname(__file__), 'pool/distributions.xlsx')
        distributions_file = {'file': open(distributions_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/distribution", verify=False, headers=headers, files=distributions_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Distributions Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('Distributions Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def get_distributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '7a48121f-a234-498f-9075-1f4e788b44e2',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/distribution/7a48121f-a234-498f-9075-1f4e788b44e2", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Distributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Distributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionSmallNav(TaskSet):
    @task(0)
    def upload_nav(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }

        nav_file_path = os.path.join(os.path.dirname(__file__), 'pool/nav.xlsx')
        nav_file = {'file': open(nav_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/nav", verify=False, headers=headers, files=nav_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Nav Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('Nav Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def get_nav(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '6badbbe7-df08-4614-88f5-d88f96165401',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/nav/6badbbe7-df08-4614-88f5-d88f96165401", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Nav Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Nav Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionSmallContributions(TaskSet):
    @task(0)
    def upload_contributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }

        contributions_file_path = os.path.join(os.path.dirname(__file__), 'pool/contributions.xlsx')
        contributions_file = {'file': open(contributions_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/contribution", verify=False, headers=headers, files=contributions_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Contributions Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('Contributions Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def get_contributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '6badbbe7-df08-4614-88f5-d88f96165401',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/contribution/6badbbe7-df08-4614-88f5-d88f96165401", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Contributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Contributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionSmallDistributions(TaskSet):
    @task(0)
    def upload_distributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }

        distributions_file_path = os.path.join(os.path.dirname(__file__), 'pool/distributions.xlsx')
        distributions_file = {'file': open(distributions_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/distribution", verify=False, headers=headers, files=distributions_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Distributions Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('Distributions Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def get_distributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '6badbbe7-df08-4614-88f5-d88f96165401',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/distribution/6badbbe7-df08-4614-88f5-d88f96165401", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Distributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Distributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionSmallPriorCarriedInterest(TaskSet):
    @task(0)
    def upload_prior_carried_interest(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '3', 
            'waterfallId': '50d3e9f0-bc43-4b1a-be98-3d7f75bccec8',
            'Cookie': 'JWT=' + jwt
            }
        pci_file_path = os.path.join(os.path.dirname(__file__), 'pool/prior_carried_interest.xlsx')
        prior_carried_interest_file = {'file': open(pci_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/prior_carried_interest", verify=False, headers=headers, files=prior_carried_interest_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Prior Carried Interest Failure- ' + status + ' - ' + reason)
                raise ResponseError('Prior Carried Interest Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def get_pci(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '6badbbe7-df08-4614-88f5-d88f96165401',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/prior_carried_interest/6badbbe7-df08-4614-88f5-d88f96165401", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get PCI Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get PCI Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class ClientActivities(TaskSet):
    tasks = {
        TransactionNav: 100,
        TransactionContributions: 0,
        TransactionDistributions: 0,
        TransactionSmallNav: 0,
        TransactionSmallContributions: 0,
        TransactionSmallDistributions: 0,
        TransactionSmallPriorCarriedInterest: 0
    }


class WaterfallClient(HttpLocust):
    task_set = ClientActivities
    host = "https://waterfall.dev7.srvs.int.csgdev01.citcosvc.com"
    min_wait = 60000
    max_wait = 90000
