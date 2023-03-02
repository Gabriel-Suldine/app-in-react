import { Button } from "../../Button";
import { NavBarMenu } from "../../NavBarMenu";
import { Title } from "../../Title";

export function Home() {
    return (
        <>
            <header>
                <Title text='Bem vindo' />
            </header>
            <main>
                <div className="action-buttons">
                    <Button text="Login" type='primary' />
                    <Button text="Cadastro" type='default' />
                </div>
            </main >
            <footer>
            <NavBarMenu/>

            </footer>
        </>
    )
}