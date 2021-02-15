import React from 'react';
import ReactDOM from 'react-dom';

//import {produce } from 'immer';
import { useImmerState,produce } from './immer';

// let baseState = {
//   ids: [1],
//   pos: {
//     x: 1,
//     y: 1 
//   }
// }

// let nextState = produce(baseState, (draft) => {
//   draft.ids.push(2);
// })
// console.log(baseState.ids === nextState.ids);//false
// console.log(baseState.pos === nextState.pos);//true


let id = 1;
function Todos() {
  const [todos, setTodos] = useImmerState({
    list: []
  })
  const addTodo = () => setTodos((draft) => {
    draft.list.push(id++)
  })
  return (
    <>
      <button onClick={addTodo}>增加</button>
      <ul>
        {
          todos.list.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </>
  )
}
ReactDOM.render(
  <Todos />,
  document.getElementById('root')
);



