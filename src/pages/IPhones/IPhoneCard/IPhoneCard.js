import "../IPhones.css"
import {Link} from "react-router-dom";

const IPhoneCard = (props) => {
    return(
        <div className="iphones_card">
            <img className="iphones_card-photo" src={props.img} alt="IPhone" />
            <h3 className="iphones_card-title">{props.title}</h3>
            <div className="iphones_card-info">
                <p className="iphones_card-price">{props.price} грн</p>
                <Link to="#/" className="iphones_card_link">
                    <svg width="30" height="30" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.25955L12.0422 6.39748L12.2749 6.86892L12.7951 6.94452L17.3616 7.60807L14.0573 10.829L13.6808 11.196L13.7697 11.7141L14.5497 16.2622L10.4653 14.1149L10 13.8702L9.53466 14.1149L5.45028 16.2622L6.23033 11.7141L6.3192 11.196L5.94273 10.829L2.6384 7.60807L7.20487 6.94452L7.72514 6.86892L7.95781 6.39748L10 2.25955Z" stroke="white" stroke-width="2"/>
                    </svg>
                </Link>
            </div>
        </div>

    )
}

export default IPhoneCard;