from locust import HttpLocust, TaskSet, task
from locust.exception import (ResponseError, CatchResponseError, LocustError)
from utilities.user_steps import *
import urllib3
import os

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

class Investors(TaskSet):
    @task(0)
    def upload_investors(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '2',
            'Cookie': 'JWT=' + jwt
            }
        
        investors_file_path = os.path.join(os.path.dirname(__file__), 'pool/investors.xlsx')
        investors_file = {'file': open(investors_file_path, 'rb')}
        with self.client.post("/core/investors/upload", verify=False, headers=headers, files=investors_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Upload Investor Failure- ' + status + ' - ' + reason)
                raise ResponseError('Upload Investor Failure: ' + str(response.status_code) + ' -- ' + response.text)
    
    @task(50)
    def view_investors(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {'Cookie': 'JWT=' + jwt}
        with self.client.get("/core/investors/2", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('View Investor Failure- ' + status + ' - ' + reason)
                raise ResponseError('View Investor Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class InvestorTerms(TaskSet):
    @task(25)
    def upload_investor_terms(self):
        self.client.verify = False
        jwt = get_jwt(self)
        print jwt
        headers = {
            'clientId': '2',
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
            'Cookie': 'JWT=' + jwt
            }
        
        terms_file_path = os.path.join(os.path.dirname(__file__), 'pool/investor_terms.xlsx')
        terms_file = {'file': open(terms_file_path, 'rb')}
        with self.client.post("/core/terms/upload", verify=False, headers=headers, files=terms_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Upload Investor Terms Failure- ' + status + ' - ' + reason)
                raise ResponseError('Upload Investor Terms Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(25)
    def view_terms(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {'Cookie': 'JWT=' + jwt}
        with self.client.get("/core/terms/08e36de0-de07-11e8-ac4a-9325c9289624", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('View Investor Terms Failure- ' + status + ' - ' + reason)
                raise ResponseError('View Investor Terms Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionNav(TaskSet):
    @task(0)
    def upload_nav(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '2', 
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
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

    @task(45)
    def get_nav(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/nav/08e36de0-de07-11e8-ac4a-9325c9289624", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Nav Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Nav Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(45)
    def stop(self):
        self.interrupt()


class TransactionContributions(TaskSet):
    @task(0)
    def upload_contributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '2', 
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
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

    @task(45)
    def get_contributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/contribution/08e36de0-de07-11e8-ac4a-9325c9289624", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Contributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Contributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(45)
    def stop(self):
        self.interrupt()


class TransactionDistributions(TaskSet):
    @task(0)
    def upload_distributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '2', 
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
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

    @task(45)
    def get_distributions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/distribution/08e36de0-de07-11e8-ac4a-9325c9289624", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Distributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Distributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(45)
    def stop(self):
        self.interrupt()


class TransactionPriorCarriedInterest(TaskSet):
    @task(0)
    def upload_prior_carried_interest(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '2', 
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
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

    @task(45)
    def get_pci(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '08e36de0-de07-11e8-ac4a-9325c9289624',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/prior_carried_interest/08e36de0-de07-11e8-ac4a-9325c9289624", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get PCI Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get PCI Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(45)
    def stop(self):
        self.interrupt()


class CreateWaterfall(TaskSet):
    @task
    def create_waterfall_activity(self):
        with self.client.get("/core/investors/2", verify=False, catch_response=True) as response:
            print('Create Waterfall')


class ViewWaterfall(TaskSet):
    @task
    def view_waterfall_activity(self):
        with self.client.get("/core/terms/08e36de0-de07-11e8-ac4a-9325c9289624", verify=False, catch_response=True) as response:
            print('View Waterfall')


class BigTransactionsUpload(TaskSet):
    @task(50)
    def upload_investors_with_transactions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '19', 
            'waterfallId': '51e68800-c28d-11e8-83ae-19549d43cb4f',
            'Cookie': 'JWT=' + jwt
            }

        investors_file_path = os.path.join(os.path.dirname(__file__), 'pool/Inv_10.xlsx')
        investors_file = {'file': open(investors_file_path, 'rb')}
        with self.client.post("/core/investors/upload", verify=False, headers=headers, files=investors_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('Upload Big Investor File Failure- ' + status + ' - ' + reason)
                raise ResponseError('Upload Big Investor File Failure: ' + str(response.status_code) + ' -- ' + response.text)

        contributions_file_path = os.path.join(os.path.dirname(__file__), 'pool/Txn_Random_10k.xlsx')
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
    def get_investors_with_huge_transactions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '51e68800-c28d-11e8-83ae-19549d43cb4f',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/contribution/51e68800-c28d-11e8-83ae-19549d43cb4f", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Big Contributions Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Big Contributions Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TenKFileTransactionsUpload(TaskSet):
    @task(10)
    def upload_tenk_transactions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'clientId': '19', 
            'waterfallId': '51e68800-c28d-11e8-83ae-19549d43cb4f',
            'Cookie': 'JWT=' + jwt
            }

        tenk_file_path = os.path.join(os.path.dirname(__file__), 'pool/Txn_Random_10k.xlsx')
        tenk_file = {'file': open(tenk_file_path, 'rb')}
        with self.client.post("/core/transactions/upload/contribution", verify=False, headers=headers, files=tenk_file, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 201:
                response.success()
            else:
                response.failure('10K Upload Failure- ' + status + ' - ' + reason)
                raise ResponseError('10K Upload Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(45)
    def get_tenk_transactions(self):
        self.client.verify = False
        jwt = get_jwt(self)
        headers = {
            'waterfallId': '51e68800-c28d-11e8-83ae-19549d43cb4f',
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/transactions/contribution/51e68800-c28d-11e8-83ae-19549d43cb4f", verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get 10K Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get 10K Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(45)
    def stop(self):
        self.interrupt()


class CalculateEvents(TaskSet):
    @task(33)
    def get_cash_distribution_events(self):
        self.client.verify = False
        waterfallId = '08e36de0-de07-11e8-ac4a-9325c9289624'
        eventDate = '2018-09-10'
        clientId = '21'
        eventType = 'Cash Distribution'
        waterfallName = 'Test'
        clientName = 'QA_THREE'
        jwt = get_jwt(self)
        headers = {
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/calculation?waterfallId=" + waterfallId + "&eventDate=" + eventDate + "&clientId=" + clientId + "&eventType=" + eventType + "&waterfallName=" + waterfallName + "&clientName=" + clientName, verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Cash Distribution Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Cash Distribution Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(33)
    def get_unrealized_distribution_events(self):
        self.client.verify = False
        waterfallId = '08e36de0-de07-11e8-ac4a-9325c9289624'
        eventDate = '2018-09-10'
        clientId = '21'
        eventType = 'Unrealized Distribution'
        waterfallName = 'Test'
        clientName = 'QA_THREE'
        jwt = get_jwt(self)
        headers = {
            'Cookie': 'JWT=' + jwt
            }

        with self.client.get("/core/calculation?waterfallId=" + waterfallId + "&eventDate=" + eventDate + "&clientId=" + clientId + "&eventType=" + eventType + "&waterfallName=" + waterfallName + "&clientName=" + clientName, verify=False, headers=headers, catch_response=True) as response:
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Unrealized Distribution Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Unrealized Distribution Failure: ' + str(response.status_code) + ' -- ' + response.text)

    @task(34)
    def stop(self):
        self.interrupt()


class PowerLogin(TaskSet):
    @task
    def just_login(self):
        self.client.verify = False
        # jwt = token_issuer(self)
        with self.client.get("messages/", name="JWT Token", verify=False, stream=True, catch_response=True) as response:
            if response.status_code == 200:
                pass
                response.success()
            else:
                response.failure('Failure to get JWT - ' + str(response.status_code))
                raise ResponseError('Failure to get JWT - ' + str(response.status_code))


class ClientActivities(TaskSet):
    tasks = {
        CreateWaterfall: 0,
        ViewWaterfall: 0,
        Investors: 0,
        InvestorTerms: 0,
        TransactionNav: 0,
        TransactionContributions: 0,
        TransactionDistributions: 0,
        TransactionPriorCarriedInterest: 0,
        BigTransactionsUpload: 0,
        TenKFileTransactionsUpload: 0,
        CalculateEvents: 0,
        PowerLogin: 100
    }


class WaterfallClient(HttpLocust):
    task_set = ClientActivities
    host = "http://localhost:3000/"
    min_wait = 0
    max_wait = 0
