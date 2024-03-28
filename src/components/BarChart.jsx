import { BarChart as BChart , Bar, XAxis, YAxis, CartesianGrid ,Cell} from 'recharts';
import PropTypes from 'prop-types'; 
const BarChart = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const data = [
  {
    bookName: "The Great Gatsby",
    totalPages: 180
  },
  {
    bookName: "To Kill a Mockingbird",
    totalPages: 281
  },
  {
    bookName: "The Lord of the Rings",
    totalPages: 1178
  },
  {
    bookName: "The Catcher in the Rye",
    totalPages: 224
  },
  {
    bookName: "Pride and Prejudice",
    totalPages: 279
  },
  {
    bookName: "The Hobbit",
    totalPages: 310
  }
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };  

    return (
        <div>
             <BChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BChart>
        </div>
    );
};
BarChart.propTypes = {
    fill: PropTypes.string.isRequired, // fill prop is required and must be a string
    x: PropTypes.number.isRequired, // x prop is required and must be a number
    y: PropTypes.number.isRequired, // y prop is required and must be a number
    width: PropTypes.number.isRequired, // width prop is required and must be a number
    height: PropTypes.number.isRequired, // height prop is required and must be a number
  };

export default BarChart;