import CloseButton from './menu/CloseButton'
import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'

const Menu = () => {
    return (
        <div id="nav">
            <div id="navSlide" class="slide">
            </div>
            <div id="navBox">
                <CloseButton />
                <Navigation />
                <UpToDate />
            </div>
        </div>
    )
}

export default Menu
