type todo = {id: string, text: string}

@react.component
let make = () => {
  let todoList = list{
    {id: "todo1", text: "Todo 1"},
    {id: "todo2", text: "Todo 2"}
  }

  let items =
    todoList
      -> Belt.List.toArray
      -> Belt.Array.map(todo => {
        <li key={todo.id}> {React.string(todo.text)} </li>
      })


  <div> {React.array(items)} </div>
}
