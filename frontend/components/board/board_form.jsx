import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.board;
        
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    debounce (func, wait, immediate) {
        var timeout;
        debugger
        return () => {
            debugger
            var context = this,
                args = arguments;
            var later = () => {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait || 200);
            if (callNow) {
                func.apply(context, args);
            }
        };
    };

    update(field) {      
        let timeout = null;  

        return e => {            
            this.setState({ [field]: e.target.value });       
            
            clearTimeout(timeout);
            e.persist();
            timeout = setTimeout( () => {
                let createBtn = document.getElementById('create-btn');
                let cancelBtn = document.getElementById('cancel-btn');

                if (e.target.value === '') {
                    createBtn.classList.remove('create-btn-focus');
                    cancelBtn.classList.remove('cancel-btn-unfocus');                                        
                } else {
                    createBtn.classList.add('create-btn-focus'); 
                    cancelBtn.classList.add('cancel-btn-unfocus');                   
                }                
            }, 1000);                                             
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state)                    
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
                        </div>
                        <hr className='borderline' />
                        <div className='board-visibility'>
                            <p>Visibility</p>
                            <div className='secret'>
                                <input className='secret-box' type='checkbox' value='false' />
                                <div>
                                    <div className='secret-info'>Keep this board secret.</div>
                                    <a href='https://www.pinterest.com/_/_/help/article/change-board-privacy?source=secret_create'>Learn more</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='errors'>{this.renderErrors()}</div>
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

