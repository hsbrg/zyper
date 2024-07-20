#!/bin/bash

npm install --force
ng build
rsync -rP dist/zyper2/ ubuntu@65.0.132.117:/home/ubuntu/public_html/zyper/
