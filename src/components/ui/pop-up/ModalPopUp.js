import React, { Component } from 'react'
import './ModalPopUp.css';


class ModalPopUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            show: props.show
        }
    }

    render(){
        if(this.props.children){
            return(
                <>
                {
                    
                    this.props.show &&
                        <div show={this.props.show} onClose={this.props.onClose}>
                            <div className='modal-create'>
                                {this.props.children}
                            </div>
                        </div>
                }
               </>
            )
        }

        return(
            <>
            {
                this.props.show &&
                    <div show={this.props.show} onClose={this.props.onClose} >
                        <div className='modal-create'>
                            <p className='textToast'>{ this.props.title }</p>
                            <hr/>
                            <p className='textToast'>{ this.props.message }</p>
                        </div>
                    </div>
            }
            </>
        )  
    }
}
export default ModalPopUp; 