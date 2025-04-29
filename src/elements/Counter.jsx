import React, { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count !== 0 && count % 10 === 0) {
            alert(`${count} is divisible by 10`)
        }
    }, [count]);

    return (
        <div className="flex flex-col items-center border rounded-lg shadow-lg bg-[#504B38] text-[#F8F3D9] mx-auto py-4">
            <h1 className="text-6xl font-bold mb-4">
                Counter
            </h1>
            <div className="text-6xl font-bold mb-4">
                {count}
            </div>
            <div className="flex space-x-4 mt-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-[#B9B28A] text-[#504B38] rounded-lg shadow-lg hover:bg-[#EBE5C2] transition duration-300"
                >
                    +
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-[#B9B28A] text-[#504B38] rounded-lg shadow-lg hover:bg-[#EBE5C2] transition duration-300"
                >
                    -
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="px-4 py-2 bg-[#B9B28A] text-[#504B38] rounded-lg shadow-lg hover:bg-[#EBE5C2] transition duration-300"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}