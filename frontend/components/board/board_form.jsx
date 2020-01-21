import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props.board, showErrors: false, serverError: props.errors};
        
        this.handleSubmit = this.handleSubmit.bind(this);        
    }        

    update(field) {      
        let timeout = null;  

        return e => {                        
            switch (field) {
                case 'name':
                    clearTimeout(timeout);
                    e.persist();
                    document.getElementById('board-name-input').setAttribute('required', 'true');
                    timeout = setTimeout(() => {
                        let createBtn = document.getElementById('create-btn');
                        let cancelBtn = document.getElementById('cancel-btn');
                        let inputBoardName = document.getElementById('board-name-input');

                        if (e.target.value === '') {
                            this.setState({ [field]: e.target.value, showErrors: true });
                            createBtn.classList.remove('create-btn-focus');
                            cancelBtn.classList.remove('cancel-btn-unfocus');
                            inputBoardName.classList.add('error');
                        } else {
                            this.setState({ [field]: e.target.value, showErrors: false });
                            createBtn.classList.add('create-btn-focus');
                            cancelBtn.classList.add('cancel-btn-unfocus');
                            inputBoardName.classList.remove('error');
                        }

                    }, 500);    
                    break;
                case 'secret':
                    debugger
                    this.setState({ [field]: e.target.checked });
                    break;
                default:
                    break;
            }                                                     
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state);                    
    }

    
    
    renderErrors() { 
        if (this.props.errors === undefined) return '';
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
        const renderBoardNameValidationError = (this.state.name === '' && this.state.showErrors === true) ? `Don't forget to name your board!` : '';
        const createButtonDisabled = (this.state.name === '' ) ? true : false;

        return (            
            <div aria-label='Create' className='board-form-container'>
                <div className='header'>
                    <h1>Create board</h1>
                    <button
                        className='close-btn'
                        onClick={this.props.hideModal}
                    >
                        <svg height='20' width='20' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'><path d='M15.18 12l7.16-7.16c.88-.88.88-2.3 0-3.18-.88-.88-2.3-.88-3.18 0L12 8.82 4.84 1.66c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18L8.82 12l-7.16 7.16c-.88.88-.88 2.3 0 3.18.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66L12 15.18l7.16 7.16c.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66.88-.88.88-2.3 0-3.18L15.18 12z'></path></svg>
                    </button>
                </div>
                <hr className='borderline' />
                <div className='body'>
                    <form className='board-form'>
                        <div className='board-name'>
                            <p>Name</p>
                            <input
                                id='board-name-input' 
                                className='input board-name'
                                placeholder="E.g. 'Places to go' or 'Recipes to make'"                                
                                onChange={this.update('name')}                                                                
                            />
                            <div className='error-text'>{renderBoardNameValidationError}</div>
                            <div className='error-text'>{this.renderErrors()}</div>
                        </div>
                        
                        <hr className='borderline' />
                        <div className='board-visibility'>
                            <p>Visibility</p>
                            <div className='secret'>
                                <input className='secret-box' type='checkbox' value='false' onClick={this.update('secret')} />
                                <div>
                                    <div className='secret-info'>Keep this board secret.</div>
                                    <a href='https://www.pinterest.com/_/_/help/article/change-board-privacy?source=secret_create'>Learn more</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                    <hr className='borderline' />
                    <div className='button-footer'>
                        <div className='button-group'>                            
                            <button
                                id='cancel-btn'
                                className = 'cancel-btn'
                                tabIndex='1'
                                onClick={this.props.hideModal} >
                                Cancel
                            </button>
                            <button
                                id='create-btn'
                                className = 'create-btn'
                                disabled = {createButtonDisabled}
                                onClick={this.handleSubmit} >
                                Create
                            </button>                        
                        </div>
                    </div>
                </div>
            </div>                    
        )
    }
}

export default BoardForm;

