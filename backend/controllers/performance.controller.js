let records = [];

exports.addPerformance = (req, res) => {
  records.push(req.body);
  res.json({ message: "Performance added" });
};

exports.getPerformance = (req, res) => {
  res.json(records);
};
