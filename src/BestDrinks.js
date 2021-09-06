import axios from 'axios';
import React from 'react';
import {Row} from 'react-bootstrap';
import BestDrink from './BestDrink';
import { withAuth0 } from '@auth0/auth0-react';



class BestDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bestDrinks :[],
        }
    }

    componentWillMount() {
        axios.get(`${process.env.REACT_APP_SERVER}/drinks`).then(results=>{
            this.setState({bestDrinks: results.data})
        })
    }

    addTofavorites =(drink)=>{
        drink.email = this.props.auth0.user.email;
        axios.post(`${process.env.REACT_APP_SERVER}/drinks`,drink).then(resulst=>
            {
        console.log(resulst.data);
        })
    }
    render() {
        return (
         <Row xs={1} md={2} lg={3} className="g-4" style={{margin:"25px 25px"}}>
          {
          this.state.bestDrinks.map((drink,idx) =>  <BestDrink addTofavorites={this.addTofavorites} drink={drink} key={idx} /> )}
          </Row>
        );
    }
}

export default withAuth0( BestDrinks);
