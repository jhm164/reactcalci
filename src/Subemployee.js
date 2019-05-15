import React from 'react';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/bootstrap.min.css';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/style.css';
import axios from 'axios';

export default class Employee extends React.Component{

constructor(props){
    super(props);
  
}



render(){

    return(
        <div class="panel panel-default">
        <div class="panel-heading">{this.props.id}</div>
        <div class="panel-body">{this.props.name}</div>
      </div>

    )
}

}