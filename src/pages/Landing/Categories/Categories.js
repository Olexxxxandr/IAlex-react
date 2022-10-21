import "./Categories.css"
import iphone from "./img/iphoneCategory.png";
import ipad from "./img/ipadCategory.png";
import mac from "./img/MacCategory.png";
import gadgets from "./img/gadgetsCategory.png";
import CategoryCard from "./CategoryCard/CategoryCard";

const listOfCategories = [
    {
        img: iphone,
        title: "IPhone",
        link: "/iphones"
    },
    {
        img: ipad,
        title: "IPad",
        link: "/"
    },
    {
        img: mac,
        title: "Mac",
        link: "/"
    },
    {
        img: gadgets,
        title: "Гаджети",
        link: "/"
    }
]

const Categories = () => {
    return(
        <div className="wrapper">
            <section className="categories">
                <h2 className="main_title">Категорія товарів</h2>

                <div className="categories_wrapper">

                    {
                        listOfCategories.map(item => {
                            return(
                                <CategoryCard title={item.title} img={item.img} link={item.link}/>
                            )
                        })
                    }


                </div>
            </section>
        </div>

    )
}

export default Categories;
