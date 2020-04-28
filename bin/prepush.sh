#!/bin/bash

./bin/diff.sh > static/lastupdateinfo.json
git add static/lastupdateinfo.json
git commit -m "update"
