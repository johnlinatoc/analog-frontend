import React, { Component } from 'react';
import Api from '../../services/api'

export default class Payment extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: '',
          cardNumber: '',
          expirationMonth: '',
          expirationYear: '',
          CVV: '',
          valid: undefined
        }
      }


    handleNameChange(e){
    this.setState({
        name: e.target.value
    })
    }

    handleCardChange(e){
    this.setState({
        cardNumber: e.target.value
    })
    }  


    handleCheckout(e){
        e.preventDefault()
        if(this.state.cardNumber.length < 1) return
        const card = Api.validator(this.state.cardNumber)
        this.setState({
            valid: card
        })
    }



    render() { 

   
        return ( 
        <div>
            <h3>Payment Info</h3>
            <span>Payment Method</span>
            <form onSubmit={(e)=>{this.handleCheckout(e)}}>
                Name on Card: <input onChange={(e) => this.handleNameChange(e)} value={this.state.name} />
                Card Number: <input onChange={(e) => this.handleCardChange(e)} value={this.state.cardNumber} />
            <input type='submit' value='checkout' />
        </form>
        </div>
         );
    }
}
