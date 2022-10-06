import { ReactComponent as PersonIcon } from "../assets/icons/icon-person.svg"
import { ReactComponent as CogIcon } from "../assets/icons/icon-cog.svg"
import { ReactComponent as ChartIcon } from "../assets/icons/icon-chart.svg"
import { ReactComponent as Pattern3 } from "../assets/icons/pattern-3.svg"

export const Info = () => {
    return (
        <section className="info">
            <Pattern3 className="pattern-3" />
            <div className="info-container main-layout">
                <div className="info-header">
                    <h2>Build & manage distributed teams
                        like no one else.
                    </h2>
                    <div className="square"></div>
                </div>

                <div className="info-details">
                    <div className="card">
                        <PersonIcon className="svg-person" />
                        <div>
                            <h5>Experienced Individuals</h5>
                            <p>Our network is made up of highly experienced
                                professionals who are passionate about what they do.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <CogIcon className="svg-person" />
                        <div>
                            <h5>Easy to Implement</h5>
                            <p>Our processes have been refined over years
                                of implementation meaning our teams always deliver.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <ChartIcon className="svg-person" />
                        <div>
                            <h5>Enhanced Productivity</h5>
                            <p>Our customized platform with in-built
                                analytics helps you manage your distributed teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}