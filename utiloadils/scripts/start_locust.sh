#!/bin/sh
TARGET=$(cat /etc/locust/target_url.txt)
MASTER_IP=$(aws ec2 describe-instances --region eu-west-1 --filter Name=tag:Name,Values=CWF-Locust-Master --query 'Reservations[].Instances[].PrivateIpAddress' --output text)

if [ "$DEPLOYMENT_GROUP_NAME" == "CWF-Locust-Cluster-Master-Group" ]; then
    /usr/local/bin/locust -f /etc/locust/locustfile.py --host=$TARGET --master > /dev/null 2>&1 &
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "CWF-Locust-Cluster-Slave-Group" ]; then
    /usr/local/bin/locust -f /etc/locust/locustfile.py --slave --master-host=$MASTER_IP > /dev/null 2>&1 &
fi