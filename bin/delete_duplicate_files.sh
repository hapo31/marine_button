#!/bin/bash
find ./static/audio ./.tmp ! -empty -type f -exec md5sum {} + | sort | uniq -w32 -dD | grep "\.tmp" | while read md5 fn; do echo delete: $fn; rm "$fn"; done
