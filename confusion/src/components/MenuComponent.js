import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


/**
 * functional component to render a dish item
 * @param {dish} object a dish
 * @param {onClick} function trigger onDishSelect()
 * @returns view dish wrapped in a card element
 */
 function RenderMenuItem ({dish, onClick}) {
   return (
     <Card>
       <Link to={`/menu/${dish.id}`}>
         <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
         <CardImgOverlay>
           <CardTitle>{dish.name}</CardTitle>
         </CardImgOverlay>
       </Link>
     </Card>
   );
 }

/**
 * alternative form of a functional component
 * @param {props} object  dish and onClick function as props
 * @returns view dish wrapped in a card element
 */
//  const RenderMenuItem = (props) => {

//    return (
//      <Card onClick={() => props.onClick(props.dish.id)}>
//        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
//        <CardImgOverlay>
//          <CardTitle>{props.dish.name}</CardTitle>
//        </CardImgOverlay>
//      </Card>
//    );
//  }
 
/**
 * Using js ES6 arrow function
 * @param {*} props 
 * @returns 
 */
  const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
      
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
        );

    });

    if (props.dishes.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.dishes.errMess) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                      <h4>{props.dishes.errMess}</h4>
                  </div>
              </div>
          </div>
      );
  }
  else 
    return (
      <div>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                Menu
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">{menu}</div>
        </div>
      </div>
    );
  }

  /**
   * Alternative using old js function instead of ES6 arrow function
   * @param {*} props 
   * @returns 
   */
  // var Menu = function(props) {

  //   const menu = props.dishes.map((dish) => {
  //     return (
  //       <div className="col-12 col-md-5 m-1" key={dish.id}>
  //         <RenderMenuItem dish={dish} onClick={props.onClick} />
  //       </div>
  //     );
  //   });

  //   return (
  //     <div>
  //       <div className="container">
  //         <div className="row">{menu}</div>
  //       </div>
  //     </div>
  //   );
  // }
    
export default Menu;