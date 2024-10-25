const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  createForm: async (studentInformation) => {
    return prisma.form.create({
      data: studentInformation,
    });
  },
};
