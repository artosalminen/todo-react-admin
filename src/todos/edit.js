import * as React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export const TodoEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);
