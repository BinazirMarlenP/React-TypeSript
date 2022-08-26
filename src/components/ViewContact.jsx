import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { ContactService } from "../services/ContactService";
import Spinner from './Spinner';

const ViewContact = () => {
    let {contactId} = useParams();

    let [state, setState]=useState({
        loading: false,
        contact: {},
        errorMessage: ''
    });

    const fetchData=async()=>{
        try {
            setState({...state, loading: true});
            let response = await ContactService.getContact(contactId);
            console.log(response.data)
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

    useEffect(()=>{fetchData()},[contactId]);

    let {loading, contact, errorMessage}=state;
    return (
        <>
            <section className="view-contact-intro p-3">
                <div className="container">
                <div className="row">
                        <div className="col">
                            <p className="h3">Детализация</p>
                            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam explicabo a harum.</p>
                        </div>
                    </div>
                </div>
            </section>
            {loading? <Spinner/>: <>{Object.keys(contact).length>0 && 
                <section  className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img className="contact-img" src={contact.Photo} alt="" />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Имя: <span className="fw-bold">{contact.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Телефон: <span className="fw-bold">{contact.mobile}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Компания: <span className="fw-bold">{contact.company}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Должность: <span className="fw-bold">{contact.title}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Департамент: <span className="fw-bold">{contact.Department}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn color-orange-bg">Назад</Link>
                        </div>
                    </div>
                </div>
            </section>
            }
            </>}          
        </>
    )
}
export default ViewContact;