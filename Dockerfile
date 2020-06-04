FROM ubuntu:20.04

USER root

WORKDIR /root

RUN apt-get update && apt-get install -y wget git python3 python3-distutils zip unzip
RUN wget http://nicofont.pupu.jp/nicomoji_u_2525/nicomoji-plus.zip && \
  unzip nicomoji-plus.zip -d /root/ && \
  wget https://bootstrap.pypa.io/get-pip.py && \
  python3 get-pip.py && \
  python3 -m pip install virtualenv && \
  git clone https://github.com/fonttools/fonttools && \
  cd fonttools && \
  python3 -m virtualenv fonttools-venv && \
  pip install -e . && \
  pip install brotli && \
  mkdir /root/dest

VOLUME /root/nicomoji-plus
VOLUME /root/fonttools
WORKDIR /root/fonttools
ENTRYPOINT . fonttools-venv/bin/activate && pyftsubset /root/nicomoji-plus/nicomoji-plus_1.11.ttf --text-file=../chars.txt --layout-features='*' --unicodes='*' --flavor=woff2 --output-file=/root/sub_nicomoji-plus.woff2 && chmod 777 /root/sub_nicomoji-plus.woff2
# ENTRYPOINT /bin/bash
