import { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import {Title} from "./components/Title";
import { TodoList } from './components/TodoList';


function App() {
  const [takeList, setTaskList] = useState([]);


  return (
    <div className="body">
      <Title/>
      <InputForm taskList={takeList} setTaskList={setTaskList}/>
      <TodoList taskList={takeList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
