import "./Form.css"

const Form = () => {
    return(
        <section className="form">
            <div className="wrapper">
                <div className="form_container">
                    <h2 className="form_title">
                        Надайте нам свої дані для отримання персональних пропозицій та акцій
                    </h2>

                    <form action="" className="form_form">
                        <input className="form_input" type="text" name="user_name"
                               placeholder="Введіть своє ім'я"/><br/>
                        <input className="form_input" type="text" name="user_email "
                               placeholder="Введіть свій e-mail"/><br/>
                        <input className="form_input" type="text" name="user_phone"
                               placeholder="Введіть номер телефону"/><br/>

                        <div className="form_button-div">
                            <button className="form_button">Відправити</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;