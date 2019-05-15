import React from 'react';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/bootstrap.min.css';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/style.css';
import axios from 'axios';
import Subemployee from './Subemployee';

export default class Employee extends React.Component{

constructor(props){
    super(props);
    this.state = {data:'id'};

    this.callfunction=this.callfunction.bind(this);
}

callfunction(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res=> {
        var response =res.data;
    this.setState({data:response[0].id});
     
      console.log(response[0].id);
    })
    .catch(function (error) {
    console.log(error);
    });
}
    

render(){

    return(
    <div>
        <p>{this.state.data}</p>
        <h1>hello</h1>
        <input type="button" class="btn btn-success" onClick={this.callfunction.bind(this)} value="click"/>
        </div>
    )
}

}