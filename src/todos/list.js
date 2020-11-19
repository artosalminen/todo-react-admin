import * as React from "react";
import { List, Datagrid, TextField, BooleanField, Filter, TextInput, BooleanInput } from 'react-admin';

const TodoFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Title" source="title" />
      <BooleanInput label="Completed" source="completed" />
  </Filter>
);

export const TodoList = props => (
    <List {...props} filters={<TodoFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="title" />
            <BooleanField source="completed" />
        </Datagrid>
    </List>
);