import React from "react";

export default function Card({ data }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
                <div key={item.id} className="border rounded-lg shadow-lg p-4 bg-[#EBE5C2] text-[#504B38]">
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-bold mt-4">{item.title}</h2>
                    <p className="text-gray-700 mt-2">{item.body}</p>
                </div>
                )
            )
        }
        </div>
    );
};