#!/bin/bash

bin/audiolist.sh > static/audiolist.json
bin/create_font_subset.sh
