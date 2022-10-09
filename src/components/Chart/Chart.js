import { useEffect, useState } from "react";
import { Linechart, Info }  from "../index";

const Chart = () => {

    const [hailNumbers, setHailStoneNumbers] = useState([]);
    const [searchNumber, setSearchNumber] = useState(69);
    const [chartData, setChartData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    
    function checknumber (num) {
        if(num%2 === 1) {
            num = num * 3;
            num++;
            return collatz(num);
        } else {
            num = num / 2;
            return collatz(num);
        }
    }
    
    let hailStoneNumbers = [];

    function collatz(num) {
        //console.log(num)
        hailStoneNumbers.push(num);
        if (num <= 1) {
            setHailStoneNumbers(hailStoneNumbers);
            setChartData({
                labels: hailStoneNumbers.map((number, i) => i+1),
                datasets: [{
                    label: "Hailstone Number",
                    data: hailStoneNumbers,
                    backgroundColor: "#000"
                }]
            })
            setIsLoading(false);
        } else{
            checknumber(num);
        }
    }

    useEffect(() => {
        collatz(searchNumber);
    }, [searchNumber])
    


    return (
        <>
            <section className="py-12 flex justify-center">
                <div className="md:container md:mx-auto md:flex-row flex flex-col items-center justify-center">
                    <input type="number" id="number" className="form-control rounded px-4 py-2 
                    text-gray-700 bg-white bg-clip-padding border-2
                    focus:border-gray-500 focus:outline-none" onChange={(e) => setSearchNumber(e.target.value)} value={searchNumber} placeholder="Enter a Number" />
                    <button type="button" title="Click to generate Random Number" onClick={(e) => setSearchNumber(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))} className="inline-block rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-800 hover:border-blue-800 duration-100 px-4 py-2 mt-2 md:mt-0 md:ml-2">Generate Random!</button>
                </div>
            </section>


            {isLoading ? null :<section className="py-8 flex flex-col items-center justify-center">
                <Linechart chartData={chartData} />
                <Info hailStoneNumbers={hailNumbers} />
            </section> }
            
            
        </>
        
    )
}

export default Chart;