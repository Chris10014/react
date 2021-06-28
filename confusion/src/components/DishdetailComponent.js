import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    console.log("props: " + props);

    this.state = {
        selectedDishdetail: this.props.dishes
    };
  }

  renderDish(dish) {
      console.log(dish);
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
}

export default Dishdetail;