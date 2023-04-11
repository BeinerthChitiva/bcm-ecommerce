import "./Footer.css";

function Footer(){
    return(
        <>
            <footer>
                <div className="footer-links">
                    <a>About</a>
                    <a>Store Locator</a>
                    <a>FAQs</a>
                    <a>News</a>
                    <a>Careers</a>
                    <a>Contact Us</a>
                </div>
                <p className="love">
                    Design &nbsp;by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                    >
                        &nbsp;BeinerthChitivaM.
                    </a>
                </p>
            </footer>
        </>
    )
}

export default Footer;