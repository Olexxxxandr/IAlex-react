import "../News.css"

const NewsCard = (props) => {
    return(
        <div className="news_posts-post">
            <div className="news_pic">
                <img src={props.img} alt="News1"/>
            </div>

            <h3 className="news_title">
                {props.title}
            </h3>

            <div className="news_link-item">
                <a href="#!" className="news_posts-link">Читати далі</a>
            </div>
        </div>
    )
}

export default NewsCard;