#!/bin/bash

BUILD_DIR=../web/build/*
DEST_DIR=/var/www/html

cd ../web && npm install && npm run build

cp -r $BUILD_DIR $DEST_DIR


