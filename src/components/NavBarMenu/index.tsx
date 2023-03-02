import { House,User,Gear as Setting } from "phosphor-react";

export function NavBarMenu() {
    return (
        <>
            <nav className="navbar-menu">
                <a title="Início" href="#">
                    <House/>
                </a>
                <a title="Perfil" href="#">
                    <User/>
                </a>
                <a title="Configuracoes" href="#">
                    <Setting/>
                </a>
            </nav>




        </>




    )



}