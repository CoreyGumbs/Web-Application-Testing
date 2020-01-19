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
      fouls: 0,
      outs: 0,
      hit: false
    }
  }

  componentDidUpdate(prevProps, prevState){
      const {strikes, balls, outs, hit} = this.state;
      if(strikes === 3 || balls === 4 | hit){
        this.setState({
          strikes: 0,
          balls: 0,
          fouls: 0,
          outs: outs + 1,
          hit: false
        });
      }

      if(outs === 3 ){
        this.setState({
          strikes: 0,
          balls: 0,
          fouls: 0,
          outs: 0,
          hit: false
        });
      }
  }

  handleAction = e => {
    const{strikes, balls, fouls} =  this.state;
    const targetName =  e.target.name;
  
    switch(targetName){
      case 'strikes':
        if(strikes <= 2){
          this.setState({[e.target.name]: strikes + 1}, () => console.log(strikes));
        }
        break;
      case 'balls':
        if(balls <=4){
          this.setState({[e.target.name]: balls + 1});
        }
        break;
      case 'fouls':
        if(strikes < 2){
          this.setState({[e.target.name]: fouls + 1});
          this.setState({strikes: strikes + 1});
        }else{
          this.setState({[e.target.name]: fouls + 1});
        }
        break;
      case 'hit': 
        this.setState({[e.target.name]: true});
        break;


      default: 
    }
  }

  render(){
    const {strikes, balls, fouls, outs, hit} =  this.state;
 
    return (

      <div className="App">
          <Display strikes={strikes} balls={balls} fouls={fouls} hit={hit} outs={outs} />
          <DashBoard handleAction={this.handleAction} />
      </div>
    );
  }
}

export default App;
