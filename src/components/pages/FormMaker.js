import React, {useState, createContext, useContext, useEffect} from 'react'
import FormFieldOption from "../elements/FormFieldOption";
import FieldModal from "../elements/FieldModal";
import {FormListContext} from "../../context/FormContext";
import {DashboardContext} from "../../context/DashboardContext";
import SelectTextFields from "../elements/SelectField";
import Textarea from "../elements/Textarea";
import Input from "@mui/joy/Input";
import InputElement from "../elements/InputElement";
import {MenuItem} from "@mui/joy";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from 'react-router-dom';


function FormMaker() {
    const { tableData, setTableData } = useContext(FormListContext);
    const {dashboard,setDashboard} = useContext(DashboardContext);
    const [data , setData]= useState();
    const {index}=useParams();
    const [items, setItems] = useState([]);
    const [tableLabel, setTableLabel] = useState( "Label");


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('dashboard'));
        if (items) {
            setItems(items);
        }
    }, [tableData,dashboard]);
    function handleInputChange(name, value) {
        setTableLabel(value);
    }



    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectOption] = useState()
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [showCode, setShowCode] = useState(false);
const handleTableTitle = (value)=>{
    setTableLabel(value)

}
const handleDashboard = () =>
{

}
    const handleCloseCode = () => setShowCode(false);
    const handleShowCode = () => setShowCode(true);
    return (

        <div className="formMaker">
            <FormFieldOption setSelectOption={setSelectOption} setOpenModal={handleShow} />

            <div className={"form-section"}>

                <div className={"form-maker"}>
                    <InputElement  input={{type:"text",placeholder:"Form Title",width:45 , initialvalue:tableLabel}} label={"Form Title"} handleChange={handleTableTitle} key={"form-title"} />

                    {tableData &&
                        tableData.map( t=>
                            (    t.formtype=="input"  ?
                                    <div className={"element"}>
                                <InputElement  input={{...t}} handleChange={handleInputChange} key={t.label+t.id} />
                                    </div>
                                    :
                                    t.formtype=="select" ?
                                        <div className={"element"}>
                                            <SelectTextFields input={{...t}}  key={t.label+t.id}/>

                                        </div>

                                        :
                                        t.formtype=="textArea" ?
                                            <div className={"element"}>
                                            <Textarea input={{...t}} handleChange={handleInputChange}  key={t.label+t.id} />
                                            </div>
                                            :
                                            <></>

                            ))

                    }
                    <div className={"d-flex p-3"}>
                    <Button  className={"me-3"} variant="secondary" onClick={()=>{ window.location.href="/" }}>
                        Close
                    </Button>
                        <a  className={"bg me-3"} variant="primary"

                                 onClick={()=> ( !index ?  localStorage.setItem('dashboard', JSON.stringify([...items,{ ["tableData"]:tableData , ["tableLabel"]: tableLabel} ])) : console("Update  Table") )}>
                            Save Changes
                        </a>
                        <Button  className={"bg "} variant="primary" onClick={handleShowCode}>
                        Show json code
                    </Button>
                    </div>
                </div>


            </div>
            { showModal && <FieldModal field={selectedOption} show={showModal} handleClose={handleClose}/>  }
            <Modal show={showCode} onHide={handleCloseCode}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{dashboard ?  JSON.stringify(dashboard) : "No Data yet "}</Modal.Body>
                <Modal.Footer>
                    <Button className={"bg"} variant="secondary" onClick={handleCloseCode}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </div>


    )
}

export default FormMaker
