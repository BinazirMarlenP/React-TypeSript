import React ,{ useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../services/ContactService";


const AddContact = () => {
    let navigate=useNavigate();
    let [state, setStete]=useState({
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

    let updateInput = (event)=>{
        setStete({
            ...state, 
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        })
    }

    let submitForm=async(event)=>{
        event.preventDefault();
        try {
            let response = await ContactService.createContact(state.contact);
            if(response){
                navigate('/contacts/list', {replace:true})
            } 

        } catch (error) {
            setStete({...state, errorMessage: error.message});
            navigate('/contacts/add', {replace: false});
        }
    };
    let {loading, contact, errorMessage}=state;
    return (
        <>
            <section className="add-contact p-5  " >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Добавить Сотрудника</p>
                            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam explicabo a harum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name="name" 
                                        value={contact.name}
                                        onChange={updateInput}
                                        type="text"   className="form-control" placeholder="Имя"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="Photo" 
                                    value={contact.Photo}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Фото"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    type="number"
                                    name="mobile" 
                                    value={contact.mobile}
                                    onChange={updateInput}
                                    className="form-control" placeholder="Телефон"/>
                                </div>
                                <div className="mb-2">
                                    <input required={true}
                                        name="company" 
                                        value={contact.company}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Компания"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="title" 
                                    value={contact.title}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Должность"/>
                                </div>
                                <div className="mb-2">
                                <input 
                                    required={true}
                                    name="Department" 
                                    value={contact.Department}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Департамент"/>
                                </div>
                                <div className="mb-2">
                                    <Link to={'/contacts/list'} className="btn btn-dark mr-2">Закрыть</Link>
                                    <input type="submit" className="btn color-orange-bg ms-2" value="Создать"/>                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default AddContact;