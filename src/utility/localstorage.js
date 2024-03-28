
const getStoredReadBooks = () => {
    const storedReadBook = localStorage.getItem('read-books');
    return storedReadBook ? JSON.parse(storedReadBook) : [];
};

// export const getStoredReadBooks = () =>
// {
//     let storedReadBooks= [];

// }
const saveReadBook = bookId => {
    const storedReadBooks = getStoredReadBooks();
    if (!storedReadBooks.includes(bookId)) {
        storedReadBooks.push(bookId);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
};

const getWishListBooks = () => {
    const wishListBook = localStorage.getItem('wish-books');
    return wishListBook ? JSON.parse(wishListBook) : [];
};

const saveWishListBook = bookId => {
    const wishListBooks = getWishListBooks();
    if (!wishListBooks.includes(bookId)) {
        wishListBooks.push(bookId);
        localStorage.setItem('wish-books', JSON.stringify(wishListBooks));
    }
};

export { getStoredReadBooks, saveReadBook, getWishListBooks, saveWishListBook };
