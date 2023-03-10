import style from './Hero_Mobile.module.css';

const Hero_Mobile = () => {
    return (
        <div className={style.hero}>
            <div className={style.container}>
                <h2>Login</h2>
                <div className={style.input_box}>
                    <span>+91</span>
                    <input type="text" placeholder="mobile number" />
                </div>
                <hr />
                <div className={style.google_btn}>
                    <img src="/google.png" alt="" />
                    <span>Login With Google</span>
                </div>
                <p>Already have an account? <span >Sign In</span></p>
                <p className={style.terms}>By continuing, I agree to the <u>Terms of Service</u> and <u>Privacy Policy</u></p>
                <button>Continue</button>
                <hr />
            </div>
        </div>
    );
}

export default Hero_Mobile;