#!/bin/bash

PWD=$(pwd)

function uniq_chars_from_file() {
  echo `cat $1 | sed "s/\(.\)/\1\n/g" | sort | LC_COLLATE=C uniq | tr -d "\n"`
}

recent=$(uniq_chars_from_file .cache/chars.txt)
now=$(uniq_chars_from_file out/index.html)

if [ -f ".cache/chars.txt" -a "$recent" = "$now" ]; then
  echo "font file is newest, font building was skipped."
  exit 0
fi

echo "font file is older, font bulding..."

rm -rf .temp/*

yarn export

now=$(uniq_chars_from_file out/index.html)

docker build -t happou31/font-create .
echo $now > .temp/chars.txt
docker run --rm -v $PWD/.temp/:/root/ happou31/font-create

mv -f .temp/sub_nicomoji-plus.woff2 static/font/

mkdir -p .cache
echo $now > .cache/chars.txt
