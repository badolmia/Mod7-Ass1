
exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Blog API" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Blog API" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Blog API" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Blog API" });
};
