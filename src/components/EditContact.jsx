import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import { ContactService } from "../services/ContactService";
import Spinner from "./Spinner";


const EditContact = () => {
    let navigate=useNavigate();
    let {contactId} = useParams();
    let [state, setState]=useState({
        loading: false,
        contact: {
            name: '',
            Photo: '',
            mobile: '',
            title: '',
            company: '',
            Department: ''
        },
        errorMessage: ''
    });
    const fetchData=async()=>{
        try {
            setState({...state, loading: true});
            let response = await ContactService.getContact(contactId);
            setState({
                ...state,
                loading: false,
                contact: response.data
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }
    let updateInput = (event)=>{
        setState({
            ...state, 
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        })
    }

    useEffect(()=>{fetchData()},[contactId]);

    let submitForm=async(event)=>{
        event.preventDefault();
        try {
            let response = await ContactService.updateContact(state.contact, contactId);
            if(response){
                navigate('/contacts/list', {replace:true})
            } 

        } catch (error) {
            setState({...state, errorMessage: error.message});
            navigate(`/contacts/edit/${contactId}`, {replace: false});
        }
    };

    let {loading, contact, errorMessage}=state;
    return (
        <>{
            loading? <Spinner/> : <>
            <section className="add-contact  p-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Редактировать </p>
                            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam explicabo a harum.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                    required="true"
                                    type="text"
                                    name="name"
                                    value={contact.name}
                                    onChange={updateInput}
                                    className="form-control" placeholder="Имя"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                     required="true"
                                     type="text"
                                     name="Photo"
                                     value={contact.Photo}
                                     onChange={updateInput}
                                     className="form-control" placeholder="Фото"/>
                                </div>
                                <div className="mb-2">
                                    <input required="true"
                                     type="number"
                                     name="mobile"
                                     value={contact.mobile}
                                     onChange={updateInput} className="form-control" placeholder="Телефон"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required="true"
                                    type="text"
                                    name="company"
                                    value={contact.company}
                                    onChange={updateInput}
                                    className="form-control" placeholder="Компания"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                    required="true"
                                    type="text"
                                    name="title"
                                    value={contact.title}
                                    onChange={updateInput}
                                    className="form-control" placeholder="Должность"/>
                                </div>
                                <div className="mb-2">
                                <input required="true"
                                     type="text"
                                     name="Department"
                                     value={contact.Department}
                                     onChange={updateInput}
                                     className="form-control" placeholder="Департамент"/>
                                </div>
                                <div className="mb-2">
                                    <Link to={'/contacts/list'} className="btn btn-dark mr-2">Отмена </Link>
                                    <input type="submit" className="btn color-orange-bg ms-2" value="Сохранить"/>                   
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={contact.Photo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
        }
        </>
    )
}
export default EditContact;