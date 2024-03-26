import { Link } from 'react-router-dom';
import bannerimg from '../assets/bannerimg.png'

const Banner = () => {
    return (
        <div className=' my-8 container mx-auto'>
            <div className='flex justify-center flex-grow '>
            <section className="dark:bg-gray-100 dark:text-gray-800 rounded-lg ">
                <div className=" flex flex-col bg-stone-100 justify-center p-6  sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#131313]">
                            Books To Freshen Up Your Bookshelf
                        </h1>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start my-5">
                            <Link to='/listedbooks'  className="px-8 py-3 text-lg font-semibold bg-[#23BE0A] rounded dark:bg-violet-600 dark:text-gray-50 text-white ">View The List</Link>

                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={bannerimg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            </div>
           
        </div>
    );
};

export default Banner;