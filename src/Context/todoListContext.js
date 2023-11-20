import { createContext } from "react";

const TodoListContext = createContext(0);

export function TodoListProvider({children}){
    return <TodoListContext.Provider>
        {children }
    </TodoListContext.Provider>
}





export default TodoListContext

