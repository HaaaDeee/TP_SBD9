import React from "react";

export default function NavBar() {
    return (
        <nav className="App">
            <div className="fixed top-0 left-0 w-full bg-[#B9B28A] container mx-auto px-8 py-4 flex justify-between items-center">
                <div className="text-2xl text-[#504B38] font-bold">Naufal Hadi Rasikhin</div>
                <ul className="flex space-x-8">
                    <li><a href="/" className="text-[#504B38] hover:text-gray-900">Home</a></li>
                    <li><a href="/about" className="text-[#504B38] hover:text-gray-900">About</a></li>
                    <li><a href="/contact" className="text-[#504B38] hover:text-gray-900">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}