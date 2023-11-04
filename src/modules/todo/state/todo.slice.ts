import { createSlice } from "@reduxjs/toolkit";

export interface TodoState {
	todo: {
		task: string;
	} | null;
}

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todo: null,
	} as TodoState,
	reducers: {
		setTodo: (
			state: TodoState,
			action: {
				payload: {
					task: string;
				};
			}
		) => {
			state.todo = action.payload;
		},
	},
});

export const todoReducer = todoSlice.reducer;
export const { setTodo } = todoSlice.actions;
