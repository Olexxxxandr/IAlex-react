import "./IPhones.css"
import IPhoneCard from "./IPhoneCard/IPhoneCard";
import React, {useContext, useState} from "react";
import AppContext from "../../context";



const IPhones = () => {

    const [searchValue, setSearchValue] = useState('');
    const[cartItems, setCartItems] = useState([])

    const onChangeValue = (event) => {
        setSearchValue(event.target.value);
    }

    const {IPhoneList} = React.useContext(AppContext);

    return(


        <div className="wrapper">
            <div className="iphones">
                <div className="iphones_info">
                    <h2 className="iphones_title">
                        {searchValue ? `Пошук за запитом ${searchValue}` : "Всі Apple IPhone"}
                    </h2>
                    <div className="iphones_seacrh-block">
                        <svg className="iphones_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6589 7.04847C12.6589 10.4189 10.0195 13.0969 6.82947 13.0969C3.63946 13.0969 1 10.4189 1 7.04847C1 3.67801 3.63946 1 6.82947 1C10.0195 1 12.6589 3.67801 12.6589 7.04847Z" stroke="white" stroke-width="2"/>
                            <path d="M10.9595 11.7144L11.5942 10.9958L18.2778 17.5002C18.4675 17.6848 18.4793 17.9954 18.304 18.1938C18.1287 18.3922 17.8328 18.4034 17.6431 18.2188L10.9595 11.7144Z" stroke="white" stroke-width="1.47937"/>
                        </svg>
                        <input value={searchValue} onChange={onChangeValue} className="iphones_search" type="text" placeholder="Пошук..."/>
                        {searchValue && <p className="clicked" onClick={() => setSearchValue("")}>x</p>}
                    </div>
                </div>

                <div className="iphones_cards">

                    {IPhoneList
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(item => {
                        return(
                            <IPhoneCard price={item.price} img={item.img} title={item.title} />
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default IPhones;