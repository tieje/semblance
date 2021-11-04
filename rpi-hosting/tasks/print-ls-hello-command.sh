#!/usr/bin/env bash
ansible -u pi -i ~/Documents/yorha/rpi-hosting/hosts all -a "/bin/ls hello-world"
