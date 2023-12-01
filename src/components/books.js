import BookItem from "./bookItem";

function Books(props){
    return props.myBooks.map(
        (book)=>{
            // adds book item to book using a map and props function to reload data
            return <BookItem myBook={book} key={book._id} reload={()=>{props.Reload();}}></BookItem>
        }
    );
}
    
export default Books;