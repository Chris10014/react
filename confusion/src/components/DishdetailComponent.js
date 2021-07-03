import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle} from "reactstrap";

class Dishdetail extends Component {
  
  renderDish(dish) {
   console.log("from DishdetailComp. renderDish(): " + dish.name);
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

  renderComments(comments) {
    if (comments != null) {
      return (
             <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                <ul className="list-unstyled">
                   {comments.map((comment) => {
                    return(
                     <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author}, {new Intl.DateTimeFormat('de', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
      if(this.props.selectedDish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.selectedDish)}
            {this.renderComments(this.props.selectedDish.comments)}            
          </div>
        </div>
      );
    }
      else {
        return(<div></div>);
      }
  }
}

export default Dishdetail;