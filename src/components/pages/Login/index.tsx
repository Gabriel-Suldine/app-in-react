import { Button } from "../../Button";
import { Input } from "../../Input";
import { NavBarMenu } from "../../NavBarMenu";
import { Title } from "../../Title";

export function Login() {
    return (
        <>
            <header>
                <Title text='Login' />
            </header>
            <main>
                <form className='form-space'>
                    <Input type='email' placeholder='E-mail' />
                    <Input type='password' placeholder='Senha' />
                    <div className="action-buttons">
                        <Button text="Entrar" type='primary' />
                    </div>
                </form>
                <NavBarMenu/>
            </main >



        </>
    )


}