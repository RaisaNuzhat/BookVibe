import BarChart from "../components/BarChart";

import { useLoaderData } from "react-router-dom";

import { useState, useEffect } from "react";
import { getStoredReadBooks } from "../utility/localstorage";

const PagestoRead = () => {
    const books = useLoaderData();
    const [bookstoadd, setBookstoAdd] = useState([]);
    useEffect(() => {
        const storedReadBookids = getStoredReadBooks();


        if (books.length > 0) {
            const bookAdds = books?.filter(book =>
                storedReadBookids.includes(book.bookId),
            );

            setBookstoAdd(bookAdds);

            console.log(bookAdds)
        }
    }, []);
    return (
        <div>
            {bookstoadd.map((book, index) => (
                <div key={index}>
                    <BarChart book={book} />

                </div>
            ))}
        </div>
    );
};



export default PagestoRead;
