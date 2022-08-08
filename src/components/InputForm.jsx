import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {


    const [inputText, setInputText] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        //task 追加
        setTaskList([
            ...taskList, //...是將以往的列表資料取出
            {
                id: taskList.length,
                text: inputText,
                completed:false
            }
        ]);
        //console.log(taskList);
        //輸入文字後textbox變成空白
        setInputText("")
    }

    const handleChange = (e) =>{
        setInputText(e.target.value);

    }
  return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button>
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </form>    
    </div>
  )
}
