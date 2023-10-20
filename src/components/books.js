import BookItem from "./bookItem";

function Books(props){
    return props.myBooks.map(
        (book)=>{
            // adds book item to book using a map and props function
            return <BookItem myBook={book}></BookItem>
        }
    );
}
    
export default Books;