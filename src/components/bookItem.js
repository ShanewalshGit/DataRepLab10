import { Card, CardBody, CardHeader } from "react-bootstrap";



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
                            <img src={props.myBook.thumbnailUrl}></img>
                            <footer>
                                {props.myBook.authors[0]}
                            </footer>

                        </blockquote>
                    </CardBody>
                </Card>
            </div>


        
    );
}
    
export default BookItem;