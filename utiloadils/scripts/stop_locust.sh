#!/bin/sh
PROCESSID=`pgrep locust`
PID=$(echo "$PROCESSID" | grep -v "^$$")
if [ -n "$PID" -a -e /proc/$PID ]; then
        echo "Locust is running"
        echo "Killing locust.."
        kill -9 $PID
else
        echo "Locust is not running"
fi