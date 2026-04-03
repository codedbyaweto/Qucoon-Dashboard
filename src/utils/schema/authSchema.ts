import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Email is required"),
    password: Yup.string()
        .min(6, "Minimum value of 6 characters")
        .required("Password is required")
        .test("async-password-check", "Weak password", async (value) => {
            await new Promise((res) => setTimeout(res, 1000));
            return value !== "password";
        }),
});

export const registerSchema = Yup.object({
    userFirstName: Yup.string()
        .trim()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name too long")
        .required("First name is required"),

    userLastName: Yup.string()
        .trim()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name too long")
        .required("Last name is required"),

    userEmail: Yup.string()
        .trim()
        .email("Invalid email format")
        .required("Email is required"),

    userPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password too long")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("userPassword")], "Passwords must match")
        .required("Confirm your password"),

    userPhone: Yup.string()
        .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Invalid phone number")
        .required("Phone number is required"),

    userAddress: Yup.string()
        .min(5, "Address too short")
        .max(100, "Address too long")
        .required("Address is required"),

    userBvn: Yup.string()
        .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
        .required("BVN is required"),
});