import React from 'react';
import {Col,Card,Button} from 'react-bootstrap'

class BestDrink extends React.Component {
    render() {
        return (
            <Col>
            <Card>
              <Card.Img variant="top" src={this.props.drink.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{this.props.drink.strDrink}</Card.Title>
                <Button variant="primary" onClick={()=>this.props.addTofavorites(this.props.drink)}>Add To Favorites</Button>
              </Card.Body>
            </Card>
          </Col>
        );
    }
}

export default BestDrink;
