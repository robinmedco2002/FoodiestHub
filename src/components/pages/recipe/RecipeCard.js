import { Link } from "react-router-dom"

import CustomImage from "../../CustomImage"
export default function RecipeCard({recipe}){
    return(
        <div className="recipe-card">
           <CustomImage imgSrc={recipe.image} pt="65%" />
           <div className="recipe-card-info">
            <img className="author-img" src={recipe.authorImg} alt="" />
            <p className="recipe-title" >{recipe.title} </p>
            <p className="recipe-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <Link to="#" className="view-btn" > VIEW RECIPE </Link>
           </div>
           
        </div>
    )
}