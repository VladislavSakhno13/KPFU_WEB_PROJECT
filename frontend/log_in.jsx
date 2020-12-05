import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
export default class Log_in extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login_user:undefined,
            password_user:undefined
        }
        this.get_login=this.get_login.bind(this);
        this.get_password=this.get_password.bind(this);
        this.set_new_user=this.set_new_user.bind(this);
    }
    get_login(event){
        this.setState({login_user:event.target.value});
    }
    get_password(event){
        this.setState({password_user:event.target.value});
    }
    set_new_user(){
        let login = this.state.login_user;
        let password = this.state.password_user
       
        axios.get(`./backend/sing_reg.php?login=${login}&password=${password}`).then(function(response){console.log(response.data)})
    }
    render(){
        return(
            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="email" placeholder="Enter login" onChange={this.get_login}/>
                                <Form.Text className="text-muted">
                                
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.get_password}/>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={this.set_new_user}>
                                Вход
                            </Button>
            </Form>
        )
    }
}