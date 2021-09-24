module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // 新しいチュートリアルを作成する
    router.post("/", tutorials.create);

    // すべてのチュートリアルを取得する
    router.get("/", tutorials.findAll);

    // 公開されているすべてのチュートリアルを取得する
    router.get("/published", tutorials.findAllPublished);

    // IDを持つ単一のチュートリアルを取得します
    router.get("/:id", tutorials.findOne);

    // idでチュートリアルを更新する
    router.put("/:id", tutorials.update);

    // IDのチュートリアルを削除する
    router.delete("/:id", tutorials.delete);

    // 新しいチュートリアルを作成する
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};

// ルートを定義
// クライアントがHTTPリクエスト（GET、POST、PUT、DELETE）を使用して
// エンドポイントのリクエストを送信する場合、
// ルートを設定してサーバーがどのように応答するかを決定する必要がある
// これらはそれぞれのルート
// /api/tutorials: GET, POST, DELETE
// /api/tutorials/:id: GET, PUT, DELETE
// /api/tutorials/published: GET

//   /controllers/tutorial.controller.jsから
//   コントローラーを使用していることがわかります

// 
