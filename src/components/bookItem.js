import { Card, CardBody, CardHeader } from "react-bootstrap";
import { Link } from 'react-router-dom';

function BookItem(props){
    return (
        /*
            <h2>{props.myBook.title}</h2>
            <p>By {props.myBook.authors[0]}</p>
            <img src={props.myBook.thumbnailUrl}></img>
            */

            <div>
                <Card>
                    <CardHeader>{props.myBook.title}</CardHeader>
                    <CardBody>
                        <blockquote className="blockquote mb-0">
                            <img src={props.myBook.cover}></img>
                            <footer>
                                {props.myBook.author}
                            </footer>

                        </blockquote>
                    </CardBody>
                    <Link to={"/edit/"+props.myBook._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>


        
    );
}
    
export default BookItem;