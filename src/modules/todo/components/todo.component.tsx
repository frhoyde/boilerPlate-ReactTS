import { useState } from "react";
import {
	Box,
	Button,
	Input,
	Stack,
	IconButton,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

export const TodoComponent = () => {
	const [items] = useState(["Item 1", "Item 2", "Item 3"]);
	const [newItem, setNewItem] = useState("");

	const handleAddItem = () => {};

	const handleDeleteItem = () => {};

	const handleEditItem = () => {};

	return (
		<Box padding="2">
			<Stack direction="column" spacing="4">
				<Input
					placeholder="Add an item"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
				<Button leftIcon={<AddIcon />} onClick={handleAddItem}>
					Add
				</Button>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Item</Th>
							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{items.map((item, index) => (
							<Tr key={index}>
								<Td>{item}</Td>
								<Td>
									<IconButton
										aria-label="Edit"
										icon={<EditIcon />}
										onClick={handleEditItem}
										mr="2"
									/>
									<IconButton
										aria-label="Delete"
										icon={<DeleteIcon />}
										onClick={handleDeleteItem}
									/>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Stack>
		</Box>
	);
};
