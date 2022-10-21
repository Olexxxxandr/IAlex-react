import "../Sales.css"

const SalesCard = (props) => {
    return(
        <div className="sales_data-sale">
            <div className="sales_data-pic">
                <img src={props.img} alt="IPhoneSale1"/>
            </div>
            <h4 className="sales_data-name">{props.title}</h4>
            <div className="sale_post">
                <p className="sales_data-firstPrice">{props.prevPrice} грн</p>
                <p className="sales_data-secondPrice">{props.price} грн</p>
            </div>
            <a href="#!" className="sales_data-link">Купити</a>
        </div>
    )
}

export default SalesCard;