import React from 'react';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/bootstrap.min.css';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/style.css';
import axios from 'axios';
import Subemployee from './Subemployee';

export default class Employee2 extends React.Component{

constructor(props){
    super(props);
    this.state = {data:[],isset:false};

    this.callfunction=this.callfunction.bind(this);
}


componentDidMount(){
  



    fetch('http://dummy.restapiexample.com/api/v1/employees').
    then(res=>res.json()).
    then(json=>{
        this.setState({
            data:json,
            isset:true
        });
    })

    
}

callfunction(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res=> {
        var response =res.data;
    
    
     
      console.log(response[0].id);
    })
    .catch(function (error) {
    console.log(error);
    });
}

    

render(){
if(this.state.isset){
    return(
    <div>
        {
            this.state.data.map(employee=>{
                return <div class="panel panel-default" id="single" >
                <div class="panel-heading">id{employee.id}</div>
                <div class="panel-body">
                <h5>Name:{employee.employee_name}</h5>
                <h5>Age:{employee.employee_age}</h5>
                <h5>Salary:{employee.employee_salary}</h5>
                </div>
              </div>;
            })
        }
        </div>
    )
}else{
    return (<div>Loading...</div>);
}

}
}