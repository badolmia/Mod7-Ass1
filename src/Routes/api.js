
const express = require("express");
const router = express.Router();

const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require("../Controllers/blogController");

const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require("../Controllers/commentController");

const {
  create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
} = require("../Controllers/messageController");

const {
  create: createPortfolio,
  read: readPortfolio,
  delete: deletePortfolio,
  update: updatePortfolio,
} = require("../Controllers/portfolioController");

const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require("../Controllers/productController");


router.get("/blog/create", createBlog);
router.get("/blog/read", readBlog);
router.get("/blog/delete", deleteBlog);
router.get("/blog/update", updateBlog);

router.get("/comment/create", createComment);
router.get("/comment/read", readComment);
router.get("/comment/delete", deleteComment);
router.get("/comment/update", updateComment);

router.get("/message/create", createMessage);
router.get("/message/read", readMessage);
router.get("/message/delete", deleteMessage);
router.get("/message/update", updateMessage);

router.get("/portfolio/create", createPortfolio);
router.get("/portfolio/read", readPortfolio);
router.get("/portfolio/delete", deletePortfolio);
router.get("/portfolio/update", updatePortfolio);

router.get("/product/create", createProduct);
router.get("/product/read", readProduct);
router.get("/product/delete", deleteProduct);
router.get("/product/update", updateProduct);

module.exports = router;
