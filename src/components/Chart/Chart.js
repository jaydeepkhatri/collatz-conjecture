import { useEffect, useState } from "react";
import { Linechart }  from "../index";

const Chart = () => {

    const [numbers, setNumbers] = useState([]);
    const [searchNumber, setSearchNumber] = useState(1000);
    const [chartData, setChartData] = useState({});

    
    function checknumber (num) {
        if(num%2 == 1) {
            num = num * 3;
            num++;
            return collatz(num);
        } else {
            num = num / 2;
            return collatz(num);
        }
    }
    
    let hailStoneNumbers = [];

    useEffect(() => {
        function collatz(num) {
            // console.log(num)
            hailStoneNumbers.push(num);
            if (num <= 2) {
                setNumbers(hailStoneNumbers);
                setChartData({
                    labels: hailStoneNumbers.map((number, i) => i),
                    datasets: [{
                        data: hailStoneNumbers,
                        backgroundColor: "#000"
                    }]
                })
                return true;
            } else{
                return checknumber(num);
            }
        }
    }, [searchNumber])
    


    return (
        <>
            <section className="py-12 flex justify-center">
                <div className="md:container md:mx-auto flex flex-row items-center justify-center">
                    <input type="number" className="form-control rounded px-4 py-2 
                    text-gray-700 bg-white bg-clip-padding border-2
                    focus:border-gray-500 focus:outline-none" onChange={(e) => setSearchNumber(e.target.value)} value={searchNumber} placeholder="Enter a Number" />
                    <button type="button" onClick={() => {collatz(searchNumber)}} className="inline-block rounded border-2 text-white bg-blue-600 border-blue-600 px-4 py-2 ml-2">Generate Chart!</button>
                </div>
            </section>


        
            <section className="py-12 flex flex-col items-center justify-center">
                <Linechart chartData={chartData} />
            </section>
            
        </>
        
    )
}

export default Chart;