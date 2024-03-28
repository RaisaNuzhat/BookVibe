import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishLists = ({book}) => {
    const { bookName, author, category ,image,tags,yearOfPublishing,publisher,totalPages,rating} = book;
    return (
        <div className="flex mx-auto my-16 container justify-center w-full gap-4 ">
        <div className="p-4 border-2 border-neutral-200 flex gap-4 rounded-lg">
                <div className="w-1/2">
                    <img src={image} className="w-56 h-52" alt="" />
                </div>
                <div>
                    <h3 className="'text-5xl font-bold">
                        {bookName}
                    </h3>
                    <p className="m-3">
                       By: {author}
                    </p>
                   <div className="flex justify-evenly items-center gap-3">
                   <div className="">
                   <p className="m-3">
                        <span className="font-medium text-xl">Tag: </span>
                        {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-[#F3F3F3] rounded-full p-2 text-sm font-normal text-[#23BE0A] w-30  mr-2 mb-2">
                        #{tag}
                    </span>
                ))}
                    </p>
                   </div>
                   <div className="flex items-center justify-center  gap-2 ">
                      <span><CiLocationOn /></span>
                     <p className="text-[#424242]">Year of Publishing:{yearOfPublishing}</p>
                   </div>
                   </div>

                   <div className="flex justify-evenly items-center p-3 border-b-2 border-neutral-200 w-full">
                        <div className="flex justify-center items-center gap-2">
                           <span><IoPeopleOutline /></span> 
                           <p className="text-[#424242]">publisher:{publisher}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <span><RiPagesLine /></span>
                           <p className="text-[#424242]">Page:{totalPages}</p> 
                        </div>
                   </div>

                   <div className="flex justify-evenly items-center my-4">
                   <button className="btn bg-[#328EFF] bg-opacity-15 btn-xs sm:btn-sm md:btn-md lg:btn-lg">{category}</button>
                   <button className="btn bg-[#FFAC33] bg-opacity-15 btn-xs sm:btn-sm md:btn-md lg:btn-lg">{rating} </button>
     
                   <Link to={`/bookdetail/${book.bookId}`} className="btn  bg-[#23BE0A] text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">View Details</Link>
                   </div>

                </div>
        </div>
    </div>
    );
};
WishLists.propTypes = {
    book: PropTypes.object
};
export default WishLists;