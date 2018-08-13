
import React,{Component} from   'react'

class CardNumber extends Component {
    
    render() { 
        return ( 
            <h5 class="card-number">
            {this.props.CardNumber}
        </h5>

         );
    }
}
 
export default CardNumber;