import { Link, useLoaderData } from "react-router-dom";
import BookBanner from "../components/BookBanner";
import { useEffect, useState } from "react";
import { getStoredReadBooks, getWishListBooks } from "../utility/localstorage";
import ReadBooks from "../components/ReadBooks";
import WishLists from "../components/WishLists";
import { IoMdArrowDropdown } from "react-icons/io";
//import PagestoRead from '../pages/PagestoRead'


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [bookstoread, setBookstoRead] = useState([]);
    const [wishbookstoread, setWishBookstoRead] = useState([]);
    console.log(bookstoread)

    const books = useLoaderData();
    // console.log(books)


    useEffect(() => {
        const storedReadBookIds = getStoredReadBooks();
        const storedWishBookIds = getWishListBooks();
        //console.log(books);


        //console.log( storedReadBookIds)
        if (books.length > 0) {
            const bookReads = books?.filter(book =>
                storedReadBookIds.includes(book.bookId),

            );
            //console.log(storedReadBookIds,bookReads)
            //console.log(bookReads)
            const bookwishes = books?.filter(book =>
                storedWishBookIds.includes(book.bookId)
            );

            setBookstoRead(bookReads);
            setWishBookstoRead(bookwishes);
            //console.log(bookReads)
        }
    }, []);


    return (

        <div className="container mx-auto overflow-x-hidden">
            <BookBanner />
            <div className="items-center flex justify-center my-16">
                <details className="dropdown w-26 ">
                    <summary className="m-1 btn bg-[#23BE0A] text-white font-medium">Sort By
                        <span><IoMdArrowDropdown /></span>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            {/* Tabs */}
            <div className="flex items-center lg:justify-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    to=""
                    onClick={() => setTabIndex(0)}
                    rel="noopener noreferrer"
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b"
                        } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                    >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                   

                </Link>
                <Link
                    to={`wishlistbooks`}
                    onClick={() => setTabIndex(1)}
                    rel="noopener noreferrer"
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? " border border-b-0" : "border-b"
                        } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                    >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            {tabIndex === 0 && (
                <>
                    {bookstoread.map((book, index) => (
                         <div key={index}>
                         <ReadBooks book={book} />
                         
                          </div>
                        // <ReadBooks key={index} book={book} />
                        // <PagestoRead bookstoread={bookstoread} />
                        //<PagestoRead bookstoread={bookstoread} />
                    ))}


                </>
            )}
            {tabIndex === 1 && (
                <>
                    {wishbookstoread.map((book, index) => (
                        <WishLists key={index} book={book} />
                    ))}
                </>
            )}




        </div>
    );
};

export default ListedBooks;
