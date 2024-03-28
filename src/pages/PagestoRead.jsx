import BarChart from "../components/BarChart";
import PropTypes from "prop-types";

const PagestoRead = ({ bookstoread }) => {
    return (
        <div>
            {bookstoread.map((book, index) => (
                <BarChart key={index} book={book} />
            ))}
        </div>
    );
};

PagestoRead.propTypes = {
    bookstoread: PropTypes.arrayOf(
        PropTypes.shape({
            bookName: PropTypes.string.isRequired,
            PagestoRead: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default PagestoRead;
