import axios from 'axios';
import React from 'react';
import {withAuth0} from '@auth0/auth0-react';
import {Row} from 'react-bootstrap';
import FavDrink from './FavDrink'
import ModalUpdate from './ModalUpdate'

class FavDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favdrinks: [],
            show:false,
            selectedDrink:{}
        }
    }
    deleteThisDrink = (id)=>{
        axios.delete(`${process.env.REACT_APP_SERVER}/favdrinks/${id}/${this.props.auth0.user.email}`).then(results=>{
            this.setState({
                favdrinks:results.data  
            })
        })

    }
    updateThisDrink =(drink)=>{
        this.setState({
            show:true,
            selectedDrink:drink
        })

    }
    componentDidMount = ()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/favdrinks?email=${this.props.auth0.user.email}`).then(results=>{
            this.setState({
                favdrinks: results.data
            })
        })
    }

    handleClose = ()=>{
        this.setState({
            show: false
        })
    }

    submitUpdateDrink =async(e)=>{
        e.preventDefault();
        const obj = {
      strDrink:e.target.drinkName.value,
      strDrinkThumb:e.target.drinkImage.value,
      email:this.props.auth0.user.email,
      id:this.state.selectedDrink._id
        }


        await axios.put(`${process.env.REACT_APP_SERVER}/favdrinks`,obj).then((results)=>{
            this.setState({
                favdrinks:results.data,
                show:false,
            })
        })
        
    }
    render() {
        return (
            <>
            <ModalUpdate show={this.state.show} handleClose={this.handleClose} submitUpdateDrink = {this.submitUpdateDrink} selectedDrink={this.state.selectedDrink} />
            <Row xs={1} md={2} lg={3} className="g-4" style={{margin:"25px 25px"}}>
            {
            this.state.favdrinks.map((drink,idx) =>  <FavDrink updateThisDrink={this.updateThisDrink} deleteThisDrink={this.deleteThisDrink}  drink={drink} key={idx} /> )}
            </Row>
            </>
        );
    }
}

export default withAuth0(FavDrinks);
