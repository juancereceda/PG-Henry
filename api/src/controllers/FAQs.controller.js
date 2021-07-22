const contactAdministration = (req, res) => {
  try {
    res.send("hey");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  contactAdministration,
};
