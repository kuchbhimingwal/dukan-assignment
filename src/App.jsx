import Dashboard from "./conmponents/Dashboard"
import Header from "./conmponents/Header"
import NavBar from "./conmponents/NavBar"
import RevenueCard from "./conmponents/RevenueCard"

function App() {

  return (
    <div className="grid grid-cols-5 h-full">
      <div className="col-span-1">
        <NavBar companyName="Nishyan"/>
      </div>
      <div className="col-span-4">
          <Header />
          <Dashboard />
      </div>
    </div>
  )
}

export default App
