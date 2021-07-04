import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
  
  function RenderDish({dish}) {
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

  function RenderComments({comments}) {
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
        return null;
      }
  }

   const Dishdetail = (props) => {
     if (props.dish != null) {
       console.log("from Dishdetail props.dish: ", props.dish);
       return (
         <div className="container">
           <div className="row">
             <RenderDish dish={props.dish} />
             <RenderComments comments={props.dish.comments} />
           </div>
         </div>
       );
     } else {
       return null;
     }

   }

export default Dishdetail;