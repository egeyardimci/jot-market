import Header from "./components/Header"
import MarketBody from "./components/MarketBody"
import Footer from "./components/Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMarketItems } from "./store/market/marketSlice"
import type { AppDispatch } from "./store"
import Modals from "./components/Modals"

function App() {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMarketItems());
  }, [dispatch]);
  

  return (
    <>
    <div className="bg-[#1EA4CE] w-full min-h-screen flex flex-col">
      <Header />
      <MarketBody />
      <Footer />
    </div>
    <Modals />
    </>
  )
}

export default App
