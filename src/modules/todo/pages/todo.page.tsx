import { Stack } from "@chakra-ui/react";
import { TodoComponent } from "../components/todo.component";

interface ToDoProps {}

export const ToDoPage: React.FC<ToDoProps> = () => {
	return (
		<Stack>
			<TodoComponent />
		</Stack>
	);
};
