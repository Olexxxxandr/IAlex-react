import "./About.css"

const About = () => {
    return(
        <section className="about">
            <div className="wrapper">
                <div className="about_container">
                    <h1 className="about_title">
                        <span className="about_title-setting">I</span>Alex - офіційний інтернет-магазин з продажу
                        виключно нової техніки компанії Apple
                    </h1>

                    <p className="about_subtitle">
                        <span className="about_subtitle-top">Ми з'явилися на ринку тільки на початку весни 2021 року але вже встигли досягти успіху у продажах. Ми практично можемо </span>
                        <span className="about_subtitle-mid">практично можемо конкурувати з нашими конкурентами, але як показує практика, для конкуренції потрібен досвід, якого у нас </span>
                        <span className="about_subtitle-bottom">досвід, якого у нас ще достатньо нема. Але з певним часом, з приходом досвіду ми зможемо реалізувати наш потенціал.</span>
                        <span className="about_subtitle-hidden">потенціал. Давайте познайомимось з нашою командою. Це менеджер Саша - професіонал із знаннями техніки
                                та ринку. Він може підібрати вам пристрій у найкоротші сроки за найдоступнішими цінами. Також у команді є менеджер Андрій, який відповідає
                                за наявний у інтернет-магазині товар. На телефонні дзвінки відповідає наша чарівна Дарина, яка цікавиться у клієнтів про їхні побажання і переводить
                                дзвінок до наших менеджерів. Звісно, команда у нас більша, але це вже наступна історія...
                            </span>
                    </p>

                    <div className="about_link-div">
                        <button className="about_link">Показати все</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;