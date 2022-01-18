import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../css/App.css'
import Form from './Form'
import Nav from './Nav'
import NYTContainer from './NYTContainer'
import MustReadsPage from './MustReadsPage'
import ReadBooksPage from './ReadBooksPage'
import AboutPage from './AboutPage'
import Goals from './Goals'
import ErrorPage from './ErrorPage.js'
import background from '../images/background.png'
import { RiErrorWarningFill } from 'react-icons/ri';

const App = () => {
  const [nytBooks, setNytBooks] = useState([])
  const [error, setError] = useState('')
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("storedData");
    const existingUserData = JSON.parse(saved);
    return existingUserData || { goal: 0, readBooks: 0, mustReads: [], readList: [] }
  })

  const fetchBooks = async () => {
    try {
      const booksData = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7BEqjWAPVc0JKC492JBAzIE04gAJFh2z')
      const books = await booksData.json()
      setNytBooks(books.results.books.map((book) => {
        return {
          rank: book.rank,
          title: book.title,
          author: book.author,
          description: book.description,
          image: book.book_image,
          url: book.amazon_product_url
        }
      }))
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(userData))
  }, [userData])

  const addGoal = (userGoal) => {
    setUserData({...userData, goal: userGoal})
  }

  const addToMustReads = (addedBook) => {
    if (!userData.mustReads.find((book) => {return book.title === addedBook.title}) && 
    !userData.readList.find((book) => {return book.title === addedBook.title})) {
      setUserData({...userData, mustReads: [...userData.mustReads, addedBook]})
    }
  }

  const addToReadBooks = (completedBook) => {
    if (!userData.readList.find((book) => {return book.title === completedBook.title})) {
      const foundBook = userData.mustReads.indexOf(completedBook)
      const filterMustReads = userData.mustReads.splice(foundBook, 1)
      setUserData({...userData, readBooks: userData.readBooks + 1, readList: [...userData.readList, completedBook]})
    }
  }

  const clearMustReads = () => {
    localStorage.clear()
    setUserData({ goal: 0, readBooks: userData.readBooks, mustReads: [], readList: [...userData.readList] })
  }

  const clearReadBooks = () => {
    localStorage.clear()
    setUserData({ goal: userData.goal, readBooks: 0, mustReads: [...userData.mustReads], readList: [] })
  }

  return (
    <section className='app'>
       <Routes>
        <Route path='/' element={
        <React.Fragment>
          <div className='left-side' style={{ backgroundImage: `url(${background})`}}>
            <Nav />
            <div className='page-info'>
              <h2>Best Seller's List</h2>
              <Goals goal={userData.goal} readBooks={userData.readBooks}/>
              <Form addGoal={addGoal}/>
              <div className='bottom-box'>
                <p>Click books to add to your must read list!</p>
              </div>
            </div>
          </div>
          { error ? <div className='right-side'>
          <RiErrorWarningFill size={150} className='error-icon'/>
          <p>Oops, something went wrong, please try again!</p> 
          </div> : <NYTContainer nytBooks={nytBooks} addToMustReads={addToMustReads}/>}
        </React.Fragment>}/>
        <Route path='/must-reads' element={<MustReadsPage mustReads={userData.mustReads} goal={userData.goal} addToReadBooks={addToReadBooks} readBooks={userData.readBooks} clearMustReads={clearMustReads}/>}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/read-books' element={<ReadBooksPage readList={userData.readList} readBooks={userData.readBooks} goal={userData.goal} clearReadBooks={clearReadBooks}/>}/>
        <Route path='/:invalidURL' element={<ErrorPage />}/>
      </Routes>
    </section>
  )
}

export default App;
