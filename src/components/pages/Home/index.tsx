import { AddressBook, ImageSquare } from "phosphor-react";
import { Button } from "../../Button";
import { Menu } from "../../menu";
import { MenuItem } from "../../MenuItem";
import { NavBarMenu } from "../../NavBarMenu";
import { Title } from "../../Title";
import{Link} from 'react-router-dom'

export function Home() {
    return (
        <>
            <header>
                <Title text='Bem vindo' />
            </header>
            <main>
                <Menu>
                    <Link to='/gallery'> 
                    <MenuItem icon={<ImageSquare  size={24} />} text="Galeria" />
                    </Link>
                    <Link to='/Contato'> 
                    <MenuItem icon={<AddressBook size={24} />} text="Agenda" />
                    </Link>
                </Menu>
            </main >
            <footer>
                <NavBarMenu />
            </footer>
        </>
    )
}