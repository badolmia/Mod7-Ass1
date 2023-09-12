
exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Message API" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Message API" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Message API" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Message API" });
};
