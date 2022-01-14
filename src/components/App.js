import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../css/App.css'
import Form from './Form'
import Nav from './Nav'
import NYTContainer from './NYTContainer'
import MustReadsPage from './MustReadsPage'
import AboutPage from './AboutPage'
import Goals from './Goals'

const App = () => {
  const [nytBooks, setNytBooks] = useState([])
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("storedData");
    const existingUserData = JSON.parse(saved);
    return existingUserData || { goal: 0, readBooks: 0, mustReads: [] }
  })

  const fetchBooks = async () => {
    try {
      const booksData = await fetch('https://api.nytimes.com/svc/books/v3/lists/2022-01-01/hardcover-fiction.json?api-key=7BEqjWAPVc0JKC492JBAzIE04gAJFh2z')
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
      console.log(err)
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
    setUserData({...userData, mustReads: [...userData.mustReads, addedBook]})
  }

  const addToReadBooks = () => {
    setUserData({...userData, readBooks: userData.readBooks + 1})
  }

  return (
    <section className='app'>
       <Routes>
        <Route path='/' element={
        <React.Fragment>
          <div className='left-side'>
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
          <NYTContainer nytBooks={nytBooks} addToMustReads={addToMustReads}/>
        </React.Fragment>}/>
        <Route path='/must-reads' element={<MustReadsPage mustReads={userData.mustReads} goal={userData.goal} addToReadBooks={addToReadBooks} readBooks={userData.readBooks}/>}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </section>
  )
}

export default App;
