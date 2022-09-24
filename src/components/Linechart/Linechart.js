import {Line} from "react-chartjs-2"; 
import Chart from 'chart.js/auto';

const Linechart = ({chartData}) => {
    return (
        <>
            <div className="md:mx-auto w-full max-w-6xl">
                <Line data={chartData} />
            </div>
        </>
        
    )
}

export default Linechart;