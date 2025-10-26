import Dashboard from "./components/layouts/Dashboard"
import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Challenge from "./components/layouts/Challenge"
import { useState, useEffect } from "react"

function App() {

  // 0 == WELCOME, 1 == DASHBOARD, 2 == CHALLENGE

  const [selectedPage, setSelectedPage] = useState(0)
  const [name, setName]= useState('')

  function handleChangePage(pageIndex){
    setSelectedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) { return }
    localStorage.setItem('username', name)
    handleChangePage(1)
  }

  useEffect(() => {
    // this callback is triggered on pageload
    if(!localStorage) { return } // if no exit to db, then exit callback function

    if (localStorage.getItem('username')) {
      // if we find something, then enter if block
      setName(localStorage.getItem('username'))

      // skip to dashboard
      setSelectedPage(1)
    }
  }, [])



  
  const pages = { 
    0: <Welcome name={name} setName={setName} handleCreateAccount={ handleCreateAccount }/>,
    1: <Dashboard />,
    2: <Challenge/>
  }

  return (
      <Layout> 
        {pages[selectedPage]}
      </Layout>
  )
}

export default App
