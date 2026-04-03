export type BaseResponse = {
    responseCode?: string;
    responseMessage?: string;
};

export type Balances = {
    accountBalance?: number;
    portfolioBalance?: number;
};

export type LoginResponse = BaseResponse & {
    token?: string;
    userId?: number;
    userEmail?: string;
    userName?: string;
    userRoleId?: number;
    userStatus?: string;
    userType?: string;
    userCreatedAt?: string;
    userUpdatedAt?: string;
    privileges?: string[];
    balances?: Balances;
};

// export type AuthLoginResponse = LoginResponse;
// export type AuthRegisterResponse = BaseResponse;
