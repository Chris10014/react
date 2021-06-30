import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle} from "reactstrap";



class Dishdetail extends Component {


  constructor(props) {
    super(props);

    this.state = {

    };
  } 
  
  renderDish() {
    const dish = this.props.selectedDish
    if (dish != null) {
      return (
       
          
             <div className="col-12 col-md-5 m-1">
               <Card>                 
                 <CardImg top src={dish.image} alt={dish.name} />
                 <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                  </CardBody>
               </Card> 
             </div>        
           
      
      );
    }
    else {
        return <div></div>;
      }
  }

  renderComments() {
    const dish = this.props.selectedDish
    if (dish != null) {
      return (
       
           
             <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                <ul className="list-unstyled">
                   {dish.comments.map((comment) => {
                    return(
                     <li key={comment.id}>
                      {comment.comment}
                     </li>
                    );
                    })}
                 </ul>        
              </div>
           
        
      );
    }
    else {
        return <div></div>;
      }
  }

  

    render() {
      return (
        <div className="container">
           <div className="row">
           {this.renderDish()}  
           {this.renderComments()}
        </div>

        </div>
       
      );
  }
}

export default Dishdetail;