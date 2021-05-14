/* eslint react-hooks/exhaustive-deps: off */
// ファイルの拡張子をjsxにすることができる
// Reactのコンポーネントはこちらが推奨されるとのこと
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // useStateから変数(名前は何でもいい)と変数を設定する関数(set+変数名)を取得する
  // useState(変数の初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwhitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectの第２引数の設定
  // []を指定すると最初に画面を読み込まれた時だけ実行
  // 変数を指定するとその変数が変更された場合だけ実行
  // eslint(構文チェックツール)がuseEffect内で使用している全ての変数を第２引数に使用しないと
  // エラーの元になると警告してくる。無視しても良い(ファイルの1行目にこのファイルだけ設定を無効にする設定を記述)
  useEffect(() => {
    if (num > 0) {
      // stateを無闇に更新するとToo many re-rendersとエラーが出る
      // エラーが発生しないように必要がない場合はstateの更新を行わないようにする
      // 以下は論理演算子を利用して、同じ値を上書きしないようにしている
      if (num % 3 === 0) {
        // faceShowFlagがtrueの場合はsetFaceShowFlagを呼ばない
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // faceShowFlagがfalseの場合はsetFaceShowFlagを呼ばない
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // この方法でもeslintを無効にできる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    // 返却するタグは1つにするルールがある
    // <> </>または<React.Fragment> </React.Fragment>で囲うと解決
    <>
      {/* styleの1つ目の{}はJavaScriptを記載するため、2つ目の{}はオブジェクトを記載するため */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* 別ファイルのコンポーネント(ColorfulMessage)を呼び出している */}
      {/* props　要素名はなんでもいい(color,message) 設定値は=で設定 */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/* イベント(onClick)はタグの中に記載し、{}に関数を記載する */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwhitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( *｀ω´)</p>}
    </>
  );
};

// 他のファイルでも関数を使用できるようにエクスポートする
export default App;
