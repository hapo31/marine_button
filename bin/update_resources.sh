#!/bin/bash

bin/audiolist.sh > static/audiolist.json
bin/metainfo.sh > static/metainfo.json

if [ "$NODE_ENV" = "development" ] && [ ! -e ./static/font/nicomoji_plus.ttf ]; then
  mkdir .temp
  pushd .temp
  wget http://nicofont.pupu.jp/nicomoji_u_2525/nicomoji-plus.zip
  unzip nicomoji-plus.zip
  mv ./nicomoji-plus/nicomoji-plus_1.11.ttf ../static/font/nicomoji_plus.ttf
  popd
  rm -rf .temp/*
else
  bin/create_font_subset.sh
fi

