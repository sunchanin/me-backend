const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const get_users = async () => {
  const users = await prisma.user.findMany();
  return users;
};

module.exports = {
  get_users,
};
