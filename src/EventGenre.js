
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

import React, {useEffect, useState} from 'react';


const EventGenre = ({events}) => {



    useEffect(() => { setData(() => getData()); }, [events]);
    const [data, setData] = useState([]);

getData = () => {
   

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const data = genres.map((genre)=>{

     const   value =  events.filter((events)=> events.summary.split(" ").includes(genre) ).length

        return { name: genre, value };
    })


    return data;
};






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