import Dashboard from "./components/layouts/Dashboard"
import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Challenge from "./components/layouts/Challenge"
import { useState, useEffect } from "react"

import WORDS from './utils/VOCAB.json'
import { getWordByIndex, PLAN } from './utils'

function App() {

  // 0 == WELCOME, 1 == DASHBOARD, 2 == CHALLENGE

  const [selectedPage, setSelectedPage] = useState(0)
  const [name, setName] = useState('')
  const [day, setDay] = useState(1)
  const [datetime, setDatetime] = useState(null)
  const [history, setHistory] = useState([])
  const [attempts, setAttempts] = useState(0)



  function handleChangePage(pageIndex){
    setSelectedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) { return }
    localStorage.setItem('username', name)
    handleChangePage(1)
  }

  const daysWords = PLAN[day].map((idx) => {
    getWordByIndex(WORDS, idx).word
  })

  useEffect(() => {
    // this callback is triggered on pageload due to [] in second arg
    if (!localStorage) { return } // if no exit to db, then exit callback function

    if (localStorage.getItem('username')) {
      // if we find something, then enter if block
      setName(localStorage.getItem('username'))

      // skip to dashboard
      setSelectedPage(1)
    }
  }, [])



  
  const pages = { 
    0: <Welcome name={name} setName={setName} handleCreateAccount={ handleCreateAccount }/>,
    1: <Dashboard name={name} attempts={attempts} PLAN={PLAN} day={day} handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime} />,
    2: <Challenge handleChangePage={ handleChangePage }/>
  }

  return (
      <Layout> 
        {pages[selectedPage]}
      </Layout>
  )
}

export default App
