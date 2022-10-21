import "./Accessories.css";
import airPods from "./img/AipRods.png";
import watch from "./img/Watch.png";
import airTag from "./img/AirTag.png";
import homePod from "./img/HomePod.png"
import AccessorieCard from "./AccessorieCard/AccessorieCard";

const listOfAcc = [
    {
        title: "AirPods",
        img: airPods
    },
    {
        title: "Watch",
        img: watch
    },
    {
        title: "AirTag",
        img: airTag
    },
    {
        title: "Aкустика",
        img: homePod
    },

]

const Accessories = () => {

    return (
        <div className="wrapper">
            <section className="accessories">
                <h2 className="main_title">
                    Підберіть аксесуари до свого
                    <span className="accessories_color-title"> I</span> пристрою
                </h2>

                <div className="accessories_wrapper">

                    {
                        listOfAcc.map(item => {
                            return(
                                <AccessorieCard title={item.title} img={item.img}/>
                            )
                        })
                    }

                </div>
            </section>
        </div>
    )
}

export default Accessories;