export interface ChildrenText {
  children: string;
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
}
