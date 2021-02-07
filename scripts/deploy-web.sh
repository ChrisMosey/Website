#!/bin/bash

BUILD_DIR=./web/build/*
DEST_DIR=/var/www/html

cd ./web && npm run build

cp BUILD_DIR DEST_DIR


