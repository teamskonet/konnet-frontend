import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#169DC8",
	secondaryColor: "#9C4DF4",
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#169DC8",
	secondaryColor: "#cacaca",
};