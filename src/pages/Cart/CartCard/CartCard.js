import {Link} from "react-router-dom";

const CartCard = (props) => {
    return(
        <div className="iphones_card">
            <img className="iphones_card-photo" src={props.img} alt="IPhone" />
            <h3 className="iphones_card-title">{props.title}</h3>
            <div className="iphones_card-info">
                <p className="iphones_card-price">{props.price} грн</p>
                <Link to="#/" className="iphones_card_link">
                    Купити
                </Link>
            </div>
        </div>
    )
}

export default CartCard;