import React, { useState, useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    // const [title, setTitle] = useState<string>("");
    const ref = useRef<HTMLInputElement>(null)
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            props.onAdd(ref.current!.value);
            ref.current!.value = ""
            // console.log(title);
            // setTitle("")
        }
    };

    return (
        <div className='input-field mt2'>
            <input  
                placeholder='Add your task to the list'
                ref={ref}
                // value={title}
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                type="text" 
                id="title" 
            />
            <label 
                htmlFor="title" 
                className='active'
            >
                Add Todo
            </label>
        </div>
    );
};

export default TodoForm;