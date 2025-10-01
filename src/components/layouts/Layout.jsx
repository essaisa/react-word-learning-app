export default function Layout(props){
    const { children } =  props

    console.log(props)
    return (
        <>
            <header>
                <h1 className="text-gradient">Ball Knowledge</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </>
    )
}