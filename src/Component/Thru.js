import React,{Component} from 'react'

class Thru extends Component {
    state = {  }
    render() { 
        return (
            <div class="thru">
            <p class="valid">
                valid thru
                <span class="arrow">
                    
                    &#9658;

                </span>
            </p> 
            {this.props.Thru}
        </div>
          );
    }
}
 
export default Thru;