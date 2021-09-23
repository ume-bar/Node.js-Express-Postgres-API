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
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// 新しいチュートリアルを作成して保存する
exports.create = (req, res) => {

};

// データベースからすべてのチュートリアルを取得します
exports.findAll = (req, res) => {

};

// IDを持つ単一のチュートリアルを検索する

exports.findOne = (req, res) => {

};

// リクエストのIDでチュートリアルを更新します
exports.update = (req, res) => {

};

// リクエストで指定されたIDのチュートリアルを削除します
exports.delete = (req, res) => {

};

// データベースからすべてのチュートリアルを削除します。
exports.deleteAll = (req, res) => {

};

// 公開されているすべてのチュートリアルを検索する
exports.findAllPublished = (req, res) => {

};
