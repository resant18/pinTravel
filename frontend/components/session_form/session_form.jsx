import React from 'react';

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

    handleSubmit(e) {
        e.preventDefault();

        let username, user;
        
        if (this.props.formType === "Sign up") {
            username = this.parseUserName();           
            user = Object.assign({}, this.state, username);
        } else {                     
            user = Object.assign({}, this.state);
        }
        this.props.processForm(user);
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
                            <div className="form-fields">
                                <div className="input-field">                                
                                    <input type="text"                            
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                        placeholder="Email"
                                        aria-invalid="false"
                                    />
                                </div>
                                <div className="input-field">
                                    <input type="password"
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
                            
                        </form>
                        <div className="errors">{this.renderErrors()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;
