import './Footer.css'

function Footer() {
    let time = new Date();
    let year = time.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; - {year}</p>
                <hr />
        </footer>
    )
}

export default Footer;