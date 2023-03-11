import styles from './Login.module.css';
import app_logo from '../assets/app_logo.png';
import google from '../assets/google.png';
import hero from '../assets/hero.png';
import { useContext } from 'react';
import AuthContext from '../utils/AuthContext';

const Login = () => {
    const { text, setText, loginHandler } = useContext(AuthContext);
    return (
        <div className={styles.hero}>
            <div className={styles.left_side}>
                <div>
                    <img src={hero} alt='hero' />
                    <h3>Fitness Made Easy</h3>
                    <p>FiBO helps you track your fitness goals, and manage your gyms, clients and branches in a one stop solution, saving you time and money!</p>
                </div>
            </div>
            <div className={styles.right_side}>
                <div>
                    <img src={app_logo} className={styles.logo} alt='app_logo' />
                    <h3>Login to your Account</h3>
                    <p>Your Own Digital Campaign</p>
                    <div className={styles.LoginForm}>
                        <div>
                            <span>+91</span>
                            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="mobile number" />
                        </div>
                        <button onClick={() => loginHandler(text)}>Login to your account</button>
                    </div>
                    <hr />
                    <div className={styles.google_btn}>
                        <img src={google} alt="google" />
                        <span>Login With Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;