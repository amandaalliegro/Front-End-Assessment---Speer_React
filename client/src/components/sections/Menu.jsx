import MenuSandwich from "../../public/assets/menu.png"
import "./menu.scss"
import React from 'react'

class Menu extends React.Component {
  constructor(props){
  super(props);
  this.state = {
  open: false
  }
  this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e){
  this.setState({open: !this.state.open})
  }
  render() {
  return (<div>
  <div onClick={(e)=>this.togglePanel(e)} className='header'><img id='menu-sandwich'src={MenuSandwich}/>EXP|CON
  {this.props.title}</div>
  {this.state.open ? (
  <div className='content'>
  {this.props.children} 
  <p>WHAT IS IT PERKS PRICING</p>
  </div>
  ) : null}
  </div>);
  }
  }
export default Menu