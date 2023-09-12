
exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Portfolio API" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Portfolio API" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Portfolio API" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Portfolio API" });
};
