import PropTypes from 'prop-types';
import { BarChart as BChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const BarChart = ({ data }) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  

  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    const getPath = `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;

    return <path d={getPath} stroke="none" fill={fill} />;
  };

  return (
    <div className='mx-auto container flex justify-center items-center my-16'>
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
        <XAxis dataKey="bookName"/> 
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BChart>
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      bookName: PropTypes.string.isRequired,
      totalPages: PropTypes.number.isRequired,
    })
  ).isRequired,
  fill: PropTypes.string.isRequired, 
  x: PropTypes.number.isRequired, 
  y: PropTypes.number.isRequired, 
  width: PropTypes.number.isRequired, 
  height: PropTypes.number.isRequired
};

export default BarChart;
