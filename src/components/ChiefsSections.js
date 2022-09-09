import ChiefCard from "./ChiefCard"

export default function ChiefsSection (){
    const chiefs = [
        {
            name: "Nicol Sharma",
            img : "../img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Maxicon"
        },
        {
            name: "Amit Kumar",
            img : "../img/top-chiefs/img_2.jpg",
            recipesCount: "25",
            cuisine: "Japanese"
        },
        {
            name: "Ashok Sharma",
            img : "../img/top-chiefs/img_3.jpg",
            recipesCount: "50",
            cuisine: "Italian"
        },
        {
            name: "Manoj Huda",
            img : "../img/top-chiefs/img_4.jpg",
            recipesCount: "87",
            cuisine: "American"
        },
        {
            name: "Nosy Sah",
            img : "../img/top-chiefs/img_5.jpg",
            recipesCount: "35",
            cuisine: "French"
        },
        {
            name: "Robin Chandra",
            img : "../img/top-chiefs/img_6.jpg",
            recipesCount: "12",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
        <h1 className="title">Our Top Chiefs</h1>
            <div className="top-cheif-container">
        
        {/* <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard /> */}
        {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
        </div>
        </div>
    )
}