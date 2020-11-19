// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { TodoList } from './todos/list'
import { TodoEdit } from './todos/edit'
import { TodoCreate } from "./todos/create";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="todos" list={TodoList} edit={TodoEdit} create={TodoCreate}></Resource>
</Admin>;

export default App;