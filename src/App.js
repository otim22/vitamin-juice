import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card';
import Loading from './components/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      loadnig: true,
      cards: [
        {
          id: 0,
          animation: 'card'
        }, 
        {
          id: 1,
          animation: 'card'
        }, 
        {
          id: 2,
          animation: 'card'
        }, 
        {
          id: 3,
          animation: 'card'
        }, 
        {
          id: 4,
          animation: 'card'
        }, 
        
        {
          id: 5,
          animation: 'card'
        }
      ]
    }
    
    this.toggleLogo = this.toggleLogo.bind(this);
    this.clickCard = this.clickCard.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loadnig: false}), 3000);
  }

  toggleLogo(event) {
    this.setState((preState) => ({
      toggleLogo: !preState.toggleLogo
    }));
  }

  clickCard(card) {
    let cards = this.state.cards;
    cards[card.id].animation = 'card animated zoomOut';
    console.log(cards);

    this.setState({
      cards,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
            alt="logo" 
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
          />
          <h1 className="App-title">Welcome to Vitamin Juice</h1>
        </header>
        {
          this.state.loadnig 
          ? 
          <Loading /> 
          :
          <div className="Grid">
          {
            this.state.cards.map((card) => (
              <Card duration={150} key={card.id} card={card} clickCard={this.clickCard} />
            ))
          }
        </div>
        }
      </div>
    );
  }
}

export default App;
