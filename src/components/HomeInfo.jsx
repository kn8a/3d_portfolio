import { Link } from "react-router-dom"
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => {
    return(
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"></img>
        </Link>
    </div>
    )
    
}

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Andrew</span>
            <br/>
            A Software Developer
            </h1>
    ),
    2: (
        <InfoBox 
        text="Worked with many companies, learned many things..." 
        link="/about" 
        btnText="About me"
        />
    ),
    3: (
        <InfoBox 
        text="Built multiple great projects over the years" 
        link="/projects" 
        btnText="View projects"
        />
    ),
    4: (
        <InfoBox 
        text="I look forward to hearing from you about new opportunities" 
        link="/contact" 
        btnText="Get in touch"
        />
    )
}


const HomeInfo = ({currentStage, ...props}) => {
  return (
    <div>{renderContent[currentStage]}</div>
  )
}

export default HomeInfo