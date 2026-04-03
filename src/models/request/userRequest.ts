export type AuthLoginRequest = {
    userEmail: string;
    userPassword: string;
    deviceId?: string | null;
    latitude?: string | null;
    longitude?: string | null;
};

export type InitiateEnrollmentRequest = {
    confirmPassword: string;
    referredBy?: number;
    userAddress: string;
    userBvn: string;
    userEmail: string;
    userFirstName: string;
    userLastName: string;
    userPassword: string;
    userPhone: string;
};


export type CompleteEnrollmentRequest = {
    otp: string;
    userEmail: string;
};

export type InitiatePasswordResetRequest = {
    userEmail: string;
};

export type CompletePasswordResetRequest = {
    otp?: string;
    userEmail?: string;
    userPassword?: string;
};

export type ChangePasswordRequest = {
    oldPassword: string;
    newPassword: string;
};

export type ResendOtpRequest = {
    userEmail: string;
};