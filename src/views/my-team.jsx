import { Footer } from "../cmps/footer"
import { GetStarted } from "../cmps/get-started"
import { Header } from "../cmps/header"
import { Info } from "../cmps/info"
import { Stories } from "../cmps/stories"


export const MyTeam = () => {

    return <section className="my-team">
        <Header />
        <Info />
        <Stories />
        <GetStarted />
        <Footer />
    </section>
}