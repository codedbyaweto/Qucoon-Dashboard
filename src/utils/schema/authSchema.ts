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
    userFirstName: defaultValidation("First name"),
    
    userLastName: defaultValidation("Last name"),

    userEmail: emailValidation(),

    userPassword: passwordValidation(),

    confirmPassword: confirmPasswordValidation("userPassword"),

    userPhone: phoneValidation(),

    userAddress: defaultValidation("Address"),
    
    userBvn: bvnValidation(),
});
