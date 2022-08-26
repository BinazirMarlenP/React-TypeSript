import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../services/ContactService";
import Spinner from "./Spinner";


const ContactList = () => {
    const [state, setState]=useState({
        loading: false,
        contacts: {},
        errorMessage: ''
    });


const fetchData=async()=>{
    try {
        setState({...state, loading: true});
        let response = await ContactService.getAllContacts();
        console.log(response.data)
        setState({
            ...state,
            loading: false,
            contacts: response.data
        })
    } catch (error) {
        setState({
            ...state,
            loading: false,
            errorMessage: error.message
        })
    }
}

useEffect(()=>{fetchData()},[]);

const clickDelete=async(contactId)=>{
    try {
        let response = await ContactService.deleteContact(contactId);
        if(response){
            setState({...state, loading: true});
            let response = await ContactService.getAllContacts();
            console.log(response.data)
            setState({
                ...state,
                loading: false,
                contacts: response.data
            })
        }
        
    } catch (error) {
        setState({
            ...state,
            loading: false,
            errorMessage: error.message
        })
    }
}

let {loading, contacts, errorMessage} = state;
    return (
        <div className="contact-main"> 
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">ИТ Департамент
                                    <Link to={'/contacts/add'} className = "btn color-orange-bg ms-2">
                                        <i className="fa fa-plus me-2">Добавить нового сотрудника</i>
                                    </Link>
                                    <Link to={'/main'} className = "btn btn-dark ms-2">
                                        <i className="fa fa-plus me-2">Назад</i>
                                    </Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel obcaecati voluptas.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Search Names"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {loading? <Spinner/> : <>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {contacts.length>0 && contacts.map(contact=>{
                            return(
                                <div className="col-md-6" key={contact.id}>
                                    <div className="card my-2">
                                        <div className="card-body">
                                            <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-4">
                                                <img src={contact.Photo} className="contact-img" alt="" />
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-action">
                                                        Имя: <span className="fw-bold">{contact.name}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Телефон: <span className="fw-bold">{contact.mobile}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Должность: <span className="fw-bold">{contact.title}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={`/contacts/view/${contact.id}`} className="btn color-orange-bg my-1">
                                                    <i className="fa fa-eye"></i>
                                                </Link>
                                                <Link to={`/contacts/edit/${contact.id}`} className="btn color-orange-bg my-1">
                                                    <i className="fa fa-pen"></i>
                                                </Link>
                                                <button className="btn color-orange-bg my-1" onClick={()=>clickDelete(contact.id)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                
                                            </div>
                                            </div>                                  
                                        </div>
                                    </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>}
          
        </div>
    )
}
export default ContactList;