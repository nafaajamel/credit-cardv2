
import React,{Component} from 'react'
class Name extends Component {
    state = {  }
    render() { 
        return ( 
<h3 className="name">{this.props.UserName}</h3>
            
         );
    }
}
 
export default Name;