import '../App.css'
import BottomComponent from './bottomcomponent'
import ButtonComponent from './buttoncomponent'
import ImageBlock from "./imageblock"
function CardComponent() {
    return (
        <div className="main">
            <ImageBlock />
            <BottomComponent />
            <ButtonComponent />
        </div>
    )
}
export default CardComponent