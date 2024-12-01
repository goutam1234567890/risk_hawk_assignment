import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Naming from '../Naming'
import { CiLocationOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaLink } from "react-icons/fa6";
import { TbSend2 } from "react-icons/tb";
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <Sidebar />
                <div>
                    <Header />
                    <Naming />
                    <div className='containers'>
                        <div className='personal-details-container'>
                            <div className='personal-container1'>
                                <div className='profile-info'>
                                    <p className='cb-name'>CB</p>
                                </div>
                                <div className='personal-container2'>
                                    <h1 className='personal-heading'>Hannibal Smith</h1>
                                    <div className='personal-container3'>
                                        <CiLocationOn />
                                        <p className='personal-para'>1 Market Street San Francisco, CA 94105</p>
                                    </div>
                                </div>
                            </div>
                            <div className='details-container1'>
                                <div className='details-container'>
                                    <p className='details-name'>Customer ID</p>
                                    <div className='details-cont'>
                                        <p className='name'>12345</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <hr className='horizontal-line' />
                                <div className='details-container'>
                                    <p className='details-name'>Email Address</p>
                                    <div className='details-cont'>
                                        <p className='name'>rachel@sample.com</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <hr className='horizontal-line' />
                                <div className='details-container'>
                                    <p className='details-name'>Phone Number</p>
                                    <div className='details-cont'>
                                        <p className='name'>8051298905</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <button className='button'><CiCirclePlus /> Add</button>
                            </div>
                            <div className='details-container2'>
                                <div className='details-container'>
                                    <p className='details-name'>Loyalty Tier</p>
                                    <div className='details-cont'>
                                        <p className='name'>Silver</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <hr className='horizontal-line' />
                                <div className='details-container'>
                                    <p className='details-name'>Segment</p>
                                    <div className='details-cont'>
                                        <p className='name'>Sleepy Customer</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <button className='button'><CiCirclePlus /> Add</button>
                            </div>
                            <div className='details-container2'>
                                <div className='details-container'>
                                    <p className='details-name'>Lifetime Value</p>
                                    <div className='details-cont'>
                                        <p className='name'>$ 1M</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <hr className='horizontal-line' />
                                <div className='details-container'>
                                    <p className='details-name'>Propensity to Purchase</p>
                                    <div className='details-cont'>
                                        <p className='name'>75%</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <button className='button'><CiCirclePlus /> Add</button>
                            </div>
                            <div className='details-container3'>
                                <div className='details-container'>
                                    <p className='details-name'>Engagement Score</p>
                                    <div className='details-cont'>
                                        <p className='name'>80%</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <button className='button'><CiCirclePlus /> Add</button>
                            </div>
                            <div className='button-container'>
                                <button className='button1'><HiOutlineUserPlus className='button-icon' /> Assign other Agent</button>
                                <button className='button2'>Add New Widget</button>
                            </div>
                        </div>
                        <div className='second-container'>
                            <div className='conversation-container'>
                                <p className='conversation'>Conversation</p>
                                <div className='update-container'>
                                    <p className='address'>Address Update</p>
                                    <RxCross2 />
                                </div>
                                <div className='update-container'>
                                    <p className='address'>Fee Reversal</p>
                                    <RxCross2 />
                                </div>
                                <button className='button-escalate'>Escalate</button>
                            </div>
                            <div className="chat-container">
                                <div className="chat-header">
                                    <div className="active">Conversation</div>
                                    <div>Attachment</div>
                                </div>

                                <div className="chat-body">
                                    <div className="message-container">
                                        <div className="avatar">CB</div>
                                        <div className="message">
                                            <div className="message-header">
                                                Rachel Adams <span>9:08 PM · Received By WhatsApp ✓</span>
                                            </div>
                                            <div className="message-body">
                                                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
                                            </div>
                                            <div className="message-options">...</div>
                                        </div>
                                    </div>
                                    <div className="message-container">
                                        <div className="avatar">HK</div>
                                        <div className="message">
                                            <div className="message-header">
                                                You <span>27 Jul, 2024 9:08 PM · Sent By WhatsApp ✓</span>
                                            </div>
                                            <div className="message-body">
                                                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
                                            </div>
                                            <div className="message-options">...</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-footer">
                                    <div>
                                        <input type="checkbox" id="sms" />
                                        <label htmlFor="sms">SMS</label>
                                        <input type="checkbox" id="whatsapp" />
                                        <label htmlFor="whatsapp">WhatsApp</label>
                                        <input type="checkbox" id="email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className='chat1'>
                                        <input type="text" placeholder="Type a message..." />
                                        <div className='link'><FaLink className='link-ele' /></div>
                                        <button className='button-send'><TbSend2 /> Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='third-container'>
                            <div className="chat-app">
                                {/* Header Section */}
                                <header className="header">
                                    <h2>Ask Catura</h2>
                                    <div className="header-actions">
                                        <button className="dropdown">WhatsApp ▼</button>
                                        <button className="greetings-btn">Greetings ▼</button>
                                    </div>
                                </header>

                                {/* Greeting Template Section */}
                                <div className="template-container">
                                    <div className="template">
                                        <h3 className="template-title">Greeting Template</h3>
                                        <p className="template-content">
                                            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio...
                                        </p>
                                        <div className="template-buttons">
                                            <button className="copy-btn">Copy to Send</button>
                                            <button className="preview-btn">Preview</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Input Section */}
                                <div className="message-box">
                                    <input
                                        type="text"
                                        className="message-input"
                                        placeholder="Type a message..."
                                    />
                                    <button className="send-btn"><TbSend2 /></button>
                                </div>
                            </div>
                            <div className='launcher'>
                                <h1 className='heading-launcher'>Action Launcher</h1>
                                <hr />
                                <div className='input-container'>
                                <input type="search" className='input-ele' placeholder='Search actions..' />
                                </div>
                                <div className='elements'>
                                    <p className='button-type1'><CiCirclePlus /> Add Action</p>
                                    <p className='button-type'>Fee Reversal</p>
                                    <p className='button-type'>Retail Onboarding</p>
                                    <p className='button-type'>Address Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
