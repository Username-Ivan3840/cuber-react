import logo from "./../img/icons/site_logo.svg"
import Menu from './../components/dop-components/Menu';
function Header() {
    return (
        <header class="header">
            <div class="container">
                <a href="#" class="logo" >
                    <img src={logo} alt="картинка" class="logo-img" /> <span class="text-span">RobotBot</span>

                </a>
                <Menu />
            </div>
        </header>
    )
}
export default Header