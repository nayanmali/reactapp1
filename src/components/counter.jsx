import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: this.props.value,
        name :this.props.name
    };

    handleIncrement =()=>{        
        this.setState({ count:this.state.count+1})        
    };
    handleDecrement =()=>{        
        this.setState({ count:this.state.count-1})        
    };
    render() { 
        console.log(this.props)
        return <div className="container">
            {this.props.children}
            <span className={this.getBadages()}>{this.state.count} </span>
            <span className={this.getBadages()}>{this.state.name}</span>
            <input type="button" onClick={this.handleIncrement} value="Increment" className="btn btn-primary"/>
            <input type="button" onClick={this.handleDecrement} value="Decrement" className="btn btn-secondary"/>
        </div>;
    };

    getBadages(){
        let classes = "badge m-2 badge-";
        classes += this.state.count===0? "warning":"primary";
        console.log(classes)
        return classes;
    }
}
 
export default Counter;