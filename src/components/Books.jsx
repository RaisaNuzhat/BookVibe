import { useEffect, useState } from "react";
import BookCard from "./BookCard";
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('Book.json'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  
    return (
        <div className="mx-auto container  ">
               <div className="flex justify-center">
                <div className="grid gap-4 my-8 lg:grid-cols-3">
                    {books.map(book => <BookCard book={book} key={book.bookId} />)}
                </div>
            </div>
          
            
            
        </div>
    );
};

export default Books;