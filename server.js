const express = require("express");
// ExpressはRESTAPIを構築するためのもの
const bodyParser = require("body-parser");
// body-parserは、リクエストを解析してreq.bodyオブジェクトを作成するのに役立つ
const cors = require("cors");
// corsは、さまざまなオプションでCORSを有効にするExpressミドルウェアを提供
const app = express();
// expressとcorsモジュールをインポート
// ExpressはRESTAPIを構築するためのもの
// corsは、さまざまなオプションでCORSを有効にするExpressミドルウェアを提供

var corsOptions = {
    origin: "http://localhost:8081"
};
// テストが簡単なGETルートを定義
// Expressアプリを作成し、メソッドを使用body-parserしてcorsミドルウェアを
// 追加しapp.use()ます。origin原点を設定していることに注意
// ポート8080で着信要求をlisten
app.use(cors(corsOptions));

// コンテンツタイプのリクエストを解析 - application/json
app.use(express.json());

// コンテンツタイプのリクエストを解析 - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// // server.jsのsync()メソッドを呼び出すことを忘れないように
const db = require("./app/models");
db.sequelize.sync();
// // 既存のテーブルを削除してデータベースを再同期する必要がありforce: trueにする
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// ルート
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

require("./app/routes/turorial.routes")(app);
// ポート8080で着信要求
// ポートを設定し、listenをリクエスト
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
// コマンドを使用してアプリを実行 node server.js
