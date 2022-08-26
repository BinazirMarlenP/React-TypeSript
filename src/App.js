import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'
import ViewContact from './components/ViewContact'
import EditContact from './components/EditContact'
import MainPage from "./components/MainPage";
import NavBarMain from "./components/NavBarMain";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <NavBarMain/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/main'}/>}/>
      <Route path={'/main'} element={<MainPage/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>}/>
      <Route path={'/contacts/add'} element={<AddContact/>}/>
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
