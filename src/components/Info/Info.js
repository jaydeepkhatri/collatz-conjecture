const Info = ({hailStoneNumbers}) => {
    return (
        <>
            <div className="md:mx-auto w-full max-w-6xl pt-20 text-left">
                <div className="bg-gray-100 p-4">
                    <p>Hailstone Numbers : {hailStoneNumbers.map((number, i) => (<span key={i}>{number}, </span>))}</p>
                    <p className="mt-2">Total Hailstone numbers: {hailStoneNumbers.length}</p>
                </div>
            </div>
        </>
    )
}

export default Info;