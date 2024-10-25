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
    const errors = [];
    if (name.length < 2 || name.length > 50)
      errors.push("Le nom doit contenir entre 2 et 50 caractères.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      errors.push("L'adresse e-mail n'est pas valide.");
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone))
      errors.push(
        "Le numéro de téléphone doit contenir exactement 10 chiffres."
      );

    if (firstname.length < 2 || firstname.length > 50)
      errors.push("Le prénom doit contenir entre 2 et 50 caractères.");
    if (lastname.length < 2 || lastname.length > 50)
      errors.push("Le nom de famille doit contenir entre 2 et 50 caractères.");
    if (address.length < 5 || address.length > 100)
      errors.push("L'adresse doit contenir entre 5 et 100 caractères.");
    if (city.length < 2 || city.length > 50)
      errors.push("La ville doit contenir entre 2 et 50 caractères.");
    if (state.length < 2 || state.length > 50)
      errors.push("L'état doit contenir entre 2 et 50 caractères.");

    if (errors.length > 0) {
      return res.status(422).json({ message: "Invalid input data", errors });
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
        studentInformations,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur. Veuillez réessayer plus tard." });
    }
  },
};
