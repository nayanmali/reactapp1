import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        customcounter : [
            {id:1, value : 4, name:"nayan1"},
            {id:2, value : 5,name:"nayan2"},
            {id:3, value : 3,name:"nayan3"},
            {id:4, value : 2,name:"nayan4"},
            {id:5, value : -1,name:"nayan5"},
        ]
     };

    handleDelete = (counterId) =>{
        console.log("Event Handle ",counterId);
    };
    render() { 
        return (<div>
            {
                this.state.customcounter.map(counter => 
                    <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} selected={true} name={counter.name}>
                        <h4>Counter #{counter.id}</h4>                        
                    </Counter>)}
        </div>)
    };

    
}
 
export default Counters;