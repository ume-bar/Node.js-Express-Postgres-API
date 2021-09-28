module.exports = app => {
    const todos = require("../controllers/todo-controller.js");

    var router = require("express").Router();

    // 新しいtodoを作成する
    router.post("/", todos.create);

    // すべてのtodoを取得する
    router.get("/", todos.findAll);

    // 公開されているすべてのtodoを取得する
    router.get("/published", todos.findAllPublished);

    // IDを持つ単一のtodoを取得します
    router.get("/:id", todos.findOne);

    // idでtodoを更新する
    router.put("/:id", todos.update);

    // IDのtodoを削除する
    router.delete("/:id", todos.delete);

    // 新しいtodoを作成する
    router.delete("/", todos.deleteAll);

    app.use('/api/todos', router);
};

// ルートを定義
// クライアントがHTTPリクエスト（GET、POST、PUT、DELETE）を使用して
// エンドポイントのリクエストを送信する場合、
// ルートを設定してサーバーがどのように応答するかを決定する必要がある
// これらはそれぞれのルート
// /api/todos: GET, POST, DELETE
// /api/todos/:id: GET, PUT, DELETE
// /api/todos/published: GET

//   /controllers/todo-controller.jsから
//   コントローラーを使用していることがわかります

// 
