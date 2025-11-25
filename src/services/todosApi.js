src/services/todosApi.js

// TODO: Importar supabase
// import { supabase } from './supabaseClient';

// TODO: Implementar funciones CRUD usando la API de Supabase

export async function getTodos() {

  // select * from todos order by created_at desc
}

export async function addTodo(text) {
  // insert into todos (text) values (...)
}

export async function updateTodo(id, done) {
  // update todos set done = !done where id = ...
}

export async function deleteTodo(id) {
  // delete from todos where id = ...
}
