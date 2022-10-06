import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { ReactComponent as Facebook } from "../assets/icons/icon-facebook.svg"
import { ReactComponent as Pinterest } from "../assets/icons/icon-pinterest.svg"
import { ReactComponent as Twitter } from "../assets/icons/icon-twitter.svg"

export const Footer = () => {

    return (
        <section className="footer">
            <div className="main-footer main-layout">
                <div className="logo-container">
                    <Logo className="logo" />
                    <div className="nav-btns">
                        <span>home</span> <span>about</span>
                    </div>
                </div>
                <div className="contact-info">
                    987  Hillcrest Lane
                    <br/>Irvine, CA
                    <br/>California 92714
                    <br/>Call Us : 949-833-7432
                </div>
                <div className="footer-rights">
                <div className="social-media">
                    <Facebook />
                    <Pinterest />
                    <Twitter />
                </div>

                    <div className="copy-rights">
                        <span>Copyright 2020. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </section>
    )
}