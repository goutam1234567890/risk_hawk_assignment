import './index.css'
import { IoIosArrowForward } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";

const Naming = () => {
    return (
        <div className='Naming-container'>
            <div className='Naming-person'>
                <span className="name-logo">CB</span>
                <p className="name-person">Cheyenne Bergson</p>
            </div>
            <div className='Naming-person'>
                <span className="name-logo">CB</span>
                <p className="name-person">Jonathan Higgins</p>
            </div>
            <div className='Naming-person2'>
                <span className="name-logo">CB</span>
                <p className="name-person1">Hannibal Smi..</p>
            </div>
            <div className='Naming-person'>
                <span className="name-logo">CB</span>
                <p className="name-person">Capt. Trunk</p>
            </div>
            <div className='Naming-person1'>
                <FiMessageCircle className='message-logo' />
                <p className='name-person2'>Messaging</p>
                <IoIosArrowForward className='file-arrow' />
            </div>
        </div>
    )
}

export default Naming
