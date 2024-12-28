import { useLocation } from "react-router-dom"


export const About = () => {
    const location = useLocation();
    console.log(location, "esrurbjhrdkcnxe")

    return (
        <div className="text-black">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eaque modi. In sequi aliquam ad cumque omnis harum eius doloremque? Blanditiis ea unde esse reiciendis, temporibus distinctio cupiditate eum.</p>
        </div>
    )
}
