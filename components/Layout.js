import Footer from "./Footer";
import Navbar from "./Navbar";
// import styles from "../styles/components/Layout.module.css"
import cookie from "js-cookie"
import { useEffect } from "react"
import { useAppContext } from "../context/AppContext"

export default function Layout({ children }) {
    const { state, dispatch } = useAppContext();

    const getUserStatus = async (username) => {
        const res = await fetch('/api/status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(username)
        });
        const data = await res.json();

        if (data.success) {
            // console.log("data user", data.user);
            dispatch({ type: "set_logged_in", value: true });
            dispatch({ type: "set_user", value: data.user });
        } else {
            console.log(data.message);
        }
    }

    useEffect(() => {
        const my_cookie = cookie.get();
        if (my_cookie?.token?.length > 0) {
            const token = my_cookie.token;
            const username = token.split("-")[0];
            // console.log("username", username);
            getUserStatus(username);
        }
        // eslint-disable-next-line
    }, [state.isLoggedIn]);

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}