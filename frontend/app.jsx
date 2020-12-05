import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Head from './head.jsx';
import Sign_up from './sign_up.jsx';
import Log_in from './log_in.jsx';
import { HashRouter, Route} from 'react-router-dom';
export default class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Head/>
                <div>
                <Route path="/home/log_in" component={Log_in} />
                <Route path="/home/Sign_up" component={Sign_up} />
                </div>
            </HashRouter>
            
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('page_site'));