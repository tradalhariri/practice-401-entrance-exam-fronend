import React from 'react';
import {Modal,Form,Button} from 'react-bootstrap'
class ModalUpdate extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update This Drink</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.submitUpdateDrink}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Drink Name</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.selectedDrink.strDrink} name='drinkName'/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Drink Image</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.selectedDrink.strDrinkThumb} name='drinkImage' />
                        </Form.Group>
 
                        <Button variant="primary" type="submit">
                            save changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalUpdate;
