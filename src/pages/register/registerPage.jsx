
import s from "./register.module.css"
const RegisterPage = () => {

    // const [name,setName] = useState("")
    // const [mail,setMail] = useState("")
    // const [name,setName] = useState("")


    return (
        <>
        
            <div className={s.video}>
                    <video autoPlay muted loop id={s.bgVideo}>
                        <source src="/bg.mp4" type="video/mp4" />
                    </video>
                    <div className={s.content}>
                        <div className='container'>
                            <h1>Hurry up to sign up for the event</h1>
                            <p className="text-center fs-4 p-3">2/8/24 <br />
                            The registration ends in:</p>
                            <div className={s.times}>
                                <div className={s.item}><p className={s.num}>00</p><p>days</p></div>
                                <div className={s.item}><p className={s.num}>00</p><p>hours</p></div>
                                <div className={s.item}><p className={s.num}>00</p><p>minutes</p></div>
                                <div className={s.item}><p className={s.num}>00</p><p>seconds</p></div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className={s.register}>
                <div className="container-sm">

                    <form className={s.form}>



                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Name</label>
                        
                        <input type="text" id="form3Example3cg" className="form-control form-control-lg" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">Email</label>
                        <input type="email" id="form3Example4cg" className="form-control form-control-lg" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Telegram</label>
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                    </div>



                    <div className="d-flex justify-content-center">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block btn-lg bg-white px-5 py-3 text-bold fw-bold text-body">Register</button>
                    </div>


                    <p className="text-center  text-muted mt-5 mb-0">By clicking the button, you consent to the processing of personal data and agree to the privacy policy.</p>
                    </form>

                </div>
            </div>

        </>

    );
};

export default RegisterPage;