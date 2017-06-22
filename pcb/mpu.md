# ICの配置

Arduino Unoで使用されている「ATMEGA328P」を配置します。

ATMEGA328P
<br>
[データシート](
http://www.atmel.com/images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Complete.pdf)

## ATMEGA328の配置

YouTube動画 https://www.youtube.com/watch?v=5_Sujyv-vhk

## ATMEGA328の配置


## 線を引き、ラベル名をつける

ツールバーより「Net」を選択します。
<br>
![](circuit2-4-04.jpg)

<br>

ICから出ている線の部分全てに線を追加します。
<br>
![](circuit2-4-05.jpg)

<br>

ツールバーより「Label」を選択します。
<br>
![](circuit2-4-06.jpg)

<br>

先ほど追加した線をダブルクリックします。
１回目のクリックで対象を決め、２回目のクリックで場所が決まります。
<br>
![](circuit2-4-07.jpg)

<br>

全ての場所に追加します。
<br>
![](circuit2-4-08.jpg)

<br>



## ラベル名の変更

<br>
![](circuit2-4-09.jpg)

<br>

ATMEGA 328Pの説明

|1|2|3|4|5|6|7|8|9|10|11|12|13|14|
|--|--|--|--|--|--|--|--|--|--|--|--|--|
|Re|D0|D1|D2|D3|D4|5V   |GND|XTAL|XTAL|D5|D6|D7|D8|
|15|16|17|18|19|20|21|22|23|24|25|26|27|28|
|D9|D10|D11|D12|D13|5V|外|GND|A0|A1|A2|A3|A4|A5|

Re：Reset
<br>
外：外部電源
<br>
5V：5V入力

ツールバーより「Label」を選択します。
<br>
![](circuit2-4-10.jpg)

<br>

先ほど引いた線をクリックし、それぞれの名称を入力します。
<br>
![](circuit2-4-11.jpg)

<br>


## GNDと5V電源

<br>
![](circuit2-4-12.jpg)

+5VとGNDを追加しますが、既に配置している部品については、ツールバーの「Copy」にてコピーすることができます。
<br>
使用方法はCopyツール選択後、配置済みの部品をクリックし、次に配置したい場所にクリックすれば完了です。
<br>
![](circuit2-4-13-2.jpg)


<br>
コピーした部品は下のように配置します。
<br>
![](circuit2-4-13.jpg)

<br>

ツールバーの「Net」を使用し配線します。
<br>
+5Vは「AVCC」と「VCC」へ、GNDは左下にあるGND2箇所にそれぞれ配線します。
<br>
![](circuit2-4-14.jpg)










