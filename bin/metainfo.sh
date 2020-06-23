#!/bin/bash

_echo() {
  echo -n $@
}

_echo {
  _echo \"count\":
  _echo `find ./static/audio | grep -E ".*\.mp3$" | wc -l`
  _echo ","

  _echo \"lastupdated\":
  _echo \"`date '+%Y-%m-%d'`\"

_echo }
