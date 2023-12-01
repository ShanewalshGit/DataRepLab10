import { Card, CardBody, CardHeader } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios';

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
                    <Button variant="danger" onClick={
                        (e)=>{
                            axios.delete('http://localhost:4000/api/book/'+props.myBook._id)
                            .then((res)=>{
                                // call parent function to refresh data
                                let Reload = props.reload();
                            })
                            .catch();
                        }
                    }>Delete</Button>
                </Card>
            </div>


        
    );
}
    
export default BookItem;