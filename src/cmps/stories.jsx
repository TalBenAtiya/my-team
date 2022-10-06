import { ReactComponent as Pattern5 } from '../assets/icons/pattern-5.svg'
import { ReactComponent as Pattern4 } from '../assets/icons/pattern-4.svg'
import { ReactComponent as QuotesIcon } from '../assets/icons/icon-quotes.svg'
import kadyImg from '../assets/img/avatar-kady.jpg'
import aiyshaImg from '../assets/img/avatar-aiysha.jpg'
import arthurImg from '../assets/img/avatar-arthur.jpg'
export const Stories = () => {

    return (
        <section className="stories">
            <Pattern4 className="pattern4" />
            <Pattern5 className="pattern5" />
            <div className="main-layout">
                <div className="stories-header">
                    <h2>Delivering real results for top</h2>
                    <h2>Companies. Some of our <span>success stories.</span></h2>
                </div>

                <section className="cards-container">
                    <div className="card">
                        <QuotesIcon className="svg-quotes" />
                        <p>"The tean perfectly fit the specialized skill set required.
                            They focused on the most essential features helping us luanch 
                            the platform eight months faster then planned."
                        </p>
                        <h4>Kady Baker</h4>
                        <img className="member-img" src={kadyImg} />
                    </div>
                    <div className="card">
                        <QuotesIcon className="svg-quotes" />
                        <p>“We needed to automate our entire onboarding process.
                            The team came in and built out the whole journey.
                            Since going live, user retention has gone through the roof!”
                        </p>
                        <h4>Aiysha Reese</h4>
                        <img className="member-img" src={aiyshaImg} />
                    </div>
                    <div className="card">
                        <QuotesIcon className="svg-quotes" />
                        <p>“Amazing. Our team helped us build an app that delivered a
                            new experience for hiring a physio.
                            The launch was an instant success with 100k downloads in
                            the first month.”
                        </p>
                        <h4>Arthur Clarke</h4>
                        <img className="member-img" src={arthurImg} />
                    </div>
                </section>

            </div>
        </section>
    )
}