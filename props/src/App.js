import React,{Component} from 'react';
import './App.css';
import Devices from './component/child'


class App extends Component{
  constructor(){
    super()
      this.state={
        item:'',
        items:[]
      }
}

onHandleChange=e=>{
  let item=this.state.item
  item=e.target.value

  this.setState({
    item
  })
}

onButtonClick=()=>{
  let item=this.state.item
  let items=this.state.items

  items.push(item)
  this.setState({
    items
  })
}

render(){
  let items=this.state.items
  return(

      <div>
        <Devices 
        onInputChange={this.onHandleChange}
        onButtonClick={this.onButtonClick}
        items={items}></Devices>
      </div>


    )
}

}

export default App;
