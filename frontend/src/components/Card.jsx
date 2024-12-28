import PropTypes from "prop-types"
import Calendar from "/calendar.png";
import FullStar from "/rating.png"
import HalfStar from "/rating-half.png"
import { NavBarItem } from "./navigaton/NavBar";

export const SmallCard = (props) => {
    return (
        <div className={`flex flex-col flex-wrap gap-4 p-8 border-b-2 border-non_photo_blue hover:border-white rounded-tl-3xl rounded-br-3xl bg-honeydew shadow-md ${props.className}`}>
            <div className={`${props.iconClass} w-full flex justify-center items-center h-[20%]`}>{props.icon}</div>

            <h2 className={`${props.titleClass} text-center text-xl font-semibold p-2`}>{props.title}</h2>

            <div className={`${props.contentClass} text-center`}>{props.content}</div>
            
        </div>
    )
}

SmallCard.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    content: PropTypes.string,

    iconClass: PropTypes.string,
    titleClass: PropTypes.string,
    contentClass: PropTypes.string,
    className: PropTypes.string,
}

export const CourseCard = (props) => {
    return (
    <div className={`w-full h-full rounded-xl overflow-hidden pb-6 bg-honeydew ${props.className}`}>
        <div className="w-full h-[50%] relative">
            <img className="w-full h-full transition-transform duration-300 transform hover:scale-110" src={props.image} alt="course" />
            <div className="absolute bottom-0 right-0 rounded-lg text-berkeley_blue border border-berkeley_blue bg-honeydew py-2 px-4">
                <p>{props.price}</p>
            </div>
        </div>
        <div className="px-4 py-3 flex flex-col flex-wrap gap-4">
            <div >
                <h2 className="text-xl font-bold py-2 text-berkeley_blue">{props.title}</h2>

                {props.description && (<p>{props.description}</p>)}

                <p className="text-gray-800 pt-1 pb-2">Teacher - <span className="text-berkeley_blue font-semibold text-base">{props.tutor}</span> </p>
            </div>
            <div className="flex gap-4 text-gray-800 flex-row flex-nowrap justify-between items-center w-full">
                <div>
                    <p className="flex gap-4 flex-row flex-nowrap justify-start items-center w-full"> 
                        <img className="h-[30px]" src={Calendar} alt="calendar" /> 
                        {props.duration}
                    </p>
                    <p className="flex items-center flex-row flex-nowrap w-full">
                        {props.rating.map((rating, index) => (
                        rating ? <img className="h-[30px]" key={index} src={FullStar} alt=" full rating" /> : 
                        <img className="h-[30px]" key={index} src={HalfStar} alt=" half rating" /> ))} 
                        {props.ratingCount}</p>
                </div>
                <div className="list-none">
                    <NavBarItem to='/#courses'
                        name='Enroll Now' 
                        linkClass={"text-honeydew bg-berkeley_blue rounded-lg p-3"} />
                </div>
            </div>
        </div>
    </div>
    )
}

CourseCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    tutor: PropTypes.string,
    price: PropTypes.string,
    duration: PropTypes.string,
    rating: PropTypes.array,
    ratingCount: PropTypes.number,
    className: PropTypes.string,
}