import { NavLink } from "react-router-dom";
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="Landing-Page">
            <h1>Landing Page</h1>
            <NavLink to="/homepage">
                <button>Home page</button>
            </NavLink>
        </div>
    )
}

export default LandingPage;
