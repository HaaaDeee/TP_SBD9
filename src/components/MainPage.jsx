import React from "react";
import NavBar from "../elements/NavBar";
import Card from "../elements/Card";
import Counter from "../elements/Counter";

const response = {
    page: 1,
    results: [
        {
            userId: 1,
            id: 1,
            title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            image: "https://picsum.photos/500",
        },
    ],
};


export default function MainPage() {
    return (
        <div className="App">
            <NavBar />
            <div className="container mx-auto px-4 py-2 text-[#504B38] pt-20">
                <Card data={response.results} />
            </div>
            <div className="container px-4 py-2 pt-20">
                <Counter />
            </div>
        </div>
    )
}