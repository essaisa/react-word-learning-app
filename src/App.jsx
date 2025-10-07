import Dashboard from "./components/layouts/Dashboard"
import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Challenge from "./components/layouts/Challenge"

function App() {

  // 0 == WELCOME, 1 == DASHBOARD, 2 == CHALLENGE

  const selectedPage = 1

  const pages = { 

    0: <Welcome/>,
    1: <Dashboard/>,
    2: <Challenge/>
  }

  return (
      <Layout>
        {pages[selectedPage]}
      </Layout>
  )
}

export default App
