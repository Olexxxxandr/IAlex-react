import "./Intro.css";
import iphone from "./img/introIphone.png"

const Intro = () => {
    return(
        <div className='wrapper'>
            <section className="intro">
                <div className="intro_pic">
                    <div className="intro_arrow-left">
                        <svg className="arrow-left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857865C15.3611 0.076816 14.0948 0.0768159 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z" fill="white"/>
                        </svg>
                    </div>

                    <img alt="Main_Photo" src={iphone}/>

                    <div className="intro_arrow-right">
                        <svg className="arrow-right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="white"/>
                        </svg>
                    </div>

                    <h1 className="intro_title">
                        Зустрічайте лінійку Iphone 13 Pro та 13 Pro Max
                    </h1>
                    <a href="#!" className="intro_link">
                        Дізнатися більше
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Intro;