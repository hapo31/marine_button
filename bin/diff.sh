#!/bin/bash -eu


git config --local core.quotepath false
echo -n { \"date\":\"`TZ=-9 date -Iseconds`\",
  echo -n \"files\":[
r=`for file in $(git diff HEAD..HEAD~ --name-only); do echo \"$file\", | sed -e "s|static/audio/[0-9]\+_.*/[0-9]\+_\(.*\)\.mp3|\1|g"; done`

echo -n ${r%,}
  echo -n ]
echo -n }
