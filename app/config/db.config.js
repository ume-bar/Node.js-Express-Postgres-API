module.exports = {
    HOST: "localhost",
    USER: "",
    PASSWORD: "",
    DB: "todo_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
// 最初の5つのパラメーターはPostgreSQL接続用
// poolオプションは、接続プール構成に利用
// max：プール内の接続の最大数
// min：プール内の接続の最小数
// idle：接続が解放される前にアイドル状態にできる最大時間（ミリ秒単位）
// acquire：エラーをスローする前に、そのプールが接続を取得しようとする最大時間（ミリ秒単位）
// モデルを含むapp / modelsフォルダーでSequelizeを初期化