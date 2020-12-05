import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
export default class Sign_up extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user_name:undefined,
            login_user:undefined,
            password_user:undefined,
            password_user_again:undefined,
            email:undefined
        }
        this.get_login=this.get_login.bind(this);
        this.get_password=this.get_password.bind(this);
        this.set_new_user=this.set_new_user.bind(this);
        this.get_password_again=this.get_password_again.bind(this);
        this.get_email=this.get_email.bind(this);
        this.get_Name=this.get_Name.bind(this);
    }
    get_password_again(event){
        this.setState({password_user_again:event.target.value});
    }
    get_Name(event){
        this.setState({user_name:event.target.value});
    }
    get_login(event){
        this.setState({login_user:event.target.value});
    }
    get_password(event){
        this.setState({password_user:event.target.value});
    }
    get_email(event){
        this.setState({email:event.target.value});
    }
    set_new_user(){
       let data={
            name:this.state.user_name,
            login:this.state.login_user,
            password:this.state.password_user,
            password_again:this.state.password_user_again,
            mail:this.state.email
        }
        console.log(data);
        axios.post('./basic/web/index.php?r=site/index',data).then(function(response){
            console.log(response.data);
        })
    }
    render(){
        return(
            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={this.get_Name}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login" onChange={this.get_login}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.get_password}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password again</Form.Label>
                                <Form.Control type="password" placeholder="Password again" onChange={this.get_password_again}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Введите почту</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.get_email}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            
                            
                            <Button variant="primary" type="submit" onClick={this.set_new_user}>
                                Зарегестрироваться
                            </Button>
            </Form>
        )
    }
}