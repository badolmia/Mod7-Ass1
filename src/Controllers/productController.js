
exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Product API" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Product API" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Product API" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Product API" });
};
