#!/bin/bash

ng build
scp -i /c/Users/User/.ssh/id_rsa -r ./ ubuntu@3.111.218.155:/home/ubuntu/public_html/zyper
systemctl restart nginx
