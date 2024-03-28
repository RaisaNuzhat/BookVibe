import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveReadBook,saveWishListBook} from '../utility/localstorage'

const BookDetail = () => {
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId); 
    const [book, setBook] = useState(null);
    const [wishlistClickCount, setWishlistClickCount] = useState(0);
    const [readClickCount, setReadClickCount] = useState(0);
    

    const notifyone = () => toast("This book has been added to wishlist !");
    const notifytwo = () => toast("This book has already been added to wishlist !");
    const notifythree = () => toast("This book has been added to read books!");
    const notifyfour = () => toast("This book has already been added to read books!");
    const handleWishlistClick = () => {
        if (wishlistClickCount === 0) {
            saveWishListBook(bookIdInt)
            notifyone();
            setWishlistClickCount(1);
        } else {
            notifytwo();
        }
    };
    const handleReadClick = () => {
        if (readClickCount === 0) {
            saveReadBook(bookIdInt);
            notifythree();
           
            setReadClickCount(1);
        } else {
            notifyfour();
        }
    };

    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const res = await fetch(`/Book.json`);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                const selectedBook = data.find(book => book.bookId == bookIdInt);

                setBook(selectedBook);
            } catch (error) {
                console.error('Error :', error);
            }
        };

        fetchBookDetail();
    }, [bookIdInt]);

    return (
        <div>
            {book && (
                <div className="flex justify-evenly items-center container">
                    <section className="dark:bg-gray-100 dark:text-gray-800">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={book.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                    {book.bookName}
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    By: {book.author}
                                </p>
                                <div className="flex p-2 text-xl flex-col border-b-2 border-t-2 border-neutral-200 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    {book.category}
                                </div>

                                <p className="my-3">
                                    <span className="font-bold">Review</span>
                                    {book.review}
                                </p>

                                <div className="my-3 flex items-center gap-4 font-bold border-b-2 border-neutral-200 border-solid">
                                    <p>Tag:</p>
                                    {book.tags.map((tag, index) => (
                                        <span key={index} className="inline-block bg-[#F3F3F3] rounded-full px-3 py-3 text-sm font-normal text-[#23BE0A] mr-2 mb-2">
                                             #{tag}
                                        </span>
                                    ))}
                                </div>

                               <div className="grid  gap-3">
                                   <p><span className="font-bold">Number of pages: </span>{book.totalPages}</p>
                                   <p><span className="font-bold">Publisher: </span>{book.publisher}</p>
                                   <p><span className="font-bold">Year of publishing: </span>{book.yearOfPublishing}</p>
                                   <p><span className="font-bold">Rating: </span>{book.rating}</p>
                               </div>

                                <div className="flex items-center justify-between sm:flex-col lg:flex-row gap-3">
                                    <button onClick={handleReadClick} className="btn btn-outline">Read</button>
                                    <button onClick={handleWishlistClick} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default BookDetail;
