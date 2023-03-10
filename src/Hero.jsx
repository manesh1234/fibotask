import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.left_side}>
                <div>
                    <img src="/hero.png" />
                    <h3>Fitness Made Easy</h3>
                    <p>FiBO helps you track your fitness goals, and manage your gyms, clients and branches in a one stop solution, saving you time and money!</p>
                </div>
            </div>
            <div className={styles.right_side}>
                <div>
                    <img src="/logo.png" className={styles.logo} />
                    <h3>Login to your Account</h3>
                    <p>Your Own Digital Campaign</p>
                    <div className={styles.LoginForm}>
                        <div>
                            <span>+91</span>
                            <input type="text" placeholder="mobile number" />
                        </div>
                        <button>Login to your account</button>
                    </div>
                    <hr />
                    <div className={styles.google_btn}>
                        <img src="/google.png" alt="" />
                        <span>Login With Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;