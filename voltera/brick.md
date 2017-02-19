# VolteraでFaBo Brickを設計

## WS2812Bをつかって回路設計

[WS2812BのDatasheet](http://www.adafruit.com/datasheets/WS2812B.pdf)

WS2812Bを使って、FaBo Brickを試作する。

## ライブラリの取り込み

まず、FaBoのライブラリ群をEagleに取り込む。

https://github.com/FaBoPlatform/FaBo-Eagle-Libraries

に接続し、Clone or Downloadを選択し、ローカルにダウンロードする。

![](/img/colorled001.png)

ダウンロードしたファイルを解凍し、/Application/Eagle-8.0/lbr フォルダにコピーする。

![](/img/colorled002.png)

![](/img/colorled003.png)

Eagleの回路設計の画面に移動し、メニューから[Library]-[Use...]を選択し、先程コピーしたライブラリ一式を選択する。

![](/img/colorled004.png)

![](/img/colorled005.png)

メニューから[Library]-[Update all]を選択し、ライブラリを取り込む。

![](/img/colorled006.png)

## FaBoの規格の3端子を作成

アイコンメニューから、Addを選択する。

![](/img/colorled007.png)

SearchにPadと入れ、Padを選択する。

![](/img/colorled008.png)

3つ配置する。

![](/img/colorled009.png)

アイコンメニューから、Nameを選択する。、一番上のPadの名前をDINに変更する。

![](/img/colorled010.png)

2番目のPadの名前をGNDに、3番目のPadの名前をVCCに変更する。

![](/img/colorled011.png)

今度は、アイコンメニューから、Valueを選択し、3つのPadのValueを空にする。

![](/img/colorled012.png)

![](/img/colorled013.png)

## WS2812Bの配置

アイコンメニューから、Addを選択する。

![](/img/colorled015.png)

SearchにWS2812Bと入力し、WS2812Bを選択する。

![](/img/colorled016.png)

WS2812Bを3個配置する。

![](/img/colorled017.png)

## GNDの配線

![](/img/colorled018.png)

![](/img/colorled019.png)

![](/img/colorled020.png)

![](/img/colorled021.png)

## VCCの配線

![](/img/colorled018.png)

![](/img/colorled022.png)

![](/img/colorled023.png)

![](/img/colorled024.png)

## コンデンサの配線

![](/img/colorled018.png)

![](/img/colorled025.png)

![](/img/colorled026.png)

![](/img/colorled027.png)


![](/img/colorled018.png)

![](/img/colorled019.png)

![](/img/colorled028.png)

![](/img/colorled029.png)

## DINの配線

![](/img/colorled030.png)

![](/img/colorled031.png)

![](/img/colorled032.png)

![](/img/colorled033.png)




