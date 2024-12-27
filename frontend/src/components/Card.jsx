import PropTypes from "prop-types"

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
    icon: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,

    iconClass: PropTypes.string,
    titleClass: PropTypes.string,
    contentClass: PropTypes.string,
    className: PropTypes.string,
}