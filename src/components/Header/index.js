import { GoHome } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import './index.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="heading-element">Chat/Feed chat</h1>
            <div className="header-cont2">
                <div className="header-cont3">
                    <GoHome />
                    <p className="process">Process Owner HOD</p>
                </div>
                <div className="header-cont4">
                    <p className="header-admin">Admin</p>
                    <p className="header-name">Palak Bansal</p>
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733028650/Ellipse_3855_blbbti.png" alt="profile" className="profile-photo" />
                </div>
                <div className="cont">
                <CiSettings />
                </div>
                <div className="header-cont5">
                    <IoIosLogOut className="logout-icon"/>
                    <p className="logout">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Header
