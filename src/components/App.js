import React, { useEffect, useState } from 'react'
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
    return existingUserData || { goal: 0, mustReads: [] }
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

  return (
    <section className='app'>
      <div className='left-side'>
        <Nav />
        <h2>Best Seller's List</h2>
        <Goals goal={userData.goal}/>
        <Form addGoal={addGoal}/>
        <div className='bottom-box'>
          <p>Click books to add to your must read list!</p>
        </div>
      </div>
      <NYTContainer nytBooks={nytBooks} addToMustReads={addToMustReads}/>
    </section>
  )
}

export default App;
