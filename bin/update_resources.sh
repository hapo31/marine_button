#!/bin/bash

bin/audiolist.sh > static/audiolist.json
bin/metainfo.sh > static/metainfo.json
bin/create_font_subset.sh
