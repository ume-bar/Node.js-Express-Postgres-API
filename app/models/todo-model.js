// モデルを定義
module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("Todo", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Todo;
};

// このSequelizeModelは、PostgreSQLデータベースの
// todoテーブルを表します。これらの列は自動的に生成されます
// ：id、title、description、published、createdAt、updatedAt。
// Sequelizeを初期化した後、CRUD関数を作成する必要はありません。
// Sequelizeはそれらすべてをサポートしています

// 新しいtodoを作成します。 create(object)
// idでtodoを検索します。 findByPk(id)
// すべてのtodoを入手する： findAll()
// idでtodoを更新します。 update(data, where: { id: id })
// todoを削除します。 destroy(where: { id: id })
// すべてのtodoを削除します。 destroy(where: {})
// タイトルですべてのtodoを検索します。 findAll({ where: { title: ... } })

// これらの関数は、コントローラーで使用されます

// todoごとにコメントを追加することで、例を改善できます。これは1対多の関係であり、
// このtodoを次の場所に作成します

// または、todoごとにタグを追加し、
// todoをタグに追加することもできます（多対多の関係）

