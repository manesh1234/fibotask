import { useState } from "react";
import AuthContext from "./utils/AuthContext";
import useScreenWidth from "./utils/useScreenWidth";
import Login from "./components/Login";
import LoginMobile from "./components/LoginMobile";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const screenWidth = useScreenWidth();
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [text, setText] = useState('');
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            setIsLoggedIn: setIsLoggedIn,
            text: text,
            setText: setText,
            loginHandler: (text) => {
                if (text === '9999999999') {
                    setIsLoggedIn(true);
                    toast.success("Welcome to Dashboard, Login Successfull", {
                        className: "custom-toast",
                        draggable: true,
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    return;
                }
                toast.error("Enter 999999999 to Login", {
                    className: "custom-toast",
                    draggable: true,
                    position: toast.POSITION.TOP_RIGHT,
                });
                setText('');
            }
        }}>
            <ToastContainer theme="dark" draggable={false} transition={Zoom} autoClose={8000} />
            {!isLoggedIn && screenWidth > 780 && <Login />}
            {!isLoggedIn && screenWidth <= 780 && <LoginMobile />}
            {isLoggedIn && <Dashboard />}
        </AuthContext.Provider>
    );
}

export default App;
