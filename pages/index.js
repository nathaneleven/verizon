import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import BodyContent from '../src/components/molecules/BodyContent'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BodyContent/>
      <Footer/>
    </div>
  )
}
