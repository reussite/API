const inscriptionModel = require("../models/inscriptionModel");

module.exports = {
  createInscription: async (req, res) => {
    const { name, firstname, lastname, phone, address, city, state, email } =
      req.body;

    if (
      !name ||
      !firstname ||
      !lastname ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !email
    ) {
      return res.status(422).json({ message: "Missing required fields" });
    }

    try {
      const studentInformations = await inscriptionModel.createForm({
        name: name,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        city: city,
        state: state,
        email: email,
      });

      res.status(201).json({
        message: "Student information created successfully",
        studentInformations: studentInformations,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  },
};
