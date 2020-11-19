import * as React from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';

export const TodoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" required />
        </SimpleForm>
    </Create>
);
