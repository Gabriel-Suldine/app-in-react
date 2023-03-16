import { AddressBook, ImageSquare } from "phosphor-react";
import { Button } from "../../Button";
import { Menu } from "../../menu";
import { MenuItem } from "../../MenuItem";
import { NavBarMenu } from "../../NavBarMenu";
import { Title } from "../../Title";

export function Home() {
    return (
        <>
            <header>
                <Title text='Bem vindo' />
            </header>
            <main>
                <Menu>
                    <MenuItem icon={<AddressBook size={24} />} text="Agenda" />
                    <MenuItem icon={<ImageSquare  size={24} />} text="Galeria" />
                </Menu>
            </main >
            <footer>
                <NavBarMenu />
            </footer>
        </>
    )
}