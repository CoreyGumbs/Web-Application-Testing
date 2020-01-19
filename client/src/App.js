import React from 'react';
import './css/App.css';
import Display from './components/Display/Display';
import DashBoard from './components/Dashboard/Dashboard';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0
    }
  }

  componentDidUpdate(prevProps, prevState){
      const {strikes, balls, fouls} = this.state;
      if(strikes === 3 || balls === 4){
        this.setState({strikes: 0});
        this.setState({balls: 0});
        this.setState({fouls: 0});
      }
  }

  handleAction = e => {
    const{strikes, balls, fouls} =  this.state;
    const targetName =  e.target.name;
  
    switch(targetName){
      case 'strikes':
        if(strikes <= 2){
          this.setState({[e.target.name]: this.state.strikes + 1});
        }
        break;
      case 'balls':
        if(balls <=4){
          this.setState({[e.target.name]: this.state.balls + 1});
        }
        break;
      case 'fouls':
        if(fouls < 2){
          this.setState({[e.target.name]: this.state.fouls + 1});
          this.setState({strikes: strikes + 1});
        }
        break;
      default: 
    }
  }

  render(){
    const {strikes, balls, fouls} =  this.state;
    //console.log(strikes)
    return (

      <div className="App">
          <Display strikes={strikes} balls={balls} fouls={fouls} />
          <DashBoard handleAction={this.handleAction} />
      </div>
    );
  }
}

export default App;
