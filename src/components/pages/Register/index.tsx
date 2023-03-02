import { Button } from "../../Button";
import { Input } from "../../Input";
import { NavBarMenu } from "../../NavBarMenu";
import { Title } from "../../Title";

export function Register() {
    return (
        <>
            <header>
                <Title text='Criar Conta' />
            </header>
            <main>
                <div className='form-space'>
                    <form className='form'>
                        <Input type='text' placeholder='Nome de Usuário ' />
                        <Input type='email' placeholder='E-mail' />
                        <Input type='password' placeholder='Senha' />
                        <Input type='password' placeholder='Confirmar Senha ' />
                        <div className="action-buttons">
                            <Button text="Criar conta" type='primary' />
                        </div>
                    </form>
                </div>
                <NavBarMenu/>

            </main >



        </>


    )


}