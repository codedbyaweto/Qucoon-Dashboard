import { object } from "yup";
import {
    defaultValidation,
    emailValidation,
    passwordValidation,
    phoneValidation,
    bvnValidation,
    confirmPasswordValidation
} from "@/utils/validate";


export const LoginSchema = object({
    email: emailValidation(),
    password: passwordValidation(),
});

export const registerSchema = object({
    userFirstName: defaultValidation("First name")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name too long"),

    userLastName: defaultValidation("Last name")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name too long"),

    userEmail: emailValidation(),

    userPassword: passwordValidation(),

    confirmPassword: confirmPasswordValidation("userPassword"),

    userPhone: phoneValidation(),

    userAddress: defaultValidation("Address")
        .min(5, "Address too short")
        .max(100, "Address too long"),

    userBvn: bvnValidation(),
});