import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: this.props.value,
        name :this.props.name,
        id : this.props.id
    };

    handleIncrement =()=>{        
        this.setState({ count:this.state.count+1})        
    };
    handleDecrement =()=>{        
        this.setState({ count:this.state.count-1})        
    };
   
    render() { 
        
        return <div className="container">
            {this.props.children}
            
            <span className={this.getBadages()}>{this.state.count} </span>
            <span className={this.getBadages()}>{this.state.name}</span>
            <input type="button" onClick={this.handleIncrement} value="Increment" className="btn btn-primary btn-sm m-2"/>
            <input type="button" onClick={this.handleDecrement} value="Decrement" className="btn btn-secondary  btn-sm m-2"/>
            <input type="button" onClick={()=>this.props.onDelete(this.props.id)}  value="Delete"    className="btn btn-danger btn-sm m-2"/>
        </div>;
    };

    getBadages(){
        let classes = "badge m-2 badge-";
        classes += this.state.count===0? "warning":"primary";        
        return classes;
    }
}
 
export default Counter;