import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FieldOption} from "../../assets/data/FieldOption";
import InputField from "./Input";
import { useContext } from 'react';
import { FormListContext } from '../../context/FormContext';
import OptionsSection from "./OptionsSection";
import SelectTextFields from "./SelectField";
import {Radio} from "@mui/joy";
import InputElement from "./InputElement";
function FieldModal({field,show,handleClose}) {
    const { tableData, setTableData } = useContext(FormListContext);
    const [data , setData]= useState({["label"] : "Field Label" , ['type']:"text" , ["width"]:40});
    const [optionList,setOptionList]=useState([])
    const [defaultOption,setDefaultOption]=useState(0)
    const form = FieldOption.filter( f => ( f.name ===field) )[0]
    const [variant,setVariant]=useState('')
    const [color,setColor]=useState('')
    const [id,setId]=useState('')
    useEffect(() => {

    }, [data,optionList]);
    function handleVariantChange(variant){
        setVariant(variant);
        data['variant']=variant;

    }

    function saveData (data) {
        const dataa ={...data};
        if (["text", 'password', 'number', 'email', 'phone'].includes(data.type))
        {
            dataa ['formtype'] ='input';


        }
        if(optionList.length>0)
        {
            dataa['options']=optionList;
            dataa ['formtype'] ='select';
            if(!data.placeholder)
            {
                dataa ['default']=defaultOption;

            }

        }
        if (form.type =='textArea')
        {
            dataa['formtype']="textArea";
        }
            setTableData([...tableData, dataa]);

    }
    const variants = ["filled", "outlined","standard"];
    const colors = ["primary", "error","warning","success"]
    function handleInputChange(name, value) {
        setData({ ...data, [name]: value });
    }
    const handelColorChange  = (value)=>
    {
        setColor(value);
        data['color'] = value;
    }
    const handelIdChange = (value)=>{
        setId(value);
        data['id']=value;
    }
     const handleOptionListChange = (name,value,index) => {
        let data = [...optionList];
        data[index]=value;
        setOptionList(data)

    }

const colorRadio =(c)=>( {name:"color",color: c=="error" ? "danger" :c ,checked: color === c, value:c,inputProps: { "aria-label": c }});
    const styleRadio = (c)=>( {name:"box-style", value:c , checked: id === c})
    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{field}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className={"design-form"}>


                            <SelectTextFields input={{ options:variants , label:'Variant',width:"45" }}  handleSelectChange={handleVariantChange} />

                            <div className={"box modal-element"}>
                            <label>Color : </label>
                            <div className={"d-flex  "}>
                            {
                                colors.map( c => (
                                     <Radio className={"radio-choice"} {...colorRadio(c)}  onChange={ (e) => ( handelColorChange(e.target.value)) } />

                                ))
                            }
                            </div>

                        </div>
                            <div className={"d-flex box modal-element "}>

                            <label > Style : </label>
                            {
                                ["outlined","standard"].map( c => (
                                    <div className={"element"}>
                                    <Radio className={"radio-choice"} {...styleRadio(c)} onChange={(e)=> ( handelIdChange(e.target.value))}/>
                                    <label>{c}</label>

                                    </div>
                                    ))
                                }
                            </div>


                        {form.forms&&
                            form.forms.map( f => (

                                    f.formtype === "input" ?
                                        <div className={"modal-element"}>
                                            <InputElement  input={{...f,width:"45"}} key={f.id} handleChange={handleInputChange}/>

                                        </div>
                                        :
                                    f.formtype === "select" ?
                                        <div className={"modal-element"}>
                                          <OptionsSection setDefaultOption={setDefaultOption} key={f.id+f.label} handleOptionListChange={handleOptionListChange} />
                                        </div>
                                        : <></>


                            ))

                        }
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className={"bg"} variant="primary" onClick={()=> { saveData(data) ; handleClose(); }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FieldModal;