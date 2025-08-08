import Header from "./components/Header"
import MarketBody from "./components/MarketBody"


function App() {

  return (
    <>
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <MarketBody></MarketBody>
    </div>
    </>
  )
}

export default App
