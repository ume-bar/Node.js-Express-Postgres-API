// コントローラを作成

// CRUD機能
// create
// findAll
// findOne
// update
// delete
// deleteAll
// findAllPublished

const db = require("../models");
const Todo = db.todo_db;
const Op = db.Sequelize.Op;

// 新しいオブジェクトを作成します
// 新しいtodoを作成して保存する
exports.create = (req, res) => {
    // リクエストの検証
    if (!req.body.title) {
        res.status(400).send({
            message: "コンテンツが空っぽです"
        });
        return;
    }

    // todoを作成する
    const Todo = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // todoをデータベースに保存
    Todo.create(Todo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "todoの作成中に何らかのErrorが生じました"
            });
        });

};

// オブジェクトを取得する（条件付き）
// データベースからすべてのtodoを取得します
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Todo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "todoの習得中にErrorが起きました"
            });
        });
};
// req.query.titleリクエストからクエリ文字列を取得し、
// それをfindAll()メソッドの条件と見なすために使用します

// 単一のオブジェクトを取得する
// IDを持つ単一のtodoを検索する
exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "todoの検索に失敗致しました id=" + id
            });
        });
};


// オブジェクトを更新する
// idリクエストでで識別されるtodoを更新します
exports.update = (req, res) => {
    const id = req.params.id;

    Todo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "todoが正常に更新されました"
                });
            } else {
                res.send({
                    message: `でtodoを更新できません id=${id}. todoが
                    見つからないか、req.bodyが空である可能性があります`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "todoの更新Error id=" + id
            });
        });
};

// オブジェクトを削除する
// リクエストで指定されたIDのtodoを削除します
exports.delete = (req, res) => {
    const id = req.params.id;

    Todo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "todoを削除致しました"
                });
            } else {
                res.send({
                    message: `でtodoを削除できません id=${id}. todoが見つからないようです`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "todoを削除できませんでした id=" + id
            });
        });
};

// すべてのオブジェクトを削除します
// データベースからすべてのtodoを削除します。
exports.deleteAll = (req, res) => {
    Todo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} todoの削除に成功致しました` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "全てのtodo削除中になんらかのErrorが発生致しました"
            });
        });
};

// 条件ですべてのオブジェクトを検索 published = true：
// 公開されているすべてのtodoを検索する
exports.findAllPublished = (req, res) => {
    Todo.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "todo取得中にErrorが発生致しました"
            });
        });
};
