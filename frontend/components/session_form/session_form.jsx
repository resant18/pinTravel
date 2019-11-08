import React from 'react';
// import { isBlank, isValidInput } from './inputValidation';



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',            
        };
        this.handleSubmit = this.handleSubmit.bind(this);        
    }    

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    parseUserName() {
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
        
        return { first_name: firstName, last_name: lastName }
    }

    formValidation() {        
        let emailInput = document.getElementById('input-email');
        let passwordInput = document.getElementById('input-password');
        let errorText = '';        

        if (isBlank(emailInput.value)) {
            const div = document.createElement('div');
            div.id = 'error-email';
            div.classList.add('error-text');
            errorText = `You missed a spot! Don't forget to add your email.`;
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
            if (document.getElementById('error-password') !== null) {
                document.getElementById('error-password').remove();
            }
            passwordInput.parentNode.appendChild(div);            
            return false;
        }

        return true;
    }

    handleSubmit(e) {
        e.preventDefault();

        let username, user;
        
        if (this.props.formType === 'Sign up') {
            username = this.parseUserName();           
            user = Object.assign({}, this.state, username);
        } else {                     
            user = Object.assign({}, this.state);
        }
        if (this.formValidation()) this.props.processForm(user).then(this.props.hideModal);
    }    

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {        
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
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
                                <p className="sub-title">Find new travel destination to pin</p>
                            </div>
                            <div className="form-fields-wrapper">
                                <div className="form-fields">
                                    <div className="input-field">                                
                                        <input type="text"  
                                            id="input-email"                          
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            className="login-input"
                                            placeholder="Email"
                                            aria-invalid="false"                                            
                                        />
                                    </div>
                                    <div className="input-field">
                                        <input type="password"
                                            id="input-password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="login-input"
                                            placeholder={passwordHolder}
                                            aria-invalid="false"                                            
                                        />
                                    </div>
                                    <div>                                                 
                                        <button className="form-submit-button" type="submit">{ formType }</button>                                    
                                    </div>
                                </div>
                                <p>OR</p>                            
                                <button className="bottom-button" onClick={this.props.switchAction}>{ formType === "Sign up" ? "Log in" : "Sign up" }</button>
                                <span>
                                    By continuing, you agree to Pinterest's <a data-test-id="tos" href="#" target="_blank">Terms of Service</a>, 
                                    <a data-test-id="privacy" href="#" target="_blank">Privacy Policy</a>
                                </span>
                            </div>
                        </form>
                        <div className="errors">{this.renderErrors()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;
