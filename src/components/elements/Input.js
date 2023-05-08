import React, {useContext, useState} from 'react'
import Input from '@mui/joy/Input';

const InputField = ({input,handleChange,index=0}) => {

    function handleInput(event) {
        const { name, value } = event.target;
        handleChange(name, value,index);
    }
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{input?.label}</label>
            <Input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 {...input}
                onChange={handleInput}
            />
            {input?.instruction && <div id="emailHelp" className="form-text">{input.instruction}</div>
            }
        </div>
    )
}

export default InputField