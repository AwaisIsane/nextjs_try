"use server";

import prisma from "./db";

export const addCompany = async (name: string, city: string) => {
  try {
    const company = await prisma.company.create({ data: { name, city } });
    return company;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addUser = async (
  name: string,
  email: string,
  phoneNumber: string
) => {
  try {
    const user = await prisma.user.create({
      data: { name, email, phoneNumber },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const assignCompanyToUser = async (
  userName: string,
  companyName: string
) => {
  try {
    const user = await prisma.user.findUnique({ where: { name: userName } });
    const company = await prisma.company.findUnique({
      where: { name: companyName },
    });
    if (user && company) {
      const userUpdated = await prisma.user.update({
        where: { id: user.id },
        data: { CompanyIds: [...user.CompanyIds, company.id] },
      });
      await prisma.company.update({
        where: { id: company.id },
        data: { UserIDs: [...company.UserIDs, company.id] },
      });
      return userUpdated;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUsersWithCompany = async () => {
  const data = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      categories: { select: { name: true } },
    },
  });
  return data;
};

export const getUsersWithCompanyName = async (name: string) => {
  const data = await prisma.company.findMany({
    where: { name },
    select: {
      id: true,
      name: true,
      city: true,
      categories: { select: { name: true, phoneNumber: true } },
    },
  });
  return data;
};
