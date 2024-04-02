import RevenueCard from "./conmponents/RevenueCard"

function App() {

  return (
    <div className="grid grid-cols-3">
    <RevenueCard title={"Amount pendnig"} amount={"92,321,20"} orderCount={13}/>
    </div>
  )
}

export default App
