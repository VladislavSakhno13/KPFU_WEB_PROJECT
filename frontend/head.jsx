import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,Navbar,Nav,Form,Button,Table,ButtonGroup} from 'react-bootstrap';
export default class Head extends React.Component{
    render(){
        return(
            <div>
                <Navbar  style={{backgroundColor:'#FFA420'}}>
                        <Navbar.Brand href="#home">KeepUp</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{color:'#000'}}>Главная</Nav.Link>
                        <Nav.Link href="#photo" style={{color:'#000'}}>Фото</Nav.Link>
                        </Nav>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" ><Nav.Link href="#home/log_in" style={{color:'#000'}}>Вход</Nav.Link></Button>
                            <Button variant="secondary" ><Nav.Link href="#home/Sign_up" style={{color:'#000'}}>Регистрация</Nav.Link></Button>
                        </ButtonGroup>
                    </Navbar>
            </div>
        )
    }
}