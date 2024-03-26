import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const BookDetail = () => {
    const { bookId } = useParams(); 
    const [book, setBook] = useState(null);
    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const res = await fetch(`/Book.json`);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                const selectedBook = data.find(book => book.bookId === parseInt(bookId));
                setBook(selectedBook);
            } catch (error) {
                console.error('Error :', error);
            }
        };
    
        fetchBookDetail();
    }, [bookId]);
    return (
        <div>
            {book && ( 
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" alt={book.bookName} />
                        <div>
                            <h1 className="text-5xl font-bold">{book.bookName}</h1>
                            <p className="py-6">{book.review}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetail;