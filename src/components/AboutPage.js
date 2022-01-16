import React from 'react'
import Nav from './Nav'
import '../css/AboutPage.css'
import Addie from '../images/Addie.png'
import Cabin from '../images/cabin10.png'
import Crawdads from '../images/crawdads .png'
import Dante from '../images/dante .png'
import Dune from '../images/dune.png'
import Eragon from '../images/eragon.png'
import GreatAlone from '../images/greatalone.png'
import Handmaid from '../images/handmaid.png'
import InCold from '../images/incold.png'
import Nightingale from '../images/nightingale.png'
import None from '../images/none.png'
import River from '../images/river.png'
import Untamed from '../images/untamed.png'
import Vanishing from '../images/vanishing.png'
import Carly from '../images/carly.png'
import background from '../images/background.png'

const AboutPage = () => {
	return (
		<section className='about-page'>
			<div className='left-side' style={{ backgroundImage: `url(${background})` }}>
				<Nav />
				<div className='page-info about'>
					<h2>About</h2>
					<p className='app-summary'>BookWorm was created for those of us that hate searching through cluttered 
						sites or cluttered bookstores to find a notably good fiction novel. Make finding 
						your next read easy by only seeing the current NYT best sellers! And for all those goal 
						oriented readers (or want to be readers) to track their progress.
					</p>
					<div className='bio'>
						<img className='headshot'src={Carly} alt='Carly Collums'/>
						<p className='bio'>Hi! I'm Carly, a front-end software engineering student at Turing school of software and 
						design. BookWorm was created as a final solo project to demonstarte my use of React, React Router, and Cypress.
						I consider myself to be a positive, and compassionate software developer driven by an imaginative thinking 
						style and growth mindset. The inspiration behind BookWorm greatly came from my love for reading and for minimalist design.
						If you are interested in knowing more about the project, visit the readme HERE</p>
					</div>
					<div className='bottom-box'>
						<p>Scroll through some of my favorite novels!</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<img className='book-cover' src={Addie} alt='The Invisible Life of Addie Larue book cover'/>
				<img className='book-cover' src={Crawdads} alt='Where the Crawdads sing book cover'/>
				<img className='book-cover' src={Vanishing} alt='The Vanishing Half book cover'/>
				<img className='book-cover' src={Dune} alt='Dune book cover'/>
				<img className='book-cover' src={Nightingale} alt='The Nightingale book cover'/>
				<img className='book-cover' src={River} alt='The River book cover'/>
				<img className='book-cover' src={Dante} alt='Dantes Inferno book cover'/>
				<img className='book-cover' src={InCold} alt='In Cold Blood book cover'/>
				<img className='book-cover' src={Eragon} alt='Eragon book cover'/>
				<img className='book-cover' src={GreatAlone} alt='The Great Alone book cover'/>
				<img className='book-cover' src={Handmaid} alt='The Handmaids Tale book cover'/>
				<img className='book-cover' src={Cabin} alt='The Girl in Cabin 10 book cover'/>
				<img className='book-cover' src={None} alt='And Then There Were None book cover'/>
				<img className='book-cover' src={Untamed} alt='Untamed book cover'/>
			</div>
		</section>
	)
}

export default AboutPage; 