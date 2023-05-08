
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {FieldOption} from '../../assets/data/FieldOption'


export default function FormFieldOption({setSelectOption,setOpenModal,open}) {

    return (


    <div className={"field-options-section"}>
        {FieldOption.map( (field)=>
            (
                <span key={field.name} className={"option"} onClick={ ()=>( setOpenModal(), setSelectOption(field.name)) }>
                    {field.name}
                </span>
            ))

        }
    </div>
    );
}
