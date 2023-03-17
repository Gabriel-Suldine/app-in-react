import './style.css'
type ListaAgendaProps = {
    children: React.ReactNode

}


export function ListaAgenda({children}: ListaAgendaProps) {
    return (
        <>         
            <main>              
                <div className='lista'>
                   {children}
                </div>
            </main >
        </>
    )




}

