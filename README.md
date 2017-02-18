React ハンズオン

---
@besutome さんの資料をベースに作っています

# @YutamaKotaro
![right](./prof.png)

### フロントエンドエンジニア

React Native Meetupをお手伝いさせていただいています。
最近はあんまりReact Nativeやれてない・・・。
普段はエンプラ系に勤務してますがそろそろ卒業したい・・・。
人前に立つと緊張しますが大目にみてください。

---

# セットアップ

---

## 必要なツール

【必要なものmac】
+ Commnad Line Tools
+ Homebrew
+ Editor

【必要なものwindows】
+ cmd
+ node Installer(or Nodist Installer)
+ Editor
+ Git.bash(あったほうがよい)


---

## Node.jsのインストール

### macの方
```sh
$ brew update
$ brew install node
```

### windowsの方
かつてはpath通すとかありましたが今は不要です。

方法１（パッケージ版Nodeでやるタイプ）
1. [ダウンロードページ](https://nodejs.org/ja/download/)にいって、自身のマシン環境に見合ったInstallerを入手してください(LTS版推奨)
2. インストーラーにしたがってインストールします

方法２（バージョン管理ツールでやるタイプ）
[Nodistはこちら](https://github.com/marcelklehr/nodist/releases)
1. .exeを入手してインストールを進めます。
2. cmdを立ち上げて　`nodist + 6.9.5`を実行します。


---

## Reactのインストール


ここからは共通


macの方はターミナルなど
windowsの方はcmdなどを開いて実行してください。

```sh
$ npm install -g create-react-app
```


---

## 雛形の作成

```sh
$ create-react-app myapp
$ cd myapp
$ npm start
```

`http://localhost:3000/`にサンプルが表示されます


---

# React概要

---

## Component（ここは説明するだけです）

Reactは **Component** というモジュールを使い、複数のComponentを組み合わせて実装します

`src/App.js`をみてみると下記のようになっています。

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

これはコンポーネントと呼ばれ、これらを組み合わせて作っていくことになります。


`src/index.js`　では、

```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

となっており、このコードによって`src/App.js`が`src/index.js`の`<App />`の箇所に呼び出され、`public/index.html`の`id="root"`となっている箇所に出力されます。
そして、この`<App />`が **Component** です

---

## Props

各コンポーネントにはパラメータを与えることができ、それを **Props** といいます
新しいコンポーネントを作成します。


`src/Text.js`を作成し、下記コードを書きます。

`src/Text.js`

```js
import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <span style={{color: "red"}}>
        {this.props.text}
      </span>
    );
  }
}

export default Text;
```
`src/App.js`を書き換えます

`src/App.js`

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Text text="ハンズオン" />
        </div>
      </div>
    );
  }
}

export default App;
```

保存すればリロードしなくても変更点は反映されています。
画面にハンズオンと赤字で表示されています。


ここでコードを振りかえると、

`src/App.js`

```js
・・・
// Textコンポーネントの読み込み
import Text from './Text';

・・・
// Textコンポーネントの使用
// propsとして”ハンズオン"を渡している
<div className="App-intro">
  <Text text="ハンズオン" />
</div>
```

となっています。
これによってTextコンポーネントが画面に表示されるようになります。
そして`src/Text`では、

```js
・・・
<span style={{color: "red"}}>
  {this.props.text}
</span>
・・・
```
となっています。
このように親から渡されたpropsはthis.propsで参照できます。
この場合はtextというpropsを参照したいのでthis.props.textとなります。

### 余談（ReactのStyleとか）

styleを使うことでスタイルを簡単に適用することができます。

```js
<span style={{color: "red"}}>
```

このようになっています。これはCSSの`color: red`と同じ意味合いになります。
また、Reactでは {} で囲うことによってJavaScriptとして評価されるのでこれはオブジェクトを渡しているということになります。

inlineStyleっぽいですが、オブジェクトを渡すという点と、

```js
<span style={{ backgroundColor: "blue" }}
```

プロパティ名はキャメルケースに置き換えるという点が異なっています。

さらに、クラスを使いたい場合は

```js
<div className="App-intro">
```

と`class`ではなく`className`になっている点も注意してください。
CSSに描くCSSはいつも通りで問題ありません。

---

## State

コンポーネントがもつ値にはPropsのほかに **State** があります。
Propsは親から渡されるものですが、Stateはコンポーネントの中で変更される値を保持するために使います。


下記のようにText.jsを書き換えます。

`src/Text.js`

```js
 class Text extends Component {
   constructor(props) {
     super(props);
     this.state = {
       showText: true
     };

     setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
     }, 1000);
   }

  render() {
    const text = this.state.showText? this.props.text : '';
    return (
      <div>
        <span style={{color: "red"}}>
          {text}
        </span>
      </div>
    );
  }
}
```

このようにするとTextコンポーネントの文字が点滅します。
昔懐かしのホームページみたいですね。


Stateの初期値は、`constructor`内で`this.state`に代入することで利用できます。

```js
this.state = {
  showText: true
};
```

設定したStateには`this.state`からアクセスできます。

```js
const text = this.state.showText? this.props.text : '';
```

State更新には`this.setState()`を利用します。
setStateが実行されると、このStateを利用している他のコンポーネントは再レンダリングされます。

```js
this.setState({
  showText: !this.state.showText
});
```

この場合は、１秒ごとに、this.state.showTextがtrueになったりfalseになり、その度再レンダリングされるという挙動になります。

### 余談（Reactの御法度）

renderメソッドは画面描写の時に実行されるので、renderメソッドの中で`setState`を使わないでください。

```js
・・・
render() {
  const text = this.state.showText? this.props.text : '';
  this.setState({
    showText: !this.state.showText
  });
  return (
    <div>
      <span style={{color: "red"}}>
        {text}
      </span>
    </div>
  );
}
```

やっちゃった人は一回ブラウザ落とさないとダメかも・・・。コンソールみるとエライことになってます。
Reactあるあるですね。

renderメソッドの中でsetStateを使うと、

```
render -> setState -> render -> setState -> render ->　・・・・
```

と無限ループに陥ってしまいます。　　
> 後述するcomponentWillUpdate（コンポーネントが更新される時に実行される）などsetStateと関係のあるメソッドでも毎回setStateされるようなコーディングをすると、無限ループに入ってしまいます。



---

## Style

クラスを指定したい際は、`className="App"`で指定できます
スタイルを直接指定したい際は、`<span style={{color: "red"}}>`のように指定できます

また、
```js
const style = {color: "red"};
<span style={style}>
```
このようにも指定できます
この際`style`変数はオブジェクトなので、入れ子にして個別指定も可能です

---

## Component Life Cycle

特定の際にしたい処理などを記載するには、以下のメソッドを利用します
http://qiita.com/kawachi/items/092bfc281f88e3a6e456 の図が参考になります

+ `componentWillMount()`
  + コンポーネントがマウント(メモリにロード)される前に一度だけ呼ばれます
+ `componentDidMount()`
  + コンポーネントがマウント(メモリにロード)された後に一度だけ呼ばれます
+ `componentWillReceiveProps(nextProps)`
  + コンポーネントのPropsが更新される際に呼ばれます
    最初のマウントの段階では呼ばれません
+ `shouldComponentUpdate(nextProps,nextState)`
  + PropsやStateが更新された際に呼ばれます
    通常、PropsやStateが更新されると自動で再レンダリングしますが、
    再レンダリングさせたくない際（パフォーマンの問題など）はこのメソッドで`false`を返します
    レンダリングしたい際は`true`を返します
+ `componentWillUpdate(nextProps,nextState)`
  + PropsやStateが更新され、レンダリングされる前に呼ばれます
    最初のレンダリング時には呼ばれません
+ `componentDidUpdate(prevProps,prevState)`
  + PropsやStateが更新され、レンダリングした後に呼ばれます
    最初のレンダリング時には呼ばれません
+ `componentWillUnmount()`
  + コンポーネントが表示されなくなり、レンダリングされなくなる前に呼ばれます

---

## PropTypes(ここは説明するだけです)

コンポーネントにどういったPropsを渡したかを定義するのが  **PropTypes** です
必須ではありませんが、開発時には記載すべきです

Propsの型が定義されたものと違ったり、足りないPropsがある場合はWarningが表示されます

```js
Class Pizza extends Component {
  static propTypes = {
    cheeze: React.PropTypes.string.isRequired,
    meat: React.PropTypes.number.isRequired,
    onion: React.PropTypes.object,
  };
}
```

コンポーネントを作る際にデフォルトのPropsを設定することも可能です

**no-error**

```js
class Pizza extends Component{
  static defaultProps = {
    cheeze: 'チェダーチーズ',
    meat : 10,
    onion {redOnion, Onion},
  };
}
```

**warn**

meatがnumberではなく、stringになっているのでアウト！

```js
class Pizza extends Component{
  static defaultProps = {
    cheeze: 'マシマシ',
    meat : 'マシマシ',
    onion {redOnion, Onion},
  };
}
```

肉マシマシはダメみたいですね。


---

## bind

新たにButtonコンポーネント作るので`src/Button.js`を作成して下記コードを書いてください。

```js
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

 render() {
   return (
      <button onClick={this.addCount}>
        buttonCount{this.state.count}
      </button>
   );
 }
}

export default Button;
```

ここで

```js
  this.addCount = this.addCount.bind(this);
```

という謎めいた記述があります。

これはclass内でメソッドを定義する場合、`this`がバインドさないためです。
なので、メソッド内で明示的に`this`を利用したい場合は`bind`を利用してください。


バインドの方法はいくつかありますが、一般的には以下の2つです。

```js
   render() {
     <button onClick={this.addCount.bind(this)}>
       button
     </button>
     ...
   }
```

```js
   constructor(props) {
     super(props);

     this.addCount = this.addCount.bind(this);
   }

   render() {
     <button onClick={this.addCount}>
       button
     </button>
     ...
   }
```


---


# もしも時間あったら

リストを表示させます。

駅データ.jpさんから拝借したjsonをarrayにしたものがあるので、これを`src/line-data.js`として保存します。
[こちら！](https://github.com/YutamaKotaro/slides/blob/master/myapp/src/line-data.js)

次に、`src/Lines.js`を作成します。

```js
import React, { Component } from 'react';
import lineData from './line-data';

class Lines extends Component {
    render() {
        return (
            <ul style={{ textAlign: "left" }}>
              {
                lineData.map(line => (
                  <li key={line.line_cd}>
                    {line.line_name}
                  </li>
                ))
              }
            </ul>
        );
    }
}

export default Lines;
```

データを読み込んで表示させるためのコンポーネントになります。

ここで注目すべきは、

```js
{
  lineData.map(line => (
    <li key={line.line_cd}>
      {line.line_name}
    </li>
  ))
}
```

ここになります。
リストをマップにて出力させています。
このように{}を使うことで繰り返し出力をおこなうことができます。

ここについているkeyについてはReactでは繰り返しの場合はkeyが必要になるため、keyを付与する必要があります。
keyには一意のものを持たせてください。なのでここではline_cdを使っています。





---

## Additional

+ ES6(arrow function, const/let, class)
+ React.PureComponnent
+ High Order Component
  https://github.com/acdlite/recompose
+ Function as Child Component
  https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9#.d8hktfyji
+ Test
  + ShallowRender
  + arbnb/enzyme
  + react-test-renderer
+ React StoryBook
+ React Developper Tools

---

## 参考

+ ES6版React.jsチュートリアル http://qiita.com/nownabe/items/2d8b92d95186c3941de0
  + 最初のコンポーネントを作るの章からで大丈夫です
