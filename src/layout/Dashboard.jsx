import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Pagerouter from "../pages/PageRouter"
export default function Dashboard() {
  return (
    <div>
      <Navbar/>
        <Pagerouter/>
      <Footer/>
    </div>
  )
}
