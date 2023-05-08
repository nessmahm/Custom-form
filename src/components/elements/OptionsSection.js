import React, {useEffect, useState} from 'react'
import Input from "./Input";
import InputElement from "./InputElement";

function OptionsSection({handleOptionListChange,setDefaultOption}) {
const [inputFields,setInputFields]= useState([{ name: 'option1', label:"choice number 1" ,placeholder:"Enter a choice" }])

    useEffect(() => {
    }, [inputFields]);


    const addFields = (index) => {
        let newfield = { name: 'option'+index, label:"choice number "+index ,placeholder:"Enter a choice" }

        setInputFields([...inputFields, newfield])
    }

    return (
        <div className={"option-section"}>


                {inputFields.map((input, index) => {
                    return (
                        <div className={"select-choice modal-element"} key={index}>
                            <input className={"mr-2"} type={"radio"} name={"default-choice"} onClick={()=>setDefaultOption(index)}/>
                            <InputElement index={index} input = { {...input,width:"35ch"}}  handleChange={handleOptionListChange}/>
                        </div>
                    )
                })}

            <div className={"add-more"} onClick={()=>addFields(inputFields.length + 1)}><span>Add More..</span></div>

        </div>
    )
}

export default OptionsSection
