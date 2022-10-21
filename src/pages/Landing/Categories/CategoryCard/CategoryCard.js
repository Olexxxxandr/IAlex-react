import "../Categories.css";
import {Link} from "react-router-dom";

const CategoryCard = (props) => {
    return(
        <div className="categories_category category">
            <h3 className="category_title">
                {props.title}
            </h3>
            <img className='category_pic' alt="Iphone" src={props.img}/>
            <Link to={props.link} className="category_link">Перейти</Link>
        </div>
    )
}

export default CategoryCard;