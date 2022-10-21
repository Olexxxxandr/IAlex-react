import "../Accessories.css"

const AccessorieCard = (props) => {
    return(
        <div className="accessories_acc">
            <div className="acc_pic">
                <img alt="AirPods" src={props.img}/>
            </div>
            <h3 className="acc_title">{props.title}</h3>
        </div>
    )
}

export default AccessorieCard;