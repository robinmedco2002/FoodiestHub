
import CustomImage from "./CustomImage"

const image = [
    "./img/gallery/img_1.jpg",
    "./img/gallery/img_2.jpg",
    "./img/gallery/img_3.jpg",
    "./img/gallery/img_4.jpg",
    "./img/gallery/img_5.jpg",
    "./img/gallery/img_6.jpg",
    "./img/gallery/img_7.jpg",
    "./img/gallery/img_8.jpg",
    "./img/gallery/img_9.jpg",
]
export default function HeroSection(){
    return (
       <div className="section hero">
       <div className="col typography">
        <h1 className="title"> What are We about </h1>
        <p className="info"> FoodiesHub is a place where you can place your soul and tummy with delicious food recepies of all cusines. And our service is absolutely free. So start exploring now. </p>
       <button className="btn"> explore now </button>
       </div>
       <div className="col gallery">
       { image.map((src, index) => (
        <CustomImage key={index} imgSrc={src} pt={"90%"}/>
       ))}

       </div>
       
       </div> 
    )
}

