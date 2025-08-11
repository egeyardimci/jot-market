import Header from "./components/Header"
import MarketBody from "./components/MarketBody"
import Footer from "./components/Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMarketItems } from "./store/market/marketSlice"
import type { AppDispatch } from "./store"


function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMarketItems());
  }, [dispatch]);

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
