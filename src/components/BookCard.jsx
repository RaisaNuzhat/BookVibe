import { CiStar } from "react-icons/ci";

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const BookCard = ({book}) => {

    const {image,tags,bookName,category,rating,author} = book
    
    return (
        <div>
            <Link  to={`/bookdetail/${book.bookId}`}
            className="card w-96 h-full bg-base-100 shadow-xl border-solid border-neutral-100 p-4 border-2">
                <figure className="px-10 pt-10">
                    <img  src={image} alt="Shoes" className="rounded-xl w-44 h-44 bg-[#F3F3F3] p-4" />
                </figure>

                <div className="card-body items-center text-center">
                <div className="flex items-center justify-evenly w-full ">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-[#F3F3F3] rounded-full px-3 py-3 text-sm font-normal text-[#23BE0A] mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </div>
                    <h2 className="card-title text-[#131313] font-bold text-xl">{bookName}</h2>
                    <p className="text-[#131313] font-normal ">By: {author}</p>
                    <div className='flex justify-between items-center gap-16'>
                        <p>{category}</p>
                        <div className="flex justify-evenly items-center">
                        
                        <span>{rating}</span>
                        <span><CiStar/></span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    bookName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
  
  }
  

export default BookCard;
