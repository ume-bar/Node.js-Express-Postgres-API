// モデルを定義
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
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

    return Tutorial;
};

// このSequelizeModelは、PostgreSQLデータベースの
// チュートリアルテーブルを表します。これらの列は自動的に生成されます
// ：id、title、description、published、createdAt、updatedAt。
// Sequelizeを初期化した後、CRUD関数を作成する必要はありません。
// Sequelizeはそれらすべてをサポートしています

// 新しいチュートリアルを作成します。 create(object)
// idでチュートリアルを検索します。 findByPk(id)
// すべてのチュートリアルを入手する： findAll()
// idでチュートリアルを更新します。 update(data, where: { id: id })
// チュートリアルを削除します。 destroy(where: { id: id })
// すべてのチュートリアルを削除します。 destroy(where: {})
// タイトルですべてのチュートリアルを検索します。 findAll({ where: { title: ... } })

// これらの関数は、コントローラーで使用されます

// チュートリアルごとにコメントを追加することで、例を改善できます。これは1対多の関係であり、
// このチュートリアルを次の場所に作成します

// または、チュートリアルごとにタグを追加し、
// チュートリアルをタグに追加することもできます（多対多の関係）

