
export default function ImproveSkills() {
    const list = [
        "Learn new receipe",
"Experiment with food",
"Write your own receipes",
"Know nutrition facts",
"Get cooking tips",
"Ger ranked",
    ]
    return(
        <div className="section improve-skills">
            <div className="col img"> 
            <img src="./img/gallery/img_10.jpg" alt="" /> </div>

            <div className="col typography">          
        <h1 className="title"> Improve your Culinary Slills </h1>
        {list.map((item, index) =>(
            <p className="skill-item" key={index}> {item} </p>
        ))}
                <button className="btn"> Signup Now </button>
            </div>
        </div>
    )
}