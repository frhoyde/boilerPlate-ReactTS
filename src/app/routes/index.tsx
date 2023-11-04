import { todoRoutes } from "modules/todo/routes";
import { IPage } from "app/types";

export const authRoutes: IPage[] = [];

export const publicRoutes: IPage[] = [...todoRoutes];
