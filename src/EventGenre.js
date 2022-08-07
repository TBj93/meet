import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({events}) => {

  

getData = () => {
   

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const data = genres.map((genre)=>{

        value = filter((summary)=> summary.includes(genre) ).length

        return { name: genre, value };
    })


    return data;
};


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={this.getData()}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={  ({name, percent}) =>   `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
           
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }


  export default EventGenre;