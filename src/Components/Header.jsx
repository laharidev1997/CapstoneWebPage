import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-md bg-faded justify-content-center">
    <a href="/" class="navbar-brand d-flex w-50 mr-auto">Aventur Travel</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
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
                <a class="nav-link" href="#">Team</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Meetings</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Deliverables</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Weekly Reports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">References</a>
            </li>
        </ul>
    </div>
</nav>

    )
}
export default Header