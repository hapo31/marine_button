# Setup

Require node.js 10.x higher.(Recommended 12.x)

```
npm install -g yarn && yarn
```

# Develop


## 開発サーバー起動
```
yarn dev
```

## リソースアップデート
```
yarn updateResources:dev
```

## ボタン追加方法

### 軽く仕組み解説
ディレクトリ構造から音声一覧ファイルを生成し、 next.js の SSG にてHTMLを生成するという仕組みになっている。
audiolist.sh を実行すると、このディレクトリ内を find コマンドで音声ファイルを列挙し、 `static/audiolist.json` が生成される。
audiolist.json は、 next.js 立ち上げ時に getStaticProps 内にて読み込まれ、コンパイル時にボタンの HTML が自動生成される。

### 音声追加方法
各カテゴリ内の数字だけの名前のディレクトリに、NN_ボタン名.mp3 という命名規則のファイルを置き、リソースアップデートを行うと追加されます。
また、数字のディレクトリはサブカテゴリのような扱いになっており、ディレクトリを分けることでページ上でもある程度のまとまりを表現出来ます。

例
>>>
    static/audio/1_汎用/12/00_バケモノ！1.mp3
    static/audio/1_汎用/12/01_バケモノ！2.mp3
    static/audio/1_汎用/12/03_バケモノ！3.mp3
    static/audio/1_汎用/12/04_バケモノ！4.mp3
    static/audio/1_汎用/12/05_バケモノ！5.mp3
    static/audio/1_汎用/12/06_バケモノ！6.mp3
    static/audio/1_汎用/12/07_バケモノ！7.mp3
    static/audio/1_汎用/12/08_バケモノ！8.mp3
    static/audio/1_汎用/12/09_バケモノ！9.mp3
    static/audio/1_汎用/12/10_バケモノ！10.mp3

手作業でこれを行うのがつらい場合はカテゴリを分けるに止め、サブカテゴリに無理に分ける必要はないですが、ボタンの使い勝手を考えるなら整理されているのが良いと思います。


# CSS Rule

ぶっちゃけると決めてないけどレイアウト系には独自のクラス名を付けてフォントの大きさとか色とか見た目は専用のクラスを作ってそれを個別に当てる運用にしたいなって思ってる（適当）

# LICENCE

## static/audio/ 以下に配置されている音声ファイル(silence.wavを除く)につきまして

ここに配置されているファイルは、カバー株式会社(cover corp.)の所有物です。
よって、[公式の二次創作ガイドライン](https://www.hololive.tv/terms) に従うものとします

## それ以外
MIT
