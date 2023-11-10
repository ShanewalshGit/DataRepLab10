import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read(){
    // data to be passed using axios with http client, calling to get data from api
    const [data, setData] = useState([]);

    // UseEffect takes in api link with axious then implements a then catch in case an error occurs
    useEffect(
        ()=>{
            axios.get("http://localhost:4000/api/books") // link to our server
            .then(
                (response)=>{
                    setData(response.data.myBooks);
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },[]
    );

    // Displays book data
    return (
        <div>
            <Books myBooks={data}></Books>
        </div>
    );
}
    
    export default Read;