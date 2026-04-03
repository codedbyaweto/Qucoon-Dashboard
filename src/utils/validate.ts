import { string, ref } from "yup";

export const defaultValidation = (name: string) =>
    string()
        .trim()
        .min(3, ${name} must be at least 4 characters long);
        .max(50, ${name} is too long);
        .required(`${name} is required`);

export const emailValidation = () =>
    string()
        .trim()
        .email("Invalid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address"
        )
        .required("Email is required");

export const passwordValidation = (label = "Password") =>
    string()
        .required(`${label} is required`)
        .min(6, `${label} must be at least 6 characters long`)
        .matches(/[A-Z]/, `${label} must contain at least one uppercase letter`)
        .matches(/[a-z]/, `${label} must contain at least one lowercase letter`)
        .matches(/\d/, `${label} must contain at least one number`);

export const phoneValidation = (label = "Phone number") =>
    string()
        .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Invalid phone number")
        .required(`${label} is required`);

export const bvnValidation = (label = "BVN") =>
    string()
        .matches(/^\d{11}$/, `${label} must be exactly 11 digits`)
        .required(`${label} is required`);

export const confirmPasswordValidation = (passwordField = "password") =>
    string()
        .oneOf([ref(passwordField)], "Passwords must match")
        .required("Confirm your password");

export const codeValidation = (label = "Code") =>
    string()
        .length(6, `${label} must be 6 digits`)
        .required(`${label} is required`);
