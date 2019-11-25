from locust import HttpLocust, TaskSet, task
from locust.exception import (ResponseError, CatchResponseError, LocustError)
from utilities.jwt import *
import urllib3
import os

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class GetWaterfallDatabases(TaskSet):

    @task(50)
    def get_waterfall_databases(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/databases", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Waterfall Databases Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Waterfall Databases Failure: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()

    
class GetWaterfallDomains(TaskSet):

    @task(50)
    def get_waterfall_domains(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/domains?InvestranDB=INVEQTFUNDSPRD", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Waterfall Domain Failure- ' + status + ' - ' + reason)
                raise ResponseError('Get Waterfall Domain Failure: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class GetReportingGroups(TaskSet):

    @task(50)
    def get_reporting_groups(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/reportingGroups?InvestranDB=INVEQTFUNDSPRD&DomainID=190", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Reporting Group- ' + status + ' - ' + reason)
                raise ResponseError('Get Reporting Group: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class GetInvestors(TaskSet):

    @task(50)
    def get_investors(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/investors?InvestranDB=INVEQTFUNDSPRD&DomainID=190&WaterfallReportingGroup=EQT%20VI", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Investors- ' + status + ' - ' + reason)
                raise ResponseError('Get Investors: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class GetDeals(TaskSet):

    @task(50)
    def get_deals(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/deals?InvestranDB=INVEQTFUNDSPRD&WaterfallReportingGroup=EQT%20VI", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Deals- ' + status + ' - ' + reason)
                raise ResponseError('Get Deals: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class GetCurrencies(TaskSet):

    @task(50)
    def get_currencies(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/currencies?InvestranDB=INVEQTFUNDSPRD&WaterfallReportingGroup=EQT%20VI", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Currencies- ' + status + ' - ' + reason)
                raise ResponseError('Get Currencies: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class GetHierarchies(TaskSet):

    @task(50)
    def get_hierarchies(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/hierarchies?InvestranDB=INVEQTFUNDSPRD", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Hierarchies- ' + status + ' - ' + reason)
                raise ResponseError('Get Hierarchies: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class GetTransactionTypes(TaskSet):

    @task(50)
    def get_transaction_types(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Authorization': 'Bearer ' + jwt
            }

        with self.client.get("/v1/api/waterfall/transactionTypes?InvestranDB=INVEQTFUNDSPRD&HierarchyID=-211277", verify=False, headers=headers, catch_response=True) as response:
            body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                response.failure('Get Transaction Types- ' + status + ' - ' + reason)
                raise ResponseError('Get TransactionTypes: ' + str(status) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class TransactionSearch(TaskSet):
    @task(50)
    def post_transaction_search(self):
        self.client.verify = False
        jwt = token_issuer(self)
        headers = {
            'Content-Type': 'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer ' + jwt
            }
        
        payload = [1422,1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1481, 1482, 1483, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1514, 1517, 1519, 1520, 1521, 1528, 1533, 1534, 1535, 1536, 1537, 1538, 1540, 1541, 1542, 1543, 1546, 1547, 1550, 1551, 1573, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1604, 1605, 1612, 1613, 1621, 1622, 1633, 1635, 1638, 1640, 1641, 1643, 1647, 1649, 1650, 1653, 1654, 1660, 1662, 1663, 1664, 1665, 1668, 1669, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1837, 1838, 1840, 1842, 1844, 1865, 1866, 1867, 1870, 1871, 1872, 1873, 1874, 1875, 1877, 1881, 1884, 1886, 7441, 7442, 7443, 7444, 7445, 7446, 7447, 7448, 7449, 7450, 7451, 7452, 7453, 7454, 7455, 7456, 7457, 7458, 7459, 7460, 7461, 7462, 7463, 7464, 7465, 7466, 7467, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7830, 7831, 7832, 7833, 7834, 7835, 7836, 7837, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7936, 7937, 7938, 7939, 7940, 7941, 7942, 7943, 7944, 7945, 7946, 7947, 7948, 7949, 7950, 7951, 7952, 7953, 7954, 7955, 7956, 7957, 7958, 7959, 7960, 7961, 7962, 7963, 7964, 7965, 7966, 7967, 7968, 7969, 7970, 7971, 7972, 7973, 7974, 7975, 7976, 7977, 7978, 7979, 7980, 7981, 7982, 7983, 7984, 7985, 7986, 7987, 7988, 7989, 7990, 7991, 7992, 7993, 7994, 7995, 7996, 7997, 7998, 7999, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8061, 8062, 8063, 8064, 8065, 8066, 8067, 8068, 8069, 8070, 8071, 8072, 8073, 8074, 8075, 8076, 8077, 8078, 8079, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088, 8089, 8090, 8091, 8092, 8093, 8094, 8095, 8096, 8097, 8098, 8099, 8100, 8101, 8102, 8103, 8104, 8105, 8106, 8107, 8108, 8109, 8110, 8111, 8112, 8113, 8114, 8115, 8116, 8117, 8118, 8119, 8120, 8121, 8122, 8123, 8124, 8125, 8126, 8127, 8128, 8129, 8130, 8131, 8132, 8133, 8134, 8135, 8136, 8137, 8138, 8139, 8140, 8141, 8142, 8143, 8144, 8145, 8146, 8147, 8148, 8149, 8150, 8151, 8152, 8153, 8154, 8155, 8156, 8157, 8158, 8159, 8160, 8161, 8162, 8163, 8164, 8165, 8166, 8167, 8168, 8170, 8171, 8172, 8173, 8174, 8175, 8176, 8177, 8178, 8179, 8180, 8181, 8182, 8183, 8184, 8185, 8186, 8187, 8188, 8189, 8190, 8191, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8203, 8204, 8205, 8206, 8207, 8208, 8209, 8210, 8211, 8212, 8213, 8214, 8215, 8216, 8217, 8218, 8219, 8220, 8221, 8222, 8223, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8232, 8233, 8242, 8243, 8244, 8245, 8246, 8249, 8250, 8251, 8263, 8264, 8265, 8285, 8286, 8287, 8294, 8295, 8296, 8300, 8331, 8332, 8333, 8334, 8335, 8336, 8337, 8338, 8339, 8340, 8341, 8342, 8344, 8345, 8346, 8347, 8349, 8359, 8363, 8378, 8379, 8380, 8381, 8382, 8383, 8384, 8385, 8386, 8387, 8405, 8406, 8407, 8408, 8409, 8410, 8412, 8413, 8421, 8422, 8423, 8424, 8425, 8430, 8441, 8442, 8443, 8444, 8445, 8460, 8470, 8473, 8474, 8750, 8751, 8752, 8753, 8754, 8755, 8756, 8757, 8758, 8759, 8761, 8762, 8763, 8764, 8765, 8766, 8769, 8770, 8771, 8775, 8779, 8780, 8781, 8800, 8801, 8802, 8803, 8804, 8805, 8806, 8810, 8816, 8817, 8818, 8819, 8820, 8821, 8824, 8828, 8835, 8836, 8837, 8838, 10116, 10117, 10118, 10119, 10120, 10122, 10124, 10125, 10126, 10127, 10128, 10129, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10143, 10144, 10145, 10146, 10147, 10148, 10149, 10150, 10151, 10152, 10153, 10154, 10155, 10156, 10157, 10158, 10159, 10160, 10161, 10162, 10164, 10165, 10166, 10167, 10168, 10169, 10170, 10171, 10172, 10173, 10174, 10175, 10176, 10177, 10178, 10179, 10180, 10182, 10183, 10184, 10185, 10186, 10187, 10188, 10189, 10190, 10191, 10192, 10193, 10194, 10195, 10196, 10197, 10198, 10199, 10200, 10201, 10202, 10203, 10204, 10205, 10206, 10207, 10208, 10209, 10210, 10211, 10212, 10213, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10224, 10225, 10226, 10227, 10228, 10229, 10230, 10231, 10232, 10233, 10234, 10235, 10236, 10237, 10246, 10344, 10345, 10346, 10347, 10348, 10349, 10350, 10351, 10352, 10353, 10354, 10355, 10356, 10357, 10358, 10359, 10360, 10364, 10381, 10388, 10394, 10400, 10422, 10423, 10424, 10425, 10429, 10430, 10431, 10432, 10433, 10434, 10435, 10436, 10438, 10439, 10440, 10456, 10479, 10480, 10481, 10482, 10483, 10484, 10485, 10486, 10487, 10488, 10489, 10490, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10562, 10563, 10565, 10566, 10567, 10568, 10603, 10604, 10605, 10606, 10607, 10608, 10609, 10610, 10611, 10614, 10622, 10626, 10627, 10628, 10629, 10653, 10654, 10655, 10656, 10659, 10660, 10661, 10662, 10663, 10666, 10667, 10668]


        with self.client.post("/v1/api/waterfall/Transactions_Stream/search?InvestranDB=INVEQTFUNDSPRD&WaterfallReportingGroup=EQT%20VI", verify=False, headers=headers, data=json.dumps(payload), catch_response=True) as response:
            # body = json.loads(response.content)
            status = str(response.status_code)
            reason = response.reason
            if response.status_code == 200:
                response.success()
            else:
                # response.failure('Transaction Search- ' + status + ' - ' + reason)
                raise ResponseError('Transaction Search: ' + str(response.status_code) + ' -- ' + response.text)

    @task(50)
    def stop(self):
        self.interrupt()


class ClientActivities(TaskSet):
    tasks = {
        GetWaterfallDatabases: 10,
        GetWaterfallDomains: 10,
        GetReportingGroups: 10,
        GetInvestors: 10,
        GetDeals: 10,
        GetCurrencies: 10,
        GetHierarchies: 10,
        GetTransactionTypes: 10,
        TransactionSearch: 0
    }


class WaterfallClient(HttpLocust):
    task_set = ClientActivities
    host = "http://brn0vmmsweb170:8111/PEDataService"
    min_wait = 6000
    max_wait = 9000