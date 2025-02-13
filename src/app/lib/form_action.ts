import { z } from "zod";
import { addCompany, addUser, assignCompanyToUser } from "./server_actions";
import { error } from "console";

const createUserFormSchema = z.object({
  name: z.string().min(3, { message: "invalid name" }).trim(),
  email: z.string().email({ message: "invalid email" }).trim(),
  phoneNumber: z.string().min(10, { message: "invalid name" }).trim(),
});

export type createUserFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        phoneNumber?: string[];
      };
      message?: string;
    }
  | undefined;

const createCompanyFormSchema = z.object({
  companyName: z.string().min(3, { message: "invalid name" }).trim(),
  city: z.string().min(3, { message: "invalid city" }).trim(),
});

export type createCompanyFormState =
  | {
      errors?: {
        companyName?: string[];
        city?: string[];
      };
      message?: string;
    }
  | undefined;

const assignFormSchema = z.object({
  companyName: z.string().min(3, { message: "invalid name" }).trim(),
  userName: z.string().min(3, { message: "invalid city" }).trim(),
});

export type assignFormState =
  | {
      errors?: {
        companyName?: string[];
        userName?: string[];
      };
      message?: string;
    }
  | undefined;

export const createUser = async (
  state: createUserFormState,
  formdata: FormData
) => {
  const validatedFields = createUserFormSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    phoneNumber: formdata.get("phoneNumber"),
  });
  if (validatedFields.success) {
    const data = validatedFields.data;
    await addUser(data.name, data.email, data.phoneNumber);
  } else {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
};
export const createCompany = async (
  state: createCompanyFormState,
  formdata: FormData
) => {
  const validatedFields = createCompanyFormSchema.safeParse({
    companyName: formdata.get("companyName"),
    city: formdata.get("city"),
  });
  if (validatedFields.success) {
    const data = validatedFields.data;
    await addCompany(data.companyName, data.city);
  } else {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
};
export const assignCompany = async (
  state: assignFormState,
  formdata: FormData
) => {
  const validatedFields = assignFormSchema.safeParse({
    companyName: formdata.get("companyName"),
    userName: formdata.get("userName"),
  });
  if (validatedFields.success) {
    const data = validatedFields.data;
    const res = await assignCompanyToUser(data.userName, data.companyName);
    if (!res) {
      return { message: "no such user or company" };
    }
  } else {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
};
