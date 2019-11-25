# Load Test Project


## Master

```
locust -f locustfile.py --host=<APP_URL> --master
```


## Slave

```
locust -f locustfile.py --slave --master-host=<MASTER_HOSTNAME or IP>
```


## Open Web Portal to run tests

```
http://hostname:port:8089
```