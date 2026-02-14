let interns = [];

exports.createIntern = (req, res) => {
  interns.push(req.body);
  res.json({ message: "Intern profile created" });
};

exports.getInterns = (req, res) => {
  res.json(interns);
};

exports.updateIntern = (req, res) => {
  const { index } = req.params;
  interns[index] = req.body;
  res.json({ message: "Intern updated" });
};

exports.deleteIntern = (req, res) => {
  const { index } = req.params;
  interns.splice(index, 1);
  res.json({ message: "Intern deleted" });
};
