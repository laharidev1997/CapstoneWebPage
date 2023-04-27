import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-md bg-faded justify-content-center">
            <a href="/" class="navbar-brand d-flex w-50 mr-auto">Aventur Travel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul class="nav navbar-nav ml-auto w-100 justify-content-around">
                    <li class="nav-item">
                        <NavLink to="/" className="nav-link active">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/mentor" className="nav-link active">Mentor</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/team" className="nav-link active">Team</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/meetings" className="nav-link active">Meetings</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/weekly" className="nav-link active">Weekly Reports</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/references" className="nav-link active">References</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Header