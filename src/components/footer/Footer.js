import './Footer.css'

function Footer() {
    let time = new Date();
    let year = time.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; - {year}</p>
        </footer>
    )
}

export default Footer;