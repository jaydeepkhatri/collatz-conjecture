import {Line} from "react-chartjs-2"; 
import Chart from 'chart.js/auto';

const Linechart = ({chartData}) => {
    return (
        <>
            <p>dfafdsf</p>
            {console.log(chartData)}
            <Line data={chartData} />
        </>
        
    )
}

export default Linechart;