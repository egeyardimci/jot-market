import Header from "./components/Header"
import MarketBody from "./components/MarketBody"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <MarketBody></MarketBody>
      <Footer />
    </div>
    </>
  )
}

export default App
