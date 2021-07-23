import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from "reactstrap";

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            rating: 1,
            yourname: "",
            comment: "",
            touched: {
              yourname: false
            }
          };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen,
        });
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
    }
      

render() {




    return (
        <div className="row">
            <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input
                    type="select"
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleInputChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="yourname">Your Name</Label>
                <Input
                  type="text"
                  id="yourname"
                  name="yourname"
                  placeholder="Your Name"
                  innerRef={(input) => (this.yourname = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">
                  Comment
                </Label>
                  <Input
                    type="textarea"
                    id="comment"
                    name="comment"
                    rows="6"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  ></Input>
              </FormGroup>
              
              <Button type="submit" value="submit" color="primary"> Submit</Button>
            </Form>

            </ModalBody>
            </Modal>

        </div>

   

    );
}

}

export default CommentForm;