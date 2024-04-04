import Dashboard from "./conmponents/Dashboard"
import Header from "./conmponents/Header"
import NavBar from "./conmponents/NavBar"
import RevenueCard from "./conmponents/RevenueCard"

function App() {

  return (
    <div className="grid lg:grid-cols-5 h-full ">
      <div className="col-span-1 hidden lg:block">
        <NavBar companyName="Nishyan"/>
      </div>
      <div className="lg:col-span-4">
          <Header />
          <div className="bg-dashboardBack">
          <Dashboard whatMonth="This Month"/>
          </div>
      </div>
    </div>
  )
}

export default App
