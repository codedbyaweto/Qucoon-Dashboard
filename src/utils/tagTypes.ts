export const tags = {
    AUTH: "Auth",
    PACKAGE: "Package",
    PORTFOLIO: "Portfolio",
} as const;


export type TagType = (typeof tags)[keyof typeof tags];