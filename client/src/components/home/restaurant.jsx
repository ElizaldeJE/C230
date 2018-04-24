import React from 'react';
import axios from 'axios';

export default class RestaurantList extends React.Component {
  constructor(props){
  super(props)

    this.state = {
      people: [],
      name: ""
    };
};
    componentDidMount() {
      axios.get(`https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json`)
        .then(res => {
          const people = res.data;
          this.setState({ people });
        })
    }

    render() {
      return ( 
        <ul>
          { this.state.people.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }
