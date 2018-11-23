import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import './App.css';

import { getCars } from './actions/cars'

class App extends Component {
  state = {
    cars: []
  }
  componentDidMount(){
    this.props.getCars()
  }


  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.cars) !== JSON.stringify(this.props.cars)) {
      this.setState({
        cars: this.props.cars
      })
    }
  }

  handleSort = (e)=> {
    const toSort = [...this.state.cars]
    toSort.sort(function(a,b){
      if(a[e.target.value] < b[e.target.value]) { return -1; }
      if(a[e.target.value] > b[e.target.value]) { return 1; }
      return 0;
    });
    this.setState({
      cars: toSort
    })
  }
  render() {
    const { cars } = this.state;
    return (
      <div className="App">
        <div className="cardList">
          {cars && <CardList handleSort={this.handleSort} cars={cars}/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    cars: state.cars.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(getCars())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
