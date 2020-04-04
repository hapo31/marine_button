#!/bin/bash
dir=$1

for file in $dir/*.wav ; do
  ffmpeg -i $file -acodec libvorbis -f ogg ${file%.*}.ogg
done
