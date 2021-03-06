import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            firstName : '',
            lastName : ''
        };
    }
    post = () => {
        var {username, password} = this.state;
        axios.post(
            'https://104.215.255.52:3000/users?fbclid=IwAR1F_PdLs1AbIIccBGhXA7reRunOu0XNEP4mPP0_HHV5gZMvNPI09rFWCmg',
            {
                username: username,
                password: password
            }            
        )
        .then(
            function(response){
                console.log('Success');
            }
        )
        .catch(
            function(error)
            {
                console.log('Fail');
            }
        )
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState(
            {
                [name]: value
            }
        );
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.post();
    }
    render(){
        return(
            <div>
                
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                                <h3 className="panel-title">Sign up</h3>
                        </div>
                        <div className="panel-body">                                
                                <form onSubmit = {this.onSubmit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" id="username" name = "username" onChange = { this.onChange } />
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="password" name = "password" onChange = { this.onChange } />
                                        <label>Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" name = "password" onChange = { this.onChange } />
                                        <label>First Name</label>
                                        <input type="text" className="form-control" id="firstName" name = "firstName" onChange = { this.onChange } />
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" id="lastName" name = "lastName" onChange = { this.onChange } />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-success">Sign up</button>
                                    
                                </form>                                
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SignUp;