#!/usr/bin/python

import requests
import re
import sys 
import json
import time

QUEUE_POLL_INTERVAL = 2 
JOB_POLL_INTERVAL = 20
OVERALL_TIMEOUT = 3600

#
# Job details
#
auth_token = 'cnanda:112238e3eff2086972faa23bcb448a1249'
jenkins_uri = 'jenkins-main.waterfall.int.csgdev01.citcosvc.com:8080'
job_name = 'Pipeline-API-Tests'
build_token = 'runuitests'
environment = sys.argv[1].lower() # PARAM changes based on pipeline's NODE_ENV

#
# Start UI Tests
#
start_build_url = 'http://{}@{}/job/{}/buildWithParameters?token={}&ENV={}'.format(
        auth_token, jenkins_uri, job_name, build_token, environment)
r = requests.post(start_build_url)

#
# Get job queue location from returned headers 
#
m = re.match(r"http.+(queue.+)\/", r.headers['Location'])
if not m:
    print "Job started request did not have queue location"
    sys.exit(1)

#
# Poll the queue looking for job to start
#
queue_id = m.group(1)
job_info_url = 'http://{}@{}/{}/api/json'.format(auth_token, jenkins_uri, queue_id)
elasped_time = 0 
print '{} Job {} added to queue: {}'.format(time.ctime(), job_name, job_info_url)
while True:
    l = requests.get(job_info_url)
    jqe = l.json()
    task = jqe['task']['name']
    try:
        job_id = jqe['executable']['number']
        break
    except:
        print "No job ID yet for build: {}".format(task)
        time.sleep(QUEUE_POLL_INTERVAL)
        elasped_time += QUEUE_POLL_INTERVAL

    if (elasped_time % (QUEUE_POLL_INTERVAL * 10)) == 0:
        print "{}: Job {} not started yet from {}".format(time.ctime(), job_name, queue_id)

#
# Poll job status awaiting job result
#
job_url = 'http://{}@{}/job/{}/{}/api/json'.format(auth_token, jenkins_uri, job_name, job_id)
start_epoch = int(time.time())
while True:
    print "{}: Job started URL: {}".format(time.ctime(), job_url)
    j = requests.get(job_url)
    jje = j.json()
    result = jje['result']
    if result == 'SUCCESS':
        print "{}: Job: {} Status: {}".format(time.ctime(), job_name, result)
        break
    elif result == 'FAILURE':
        print "{}: Job: {} Status: {} Link: http://{}/job/{}/{}/allure/".format(time.ctime(), job_name, result, jenkins_uri, job_name, job_id)
        sys.exit(1)
        break
    elif result == 'ABORTED':
        print "{}: Job: {} Status: {} Link: http://{}/job/{}/{}/allure/".format(time.ctime(), job_name, result, jenkins_uri, job_name, job_id)
        sys.exit(1)
        break
    else:
        print "{}: Job: {} Status: {}. Polling again in {} secs".format(
                time.ctime(), job_name, result, JOB_POLL_INTERVAL)

    cur_epoch = int(time.time())
    if (cur_epoch - start_epoch) > OVERALL_TIMEOUT:
        print "{}: No status before timeout of {} secs".format(OVERALL_TIMEOUT)
        sys.exit(1)

    time.sleep(JOB_POLL_INTERVAL)
