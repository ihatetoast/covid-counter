import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

 const Chart = (props)=> {
//   jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    // console.log(windowDimensions);
    return windowDimensions;
  }
  const {  width } = useWindowDimensions();
    return (
      <LineChart
        width={width < 900 ? 500 : 750}
        height={width < 900 ? 300 : 450}
        data={props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>
    );
  
}
export default Chart