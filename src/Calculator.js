import React from 'react';
//import 'bootstrap';
import {Container,Button,Form,Table} from 'react-bootstrap';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/bootstrap.min.css';
import 'C:/Users/Shradha/Documents/reactapp/calci/reactcalci/src/css/style.css';
export default class Calculator extends React.Component{
    constructor(props){
        super(props);


this.state={
    firstnum:0,
    secondnum:0,
    result:0,
    operator:'X'
}

this.first=this.first.bind(this);
this.second=this.second.bind(this);
this.third=this.third.bind(this);
this.four=this.four.bind(this);
this.five=this.five.bind(this);
this.six=this.six.bind(this);
this.seven=this.seven.bind(this);
this.eight=this.eight.bind(this);
this.nine=this.nine.bind(this);
this.zero=this.zero.bind(this);
this.operatorplus=this.operatorplus.bind(this);
this.operatorminus=this.operatorminus.bind(this);
this.operatormult=this.operatormult.bind(this);
this.operatordivide=this.operatordivide.bind(this);
this.result1=this.result1.bind(this);
this.clear=this.clear.bind(this);
    };


    first(){
        if(this.state.firstnum==0){
        this.setState({firstnum:1})
        }else{
            this.setState({secondnum:1}) 
        }

    }
    second(){
        if(this.state.firstnum==0){
        this.setState({firstnum:2})
        }else{
            this.setState({secondnum:2}) 
        }

    }
    third(){
        if(this.state.firstnum==0){
        this.setState({firstnum:3})
        }else{
            this.setState({secondnum:3}) 
        }

    }
   
   four(){
        if(this.state.firstnum==0){
        this.setState({firstnum:4})
        }else{
            this.setState({secondnum:4}) 
        }

    }
   five(){
        if(this.state.firstnum==0){
        this.setState({firstnum:5})
        }else{
            this.setState({secondnum:5}) 
        }

    }

    six(){
        if(this.state.firstnum==0){
        this.setState({firstnum:6})
        }else{
            this.setState({secondnum:6}) 
        }

    }
    seven(){
        if(this.state.firstnum==0){
        this.setState({firstnum:7})
        }else{
            this.setState({secondnum:7}) 
        }

    }
    eight(){
        if(this.state.firstnum==0){
        this.setState({firstnum:8})
        }else{
            this.setState({secondnum:8}) 
        }

    }
    nine(){
        if(this.state.firstnum==0){
        this.setState({firstnum:9})
        }else{
            this.setState({secondnum:9}) 
        }

    }



   zero(){
        if(this.state.firstnum==0){
        this.setState({firstnum:0})
        }else{
            this.setState({secondnum:0}) 
        }

    }






    clear(){
        if(this.state.secondnum!=0){
            this.setState({secondnum:0})
            }else  if(this.state.firstnum!=0){
                this.setState({firstnum:0}) 
            }

    }





    operatorplus(){
        this.setState({operator:'+'})

    }

    operatorminus(){
        this.setState({operator:'-'})

    }
    operatormult(){
        this.setState({operator:'*'})

    }
    operatordivide(){
        this.setState({operator:'/'})

    }

    result1(){
if(this.state.operator=='+'){
    var result=this.state.firstnum+this.state.secondnum;
    this.setState({result:result})
}else if(this.state.operator=='-'){
    var result=this.state.firstnum-this.state.secondnum;
    this.setState({result:result})
}else if(this.state.operator=='*'){
    var result=this.state.firstnum*this.state.secondnum;
    this.setState({result:result})
}else if(this.state.operator=='/'){
    var result=this.state.firstnum/this.state.secondnum;
    this.setState({result:result})
}


    }

    

render(){

   

    var stylenew={
        width:100
    }
    

    return(
<Container><center>
    <div id="maincompo">

    
  <Table striped bordered hover>
 
  <tbody>
  <tr>
      <td colspan="3"><p>{this.state.firstnum}{this.state.operator}{this.state.secondnum}</p> </td>
     
    </tr>
    <tr>
      <td colspan="3"> <Form.Control type="text" placeholder="0" value={this.state.result} /></td>
     
    </tr>
    <tr>
      <td>  <Button variant="info" style={stylenew} onClick={this.first.bind(this)} >1</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.second.bind(this)}  >2</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.third.bind(this)}   >3</Button></td>
    </tr>
    <tr>
      <td>  <Button variant="info" style={stylenew} onClick={this.four.bind(this)}   >4</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.five.bind(this)}   >5</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.six.bind(this)}   >6</Button></td>
    </tr>
    <tr>
      <td>  <Button variant="info" style={stylenew} onClick={this.seven.bind(this)}   >7</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.eight.bind(this)}   >8</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.nine.bind(this)}   >9</Button></td>
    </tr>
    <tr>
      <td>  <Button variant="info" style={stylenew}  onClick={this.zero.bind(this)}  >0</Button></td>
      <td>  <Button variant="info" style={stylenew}  onClick={this.operatorplus.bind(this)} >+</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.result1.bind(this)} >=</Button></td>
    </tr>
    <tr>
      <td>  <Button variant="info" style={stylenew} onClick={this.operatorminus.bind(this)}   >-</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.operatormult.bind(this)}   >*</Button></td>
      <td>  <Button variant="info" style={stylenew} onClick={this.operatordivide.bind(this)}   >/</Button></td>
    </tr>
    <tr>
      <td>  <Button variant="info" style={stylenew} onClick={this.clear.bind(this)}   >clear</Button></td>
      <td> </td>
      <td> </td>
    </tr>
  </tbody>
</Table>
  

</div>
</center>

</Container>

    );
}


}

