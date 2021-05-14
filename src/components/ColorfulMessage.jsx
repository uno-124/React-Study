import React from "react";

// 変数を指定することでpropsを受け取れる
// 名前は何でもいいがpropsが一般的
// 関数の先頭にexportをつけることで外部ファイルから呼び出すことができる
// その場合呼び出し元のimportで{}が必要
// 名前を間違えるとエラーになるため、名称を揃えることができ可読性が上がるためおすすめ
export const ColorfulMessage = (props) => {
  // 分割代入でpropsの中身を受け取る
  const { color, children } = props;
  const contentStyle = {
    //color: color, // propsの値を設定
    color, // ※オブジェクトのプロパティ名と設定値が同じ名前の場合は省略できる
    fontSize: "18px"
  };

  // propsの値を設定(JSXの中なので{}を使用)
  // props.childrenを使用するとタグで囲った値を受け取ることができる
  return <p style={contentStyle}>{children}</p>;
};
