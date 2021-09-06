import React from 'react';
import {Col,Card,Button} from 'react-bootstrap'

class FavDrink extends React.Component {
    render() {
        return (
            <Col>
            <Card>
              <Card.Img variant="top" src={this.props.drink.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{this.props.drink.strDrink}</Card.Title>
                <Button variant="primary" onClick={()=>this.props.deleteThisDrink(this.props.drink._id)}>Delete From favorites</Button>
                <Button variant="primary" onClick={()=>this.props.updateThisDrink(this.props.drink)}>Update THis Drink</Button>
              </Card.Body>
            </Card>
          </Col>
        );
    }
}

export default FavDrink;
