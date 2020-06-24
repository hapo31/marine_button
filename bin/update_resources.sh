#!/bin/bash -e

mkdir -p .cache
mkdir -p .temp

bin/audiolist.sh > .temp/audiolist.json

TS_NODE_COMPILER_OPTIONS='{"module":"commonjs", "target": "es5" }' ts-node ./src/utils/create_voicelist_json.ts ./.temp/audiolist.json > static/voicelist.json

bin/audiolist.sh > static/audiolist.json
bin/metainfo.sh > static/metainfo.json
bin/create_font_subset.sh
