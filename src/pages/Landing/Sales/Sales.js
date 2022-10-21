import "./Sales.css";
import iphone13 from "./img/Iphone_13_Pro_Sale.png";
import iphoneSe from "./img/IPhone_SE_Photo.png";
import SalesCard from "./SalesCard/SalesCard";

const listOFSales = [
    {
        id: 1,
        img: iphone13,
        title: "IPhone 13 Pro 256GB (Silver)",
        prevPrice: 39999,
        price: 37999
    },
    {
        id: 2,
        img: iphoneSe,
        title: "IPhone SE 64GB (Black)",
        prevPrice: 14999,
        price: 10999
    }
]

const Sales = () => {

    return(
        <div className="wrapper">
            <section className="sales">
                <div className="sales_container">

                    <h2 className="main_title">
                        Акційні пропозиції
                    </h2>

                    <div className="sales_wrapper">

                        <div className="sales_arrow-left">
                            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857865C15.3611 0.0768161 14.0948 0.076816 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z" fill="white"/>
                            </svg>
                        </div>

                        <div className="sales_data">
                            {
                                listOFSales.map(item => {
                                    return(
                                        <SalesCard
                                            img={item.img}
                                            title={item.title}
                                            prevPrice={item.prevPrice}
                                            price={item.price}/>
                                    )
                                })
                            }
                        </div>

                        <div className="sales_arrow-right">
                            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="white"/>
                            </svg>

                        </div>

                    </div>

                    <svg className="sales_nav" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="13" r="10" fill="white"/>
                        <circle cx="48" cy="13" r="10" fill="white"/>
                        <circle cx="86" cy="13" r="10" fill="white"/>
                        <circle cx="124" cy="13" r="10" fill="white"/>
                        <circle cx="162" cy="13" r="10" fill="white"/>
                        <circle cx="202.5" cy="12.5" r="12.5" fill="#FFD325"/>
                        <circle cx="245.5" cy="12.5" r="12.5" fill="#FFD325"/>
                        <circle cx="286" cy="13" r="10" fill="white"/>
                        <circle cx="324" cy="13" r="10" fill="white"/>
                        <circle cx="362" cy="13" r="10" fill="white"/>
                        <circle cx="400" cy="13" r="10" fill="white"/>
                        <circle cx="438" cy="13" r="10" fill="white"/>
                        <circle cx="476" cy="13" r="10" fill="white"/>
                        <circle cx="514" cy="13" r="10" fill="white"/>
                        <circle cx="552" cy="13" r="10" fill="white"/>
                        <circle cx="590" cy="13" r="10" fill="white"/>
                    </svg>


                </div>
            </section>
        </div>
    )
}

export default Sales;