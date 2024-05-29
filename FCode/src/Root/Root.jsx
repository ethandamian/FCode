import { Outlet } from "react-router-dom"
import Navigation from './Navigation/Navigation.jsx'
import Footer from "./Footer/Footer.jsx";
import "./Root.css"

export default function Root() {
    return (
        <>
            <Navigation />
            <main className="main-space">
                <Outlet />
            </main>
            <Footer/> 
        </>
    )
}