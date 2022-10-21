import Intro from "./Intro/Intro";
import Categories from "./Categories/Categories";
import Sales from "./Sales/Sales";
import Accessories from "./Accessories/Accessories";
import News from "./News/News";
import Form from "./Form/Form";

const Landing = () => {
    return(
        <div>
            <Intro/>
            <Categories/>
            <Sales/>
            <Accessories/>
            <News/>
            <Form/>
        </div>
    )
}

export default Landing;