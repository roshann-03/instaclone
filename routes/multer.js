const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });
module.exports = upload;