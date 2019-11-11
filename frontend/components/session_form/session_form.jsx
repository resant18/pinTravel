import React from 'react';
import { isBlank, isValidInput } from './form_validation';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',               
        };

        // this.typingEffect = this.typingEffect.bind(this);    
        this._writeDemoUser = this._writeDemoUser.bind(this);    
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleChange = this.handleChange.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }  
    
    componentWillUnmount() {
        this.props.clearErrors();
    }

    _getUserName() {
        const email = this.state.email;
        const idx = email.indexOf('@');
        
        const username = email.slice(0, idx);
        const dotIdx = username.indexOf('.');        

        let firstName, lastName;
        if (dotIdx !== -1) {
            firstName = username.slice(0, dotIdx);
            lastName = username.slice(dotIdx + 1, username.length - 1);
        } else {
            firstName = username;
            lastName = '';
        }

        this.setState({ first_name: firstName, last_name: lastName });        
        return { first_name: firstName, last_name: lastName }
    }

    _validateForm() {        
        let emailInput = document.getElementById('input-email');
        let passwordInput = document.getElementById('input-password');
        let errorText = '';        

        if (isBlank(emailInput.value)) {
            const div = document.createElement('div');
            div.id = 'error-email';
            div.classList.add('error-text');
            errorText = `You missed a spot! Don't forget to add your email.`;
            //this.setState({ errors, email: errorText });
            div.innerHTML = errorText;  
            
            if (document.getElementById('error-email') !== null) {                
                document.getElementById('error-email').remove();
            }
            emailInput.parentNode.appendChild(div);
            return false;
        } else if (!isValidInput(emailInput.value, 'email')) {
            const div = document.createElement('div');
            div.id = 'error-email';
            div.classList.add('error-text');
            errorText = `Hmm...that doesn't look like an email address`;
            //this.setState({errors, email: errorText});
            div.innerHTML = errorText;

            if (document.getElementById('error-email') !== null) {
                document.getElementById('error-email').remove();
            }
            emailInput.parentNode.appendChild(div);
            return false;
        } else if (!isValidInput(passwordInput.value, 'password')) {
            const div = document.createElement('div');
            div.id = 'error-password';
            div.classList.add('error-text');
            errorText = `Your password is too short! You need 6+ characters.`;
            div.innerHTML = errorText;

            //this.setState({ errors, password: errorText });
            if (document.getElementById('error-email') !== null) {
                document.getElementById('error-email').remove();
            }
            if (document.getElementById('error-password') !== null) {
                document.getElementById('error-password').remove();
            }
            passwordInput.parentNode.appendChild(div);            
            return false;
        }

        return true;
    }

    _writeDemoUser(callback) {
        let i = 0;        
        document.getElementById('input-email').value = '';
        document.getElementById('input-password').value = '';

        function typingEffect(id, txt) {
            if (i < txt.length) {            
                document.getElementById(id).value += txt.charAt(i);                
                i++;
                setTimeout(() => typingEffect(id, txt), 25);
            }
        }
        typingEffect('input-email', 'guest@gmail.com');
        
        document.getElementById('input-password').value = 'password';
        
        callback();
    }

    handleDemoUser(e) {                
        e.preventDefault();
        const demoUser = { email: "guest@gmail.com", password: "password" };        
        var i = 0;
        
        this._writeDemoUser(() =>
            this.props.login(demoUser)
                .then(this.props.hideModal)
                .then(() => this.props.history.push("/guest"))
        )
    }

    handleSubmit(e) {        
        e.preventDefault();
        
        let username, user, newState;        
        const email = document.getElementById('input-email').value;
        const password = document.getElementById('input-password').value;
        
        if (this.props.formType === 'Sign up') {
            username = this._getUserName();  
            newState = {email, password, username}                                
        } else {                     
            newState = {email, password}
        }

        this.setState(newState);            
        user = Object.assign({}, this.state);
        

        if (this._validateForm()) {                       
            this.props.processForm(user)
                .then ( user => {                    
                    this.props.hideModal();
                    return user;                                  
                })                
                .then( user => {                    
                    this.props.history.push(`/${user.currentUser.username}`)
                })
        }
    }   
    
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

   

    renderErrors() {   
        
        const { email, password } = this.props.errors;
        console.log(email);
        console.log(password);             
        
    }
    
    render() {
        const { passwordHolder, formType } = this.props;   
        
        return (
            <div className="form-container">
                <div className="data-grid-images" />                
                <div className="data-grid-opacity" />
                <div className="modal-content">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="logo" />
                            <div>                                
                                <p className="title">Welcome to PinTravel</p>
                                <p className="sub-title">Find new travel destinations to pin</p>
                            </div>
                            <div className="form-fields-wrapper">
                                <div className="form-fields">
                                    <div className="input-field">                                
                                        <input type="text"  
                                            id="input-email"        
                                            name="email"                  
                                            value={this.state.email}                                            
                                            onChange={this.handleChange}
                                            className="login-input"
                                            placeholder="Email"
                                            aria-invalid="false"                                            
                                        />
                                    </div>
                                    <div className="input-field">
                                        <input type="password"
                                            id="input-password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            className="login-input"
                                            placeholder={passwordHolder}
                                            aria-invalid="false"                                            
                                        />
                                    </div>
                                    <div>
                                        <button className="prim" 
                                            type="submit"
                                            onClick={ this.handleDemoUser }>
                                            Demo User
                                        </button>
                                    </div>                                    
                                    <div>                                                 
                                        <button className="prim" type="submit">{ formType }</button>                                    
                                    </div>                                    
                                </div>
                                <p>OR</p>                            
                                <button className="sec" type="button" onClick={this.props.switchAction}>{ formType === "Sign up" ? "Log in" : "Sign up" }</button>
                                <span>
                                    By continuing, you agree to Pinterest's <a data-test-id="tos" href="#" target="_blank">Terms of Service</a>, 
                                    <a data-test-id="privacy" href="#" target="_blank">Privacy Policy</a>
                                </span>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;
