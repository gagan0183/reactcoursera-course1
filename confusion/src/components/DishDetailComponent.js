import React, { Component } from 'react';
import { Card, CardImg, Media, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        console.log(dish);
        if(dish) {
            const comments = dish.comments.map((comment) => {
                return (
                    <div key={comment.id} className="col-12">
                        <Media tag="li">
                            <Media body className="">
                                <Media>{comment.comment}</Media>
                                <p>-- {comment.author}, {comment.date}</p>
                            </Media>
                        </Media>        
                    </div>
                    );
                }
            );
            if(comments) {
                return (
                    <div>
                        <h4>Comments</h4>
                        <Media list className='list-unstyled'>
                            {comments}
                        </Media>
                    </div>
                );
            }
            else {
                
            }
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-xs-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>                
            </div>
        );
    }
}

export default DishDetail;