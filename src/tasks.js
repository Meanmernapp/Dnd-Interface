import { COLUMN_NAMES } from "./constants";

import { AiFillDelete } from "react-icons/ai";

const { DO_IT } = COLUMN_NAMES;
export const tasks = [
  { id: 1, name: "Item 1", column: DO_IT, icon: <AiFillDelete /> },
  { id: 2, name: "Item 2", column: DO_IT, icon: <AiFillDelete /> },
  { id: 3, name: "Item 3", column: DO_IT, icon: <AiFillDelete /> },
  { id: 4, name: "Item 4", column: DO_IT, icon: <AiFillDelete /> },
];
