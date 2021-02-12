import React from 'react'
import "./menu.scss"

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
        activeCollapse: 'circulars'
    };
  }

  handleExpandCollaps = (name) => {
    if (this.state.activeCollapse === name) {
        this.setState({ activeCollapse: '' })
    } else {
        this.setState({ activeCollapse: name })
    }
  }

  moreInfoClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
  }
  render() {
    return  (
     <div  className={`collapsible ${this.state.activeCollapse === "circulars" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("circulars")}>
      <div onClick={this.moreInfoClick} id='collapsible-btn'>&#9776 EXP|CON
      <div class="content" id='collapsible-menu'>
        <div class='menu-txt'>
          <p id='menu-color'>What is it</p>
          <p>Perks pricing</p>
        </div>
      </div>
    </div>
    </div> 
    )
  }
}
export default Menu