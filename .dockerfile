FROM ubuntu:20.04

RUN apt install python3 woff-tools && \
  pip3 install fonttools && \
  curl -LO http://nicofont.pupu.jp/nicomoji_u_2525/nicomoji-plus.zip | unzip ~/ && \
  cd ~/nicomoji-plus && \


