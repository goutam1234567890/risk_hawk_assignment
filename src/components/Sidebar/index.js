import './index.css'
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { TbFileCheck } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { LuBox } from "react-icons/lu";
import { CiCircleAlert } from "react-icons/ci";
import { LuWrench } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { CiCircleChevRight } from "react-icons/ci";
import { Component } from 'react'


class Sidebar extends Component {
    state = { showSideBar: true }
    toggleArrow = () => {
        this.setState(PrevState => ({ showSideBar: !PrevState.showSideBar }))
    }
    render() {
        const { showSideBar } = this.state
        return (
            showSideBar ? (
                <div className="sidebar-container" >
                    <div className="Logo">
                        <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733030891/riskhawk-logo_1_az7hto.png" alt="logo" />
                    </div>
                    <div>
                        <div className='file-container'>
                            <AiOutlineFileSearch className='file-logo' />
                            <p className='file-name'>Internal Audit</p>
                            <IoIosArrowForward className='file-arrow' />
                        </div>
                        <div className='file-container'>
                            <TbFileCheck className='file-logo' />
                            <p className='file-name'>UAT Testing</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <FaLink className='file-logo' />
                            <p className='file-name'>Intract</p>
                            <IoIosArrowForward className='file-arrow' />
                        </div>
                        <div className='file-container'>
                            <FaUsers className='file-logo' />
                            <p className='file-name'>Queue</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <LiaSitemapSolid className='file-logo' />
                            <p className='file-name'>Workflow</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <CiUser className='file-logo' />
                            <p className='file-name'>Admin</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <LuBox className='file-logo' />
                            <p className='file-name'>Asset</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <FaUsers className='file-logo' />
                            <p className='file-name'>Parent</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <CiCircleAlert className='file-logo' />
                            <p className='file-name'>Option One</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <CiCircleAlert className='file-logo' />
                            <p className='file-name'>Option Two</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <LuWrench className='file-logo' />
                            <p className='file-name'>All Accessories</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                        <div className='file-container'>
                            <AiOutlineFileSearch className='file-logo' />
                            <p className='file-name'>Internal Audit</p>
                            <IoIosArrowForward className='file-arrow' />
                        </div>
                        <div className='file-container'>
                            <CiStar className='file-logo' />
                            <p className='file-name'>decorating</p>
                            <IoIosArrowForward className='file-arrow' />
                        </div>
                        <div className='file-container'>
                            <CiGift className='file-logo' />
                            <p className='file-name'>Presenting</p>
                            <IoIosArrowForward className='file-arrow1' />
                        </div>
                    </div>
                    <div >
                        <FaCircleChevronLeft className={this.toggleArrow ? 'arrow' : 'rightArrow'} onClick={this.toggleArrow} />
                    </div>

                </div>
            ) :
                <div className='div-container'><CiCircleChevRight className={this.toggleArrow ? 'rightArrow' : 'arrow'} onClick={this.toggleArrow} /></div>
        )
    }
}

export default Sidebar
