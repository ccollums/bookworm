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
  const [goal, setGoal] = useState(0)
  const [userBooks, setUserBooks] = useState([])

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

  // useEffect(() => {
  //   fetchBooks()
  // }, [])

  const addGoal = (goal) => {
    setGoal(goal)
  }

  return (
    <section className='app'>
      <div className='left-side'>
        <Nav />
        <h2>Best Seller's List</h2>
        <Goals goal={goal}/>
        <Form addGoal={addGoal}/>
        <div className='bottom-box'>
          <p>Click books to add to your must read list!</p>
        </div>
      </div>
      <NYTContainer />
    </section>
  )
}

export default App;
