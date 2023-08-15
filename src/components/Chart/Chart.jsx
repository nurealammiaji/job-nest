import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Chart = () => {

    const data = [
        {
          name: 'A1',
          fullMark: 60,
          passMark: 30,
          myMark: 60,
        },
        {
          name: 'A2',
          fullMark: 60,
          passMark: 30,
          myMark: 50,
        },
        {
          name: 'A3',
          fullMark: 30,
          passMark: 15,
          myMark: 29,
        },
        {
          name: 'A4',
          fullMark: 30,
          passMark: 15,
          myMark: 27,
        },
        {
          name: 'A5',
          fullMark: 30,
          passMark: 15,
          myMark: 29,
        },
        {
          name: 'A6',
          fullMark: 30,
          passMark: 15,
          myMark: 29,
        },
        {
          name: 'A7',
          fullMark: 30,
          passMark: 15,
          myMark: 30,
        },
        {
          name: 'A8',
          fullMark: 30,
          passMark: 15,
          myMark: 30,
        }

      ];

    return (
        <div className='relative'>
            <div className='absolute'>
                <ComposedChart width={500} height={300} data={data}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="fullMark" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="myMark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="passMark" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Chart;