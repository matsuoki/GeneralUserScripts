// ==UserScript==
// @id          Rakuten-Directory-ID-and-TAG-Viewer@matsuoki
// @name        Rakuten Directory ID and TAG Viewer
// @namespace   com.tachiuo.ec.rakuten
// @downloadURL https://www.tachiuo.com/userscripts/Rakuten_Directory_ID_and_TAG_Viewer.user.js
// @uploadURL   https://www.tachiuo.com/userscripts/Rakuten_Directory_ID_and_TAG_Viewer.user.js
// @author      matsuoki@tachiuo.com
// @description 楽天のアイテムの画面でディレクトリIDと商品タグを左上に表示します。
// @include		https://item.rakuten.co.jp/*
// @include		http://item.rakuten.co.jp/*
// @version     1.1.20170727
// @grant       none
// ==/UserScript==

//  update 2017/7/27 常時SSL対応（http=>https）

var id = document.body.innerHTML.match(/genre_id=([0-9]+)/)[1];
var tag = document.body.innerHTML.match(/category_tag:\['(.*)'\]/)[1];

var t = document.createElement("div");
t.id = 'rakuten_idtag_label';
t.style.cssText = "float:none;"
    + "font-size:10px;"          + "z-index:9999999999;"
    + "border:solid 1px red;"    + "position:fixed;"
    + "top:40;"                  + "left:0;"
    + "line-height:12px;"        + "padding:2 1;"
    + "margin:2;"                + "background:yellow;"
    + "font-family:monospace";

t.innerHTML = 'ID :<input type="text" value="'+ id + '"><br>' 
+ 'TAG:<input type="text" value="'+ tag + '">'
+ '<br>';

var a = document.createElement("a");
a.innerHTML = "【クリックで閉じる】";
var f = new Function('document.getElementById("rakuten_idtag_label").style.visibility="hidden";');
a.onclick = f;
t.appendChild(a);

var parent_object = document.getElementsByTagName("body")[0];
parent_object.appendChild(t);
