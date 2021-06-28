import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    console.log("props: " + props);

    this.state = {

    };
  }

  renderDish() {
    const dish = this.props.selectedDish
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
        return <div></div>;
      }
  }

    render() {
      return (
        <div className="col-12 col-md-5 --1">
          <div className="container">
            <div className="row">
              {this.renderDish()}
            </div>
          </div>
        </div>// / col-12 col-md-5 m-1 
      )
    }
  }

export default Dishdetail;