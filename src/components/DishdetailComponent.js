import React, { Component } from 'react';
import { Card,CardImg, CardText,CardBody,CardTitle,ListGroup,ListGroupItem} from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){

        super(props);

        this.state ={
            comments:null
        }
    }

    renderComments(comment){
        if(comment==null)
        {return(<div></div>)}
        else
        {
            return( 
                <li>
                    <p>
                        {comment.comment}
                        <br></br>
                        -- {comment.author},  
                        {comment.date}
                    </p>
                </li>
            );
        } 
    }

    render(){
        if(this.props.selectedDish==null)
            return(<div></div>);
        else
        {
            const comment = this.props.selectedDish.comments.map((comment)=>{
                return(
                    <ul key={comment.id} className="list-unstyled">
                        {this.renderComments(comment)}
                    </ul>
                )
                });

            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.image}/>
                                <CardBody>
                                <CardTitle>
                                        {this.props.selectedDish.name}
                                </CardTitle>
                                <CardText>
                                        {this.props.selectedDish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>
                            Comments 
                        </h4>
                        <ListGroup>
                            {comment}
                        </ListGroup>
                    </div>
                </div>
            );
        }
       
    }
}


export default DishDetail;