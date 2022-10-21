import "./News.css";
import news1 from "./img/news1.png";
import news2 from "./img/news2.png";
import news3 from "./img/news3.png";
import news4 from "./img/news4.png";
import NewsCard from "./NewsCard/NewsCard";

const listOfNews = [
    {
        title: "Apple News користуються уже 125 мільйонів користувачів",
        img: news1
    },
    {
        title: "Фішки IOS 15 про які ви не знали",
        img: news2
    },
    {
        title: "Що нового у лінійці IPhone 13?",
        img: news3
    },
    {
        title: "IPad mini 6. Крутий? Так!?",
        img: news4
    },

]

const News = () => {
    return(
        <section className="news">
            <div className="news_content">
                <span className="news_arrow-left">
                    <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857865C15.3611 0.076816 14.0948 0.0768159 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z" fill="white"/>
                    </svg>
                </span>

                <div className="wrapper">

                    <h2 className="main_title">
                        Останні новини із світу техніки Apple
                    </h2>

                    <div className="news_posts">
                        {
                            listOfNews.map(item => {
                                return (
                                    <NewsCard title={item.title} img={item.img}/>
                                )
                            })
                        }
                    </div>

                    <div className="news_circles">
                        <svg width="570" height="25" viewBox="0 0 570 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="60" cy="13" r="10" fill="white"/>
                            <circle cx="110" cy="13" r="10" fill="white"/>
                            <circle cx="160" cy="13" r="10" fill="white"/>
                            <circle cx="10" cy="13" r="10" fill="white"/>
                            <circle cx="210" cy="13" r="10" fill="white"/>
                            <circle cx="260.5" cy="12.5" r="12.5" fill="#FFD325"/>
                            <circle cx="360" cy="13" r="10" fill="white"/>
                            <circle cx="410" cy="13" r="10" fill="white"/>
                            <circle cx="460" cy="13" r="10" fill="white"/>
                            <circle cx="310" cy="13" r="10" fill="white"/>
                            <circle cx="510" cy="13" r="10" fill="white"/>
                            <circle cx="560" cy="13" r="10" fill="white"/>
                        </svg>

                    </div>
                </div>

                <span className="news_arrow-right">
                    <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="white"/>
                    </svg>
                </span>

            </div>
        </section>
    )
}

export default News;