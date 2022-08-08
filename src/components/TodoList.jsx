import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {
    //task delete
    const handleDelete =(id) => {
        setTaskList(taskList.filter((task)=>task.id !== id)); //filter可以把Array的數據排除掉 
        //假設刪除第2個,/運作logic
        //取得被按的id, id = tasklist的Array長度
        //由第0個task.id開始對比 0 不是等於 2 = false //1 不是等於 2 = false //2 是等於2 = true
    }

    //task completed
    const handleCompleted = (id) => {
        //增加completed 的 class去做完成線
        setTaskList(taskList.map((task) => {
            if(id === task.id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }))
    };

  return (
    <div className='todoList'>
        <div className='todos'>

            {taskList.map((task, index) =>( //index排列號碼的意思 
                <div className={`todo ${task.completed ? "completed":""}`} key={index}>
                    <div className='todoText'>
                        <span>{task.text}</span>
                    </div>
                    <div className='icons'>
                    <button onClick={()=>handleCompleted(task.id)}>
                        <i className="fas fa-duotone fa-check"></i>
                    </button>
                    <button onClick={()=>handleDelete(task.id)}>
                        <i className="fas fa-duotone fa-trash"></i>
                    </button>
                    </div>
                </div>
                
            ))}
            
            
        </div>
    </div>
  )
}
