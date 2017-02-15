import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    setInterval(() => {
     this.setState({
       showText: !this.state.showText
     });
    }, 1000);
  }

 render() {
   const text = this.state.showText? this.props.text : '';
   return (
     <div>
       <span style={{color: "red"}}>
         {text}
       </span>
     </div>
   );
 }
}

export default Text;
