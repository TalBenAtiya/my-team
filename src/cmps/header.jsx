import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { ReactComponent as Pattern1 } from "../assets/icons/pattern-1.svg"
import { ReactComponent as Pattern2 } from "../assets/icons/pattern-2.svg"

export const Header = () => {

    return (
        <section className="header">
            <Pattern1 className="pattern1" />
            <div className=" main-layout">
                <header className="main-header">
                    <div className="header-logo-nav">
                        <Logo className="logo" />
                        <span>home</span>
                        <span>about</span>
                    </div>
                    <button className="btn-contact">contact us</button>
                </header>

                <div className="home-hero">
                    <h1>Find the best <span>talent</span></h1>
                    <div className="hero-details">
                        <div className="square"></div>
                        <p>Finding the right people and building high performing teams can be hard.
                            Most companies aren't tapping into the abundance of global talent.
                            We're about to change that.
                        </p>
                    </div>
                </div>
                <div className="pattern-container">
                    <Pattern2 className="pattern2" />
                </div>
            </div>
        </section>
    )
}