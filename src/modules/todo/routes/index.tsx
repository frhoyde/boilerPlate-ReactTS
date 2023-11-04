import { ToDoPage } from "../pages/todo.page";
import { IPage } from "app/types";

export const todoRoutes: IPage[] = [
	{
		name: "Todo",
		path: "/",
		page: <ToDoPage />,
	},
];
