#!/bin/bash

PWD=$(pwd)

mkdir -p .temp
rm -rf .temp/*

docker build -t happou31/font-create .
cat out/index.html | sed "s/\(.\)/\1\n/g" | sort | LC_COLLATE=C uniq | tr -d "\n" > .temp/chars.txt
docker run --rm -v $PWD/.temp/:/root/ happou31/font-create
mv .temp/sub_nicomoji-plus.woff2 static/font/
