export interface ChildrenText {
  children: string | string[] | number | number[] | [number, string] | any;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  xSmall?: boolean;
  light?: boolean;
  bold?: boolean;
  tone?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "text-primaryGrey-100"
    | "text-primaryGrey-200"
    | "text-primaryGrey-300"
    | "text-primaryGrey-400";
  url?: string;
  blank?: boolean;
  className?: string;
}

export interface AuthFormState {
  name: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
}

export interface ResponseObject {
  data?: any;
  status: boolean | string;
  message?: string;
}
