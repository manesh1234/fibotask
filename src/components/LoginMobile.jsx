import style from './LoginMobile.module.css';
import google from '../assets/google.png';
import { useContext } from 'react';
import AuthContext from '../utils/AuthContext';

const LoginMobile = () => {
    const { text, setText, loginHandler } = useContext(AuthContext);
    return (
        <div className={style.hero}>
            <div className={style.container}>
                <h2>Login</h2>
                <div className={style.input_box}>
                    <span>+91</span>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="mobile number" />
                </div>
                <hr />
                <div className={style.google_btn}>
                    <img src={google} alt="google" />
                    <span>Login With Google</span>
                </div>
                <p>Already have an account? <span >Sign In</span></p>
                <p className={style.terms}>By continuing, I agree to the <u>Terms of Service</u> and <u>Privacy Policy</u></p>
                <button onClick={() => loginHandler(text)}>Continue</button>
                <hr />
            </div>
        </div>
    );
}

export default LoginMobile;