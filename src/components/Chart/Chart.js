import { useState } from "react";

const Chart = () => {

    const [numbers, setNumbers] = useState([]);
    const [searchNumber, setSearchNumber] = useState(1);
    let timer = 0;
    
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
    
    let countnumbers = [];
    
    function collatz(num) {
        // console.log(num)
        countnumbers.push(num);
        if (num <= 2) {
            let newDate = new Date();
            console.log(`${newDate.getTime() - timer}ms`);
            setNumbers(countnumbers);
            return true;
        } else{
            return checknumber(num);
        }
    }


    return (
        <>
            <section className="py-12 flex justify-center">
                <div className="md:container md:mx-auto flex flex-row items-center justify-center">
                    <input type="number" className="form-control rounded px-4 py-2 
                    text-gray-700 bg-white bg-clip-padding border-2
                    focus:border-gray-500 focus:outline-none" onChange={(e) => setSearchNumber(e.target.value)} placeholder="Enter a Number" />
                    <button type="button" onClick={() => {let date = new Date(); timer = date.getTime();collatz(searchNumber)}} className="inline-block rounded border-2 text-white bg-blue-600 border-blue-600 px-4 py-2 ml-2">Generate Chart!</button>
                </div>
            </section>
            
            <section className="py-12 flex justify-center">
                {numbers.map((number) => (
                    <>
                        {number} <br/> 
                    </>
                    
                ))}
            </section>
        </>
        
    )
}

export default Chart;