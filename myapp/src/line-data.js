/* http://www.ekidata.jp/api/api_pref.php
 * 駅データ.jp様からいただいた東京都をの路線一覧。
 * 新幹線は含まれていないとのこと
 */
const lineData = [
    {
      "line_cd": 11301,
      "line_name": "JR東海道本線(東京～熱海)"
    },
    {
      "line_cd": 11302,
      "line_name": "JR山手線"
    },
    {
      "line_cd": 11303,
      "line_name": "JR南武線"
    },
    {
      "line_cd": 11305,
      "line_name": "JR武蔵野線"
    },
    {
      "line_cd": 11306,
      "line_name": "JR横浜線"
    },
    {
      "line_cd": 11308,
      "line_name": "JR横須賀線"
    },
    {
      "line_cd": 11311,
      "line_name": "JR中央本線(東京～塩尻)"
    },
    {
      "line_cd": 11312,
      "line_name": "JR中央線(快速)"
    },
    {
      "line_cd": 11313,
      "line_name": "JR中央・総武線"
    },
    {
      "line_cd": 11314,
      "line_name": "JR総武本線"
    },
    {
      "line_cd": 11315,
      "line_name": "JR青梅線"
    },
    {
      "line_cd": 11316,
      "line_name": "JR五日市線"
    },
    {
      "line_cd": 11317,
      "line_name": "JR八高線(八王子～高麗川)"
    },
    {
      "line_cd": 11319,
      "line_name": "宇都宮線"
    },
    {
      "line_cd": 11320,
      "line_name": "JR常磐線(上野～取手)"
    },
    {
      "line_cd": 11321,
      "line_name": "JR埼京線"
    },
    {
      "line_cd": 11323,
      "line_name": "JR高崎線"
    },
    {
      "line_cd": 11326,
      "line_name": "JR京葉線"
    },
    {
      "line_cd": 11328,
      "line_name": "JR成田エクスプレス"
    },
    {
      "line_cd": 11332,
      "line_name": "JR京浜東北線"
    },
    {
      "line_cd": 11333,
      "line_name": "JR湘南新宿ライン"
    },
    {
      "line_cd": 11343,
      "line_name": "上野東京ライン"
    },
    {
      "line_cd": 21001,
      "line_name": "東武東上線"
    },
    {
      "line_cd": 21002,
      "line_name": "東武伊勢崎線"
    },
    {
      "line_cd": 21005,
      "line_name": "東武亀戸線"
    },
    {
      "line_cd": 21006,
      "line_name": "東武大師線"
    },
    {
      "line_cd": 22001,
      "line_name": "西武池袋線"
    },
    {
      "line_cd": 22003,
      "line_name": "西武有楽町線"
    },
    {
      "line_cd": 22004,
      "line_name": "西武豊島線"
    },
    {
      "line_cd": 22006,
      "line_name": "レオライナー"
    },
    {
      "line_cd": 22007,
      "line_name": "西武新宿線"
    },
    {
      "line_cd": 22008,
      "line_name": "西武拝島線"
    },
    {
      "line_cd": 22009,
      "line_name": "西武西武園線"
    },
    {
      "line_cd": 22010,
      "line_name": "西武国分寺線"
    },
    {
      "line_cd": 22011,
      "line_name": "西武多摩湖線"
    },
    {
      "line_cd": 22012,
      "line_name": "西武多摩川線"
    },
    {
      "line_cd": 23001,
      "line_name": "京成本線"
    },
    {
      "line_cd": 23002,
      "line_name": "京成押上線"
    },
    {
      "line_cd": 23003,
      "line_name": "京成金町線"
    },
    {
      "line_cd": 23006,
      "line_name": "成田スカイアクセス"
    },
    {
      "line_cd": 24001,
      "line_name": "京王線"
    },
    {
      "line_cd": 24002,
      "line_name": "京王相模原線"
    },
    {
      "line_cd": 24003,
      "line_name": "京王高尾線"
    },
    {
      "line_cd": 24004,
      "line_name": "京王競馬場線"
    },
    {
      "line_cd": 24005,
      "line_name": "京王動物園線"
    },
    {
      "line_cd": 24006,
      "line_name": "京王井の頭線"
    },
    {
      "line_cd": 24007,
      "line_name": "京王新線"
    },
    {
      "line_cd": 25001,
      "line_name": "小田急線"
    },
    {
      "line_cd": 25003,
      "line_name": "小田急多摩線"
    },
    {
      "line_cd": 26001,
      "line_name": "東急東横線"
    },
    {
      "line_cd": 26002,
      "line_name": "東急目黒線"
    },
    {
      "line_cd": 26003,
      "line_name": "東急田園都市線"
    },
    {
      "line_cd": 26004,
      "line_name": "東急大井町線"
    },
    {
      "line_cd": 26005,
      "line_name": "東急池上線"
    },
    {
      "line_cd": 26006,
      "line_name": "東急多摩川線"
    },
    {
      "line_cd": 26007,
      "line_name": "東急世田谷線"
    },
    {
      "line_cd": 27001,
      "line_name": "京急本線"
    },
    {
      "line_cd": 27002,
      "line_name": "京急空港線"
    },
    {
      "line_cd": 28001,
      "line_name": "東京メトロ銀座線"
    },
    {
      "line_cd": 28002,
      "line_name": "東京メトロ丸ノ内線"
    },
    {
      "line_cd": 28003,
      "line_name": "東京メトロ日比谷線"
    },
    {
      "line_cd": 28004,
      "line_name": "東京メトロ東西線"
    },
    {
      "line_cd": 28005,
      "line_name": "東京メトロ千代田線"
    },
    {
      "line_cd": 28006,
      "line_name": "東京メトロ有楽町線"
    },
    {
      "line_cd": 28008,
      "line_name": "東京メトロ半蔵門線"
    },
    {
      "line_cd": 28009,
      "line_name": "東京メトロ南北線"
    },
    {
      "line_cd": 28010,
      "line_name": "東京メトロ副都心線"
    },
    {
      "line_cd": 99301,
      "line_name": "都営大江戸線"
    },
    {
      "line_cd": 99302,
      "line_name": "都営浅草線"
    },
    {
      "line_cd": 99303,
      "line_name": "都営三田線"
    },
    {
      "line_cd": 99304,
      "line_name": "都営新宿線"
    },
    {
      "line_cd": 99305,
      "line_name": "都電荒川線"
    },
    {
      "line_cd": 99307,
      "line_name": "埼玉高速鉄道線"
    },
    {
      "line_cd": 99309,
      "line_name": "つくばエクスプレス"
    },
    {
      "line_cd": 99311,
      "line_name": "ゆりかもめ"
    },
    {
      "line_cd": 99334,
      "line_name": "多摩モノレール"
    },
    {
      "line_cd": 99336,
      "line_name": "東京モノレール"
    },
    {
      "line_cd": 99337,
      "line_name": "りんかい線"
    },
    {
      "line_cd": 99340,
      "line_name": "北総鉄道北総線"
    },
    {
      "line_cd": 99342,
      "line_name": "日暮里・舎人ライナー"
    }
];

export default lineData;
