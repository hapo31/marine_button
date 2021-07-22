#!/bin/bash

cd static/audio

OLDIFS=$IFS
IFS=$'\n'

files=$(find . -type f | grep .mp3 | sort)

_echo() {
    echo -n $@
}

json=`for file in ${files[@]}; do echo \"${file:2}\",; done`

_echo [
_echo ${json%,}
_echo ]

IFS=$OLDIFS
