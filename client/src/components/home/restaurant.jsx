import React from 'react';
import axios from 'axios';

export default class RestaurantList extends React.Component {
  constructor(props){
  super(props)

    this.state = {
      people: [],
      name: "",
      contact: {},
      address: {},
      rating: 0
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
          { this.state.people.map(person => <li><p>{person.name + " " + person.contact.site + " " + person.contact.email + " " + person.contact.phone + " " + person.address.street + ", " + person.address.city + ", " + person.address.state + " " + person.address.location.lat + " " + person.address.location.lng + " " + " The Rating: " + person.rating}</p></li>)}
        </ul>
      )
    }
  }
