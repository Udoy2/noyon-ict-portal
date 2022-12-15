import { Component } from "react"


class Clock extends Component {
    constructor(props){
      super(props);
      
      this.state = {
        time: new Date()
      };
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    tick() {
      this.setState({
        time: new Date()
      });
    }
    
    render() {
     return (
      <p className="text-3xl">{this.state.time.toLocaleTimeString()}</p>
     );
   } 
  }

export default Clock