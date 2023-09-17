import './Header.css'

function Header(props) {
    const title = 'Key React Concepts'
    const description = 'Selected key React concepts you should know about'

    return (
        <header>
            <img src={props.keyConceptsImage} alt={props.title} />
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

export default Header
