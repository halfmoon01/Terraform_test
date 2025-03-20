#!/bin/bash
cd /home/ec2-user/backend
nohup npm start > backend.log 2>&1 &
