import React, { Component } from 'react';
import ShopButton from './ShopButton';
import Menubar from './components/Menubar/Menubar';
import FeaturedListings from './FeaturedList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faHeart, faChild } from '@fortawesome/free-solid-svg-icons';
import Listings from './components/Listings/Listings';
import ListingsData from './components/Data/ListingsData';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [],
      current_section: 0,
    }

    this.handleChangeSection = this.handleChangeSection.bind(this)
  }

  handleChangeSection(current_section) {
    this.setState({current_section})
  }

   componentDidMount() {
     window.addEventListener('scroll', this.handleScroll)
   }

  handleScroll() {
    let breakpoint = document.querySelector('.hero .shopButton__container')
    let menubar = document.querySelector('.menubar')
    breakpoint.getBoundingClientRect().y < -36 ? menubar.className ='menubar menubar--show' : menubar.className = 'menubar'
  }

  render() {
    return (
      <div className="App">
          <Menubar          
            onChangeSection={this.handleChangeSection}
            current_section={this.state.current_section} 
          />

        <div className="hero">
          <FeaturedListings />
          <div className="hero__branding">
            <h1 className="hero__title">St. Nick Knacks</h1>
            <p className="hero__subtitle">Handcrafted Primitive Gifts</p>
            <ShopButton />
          </div>
        </div>

        <main>
          <div className="content">
          <section className="content__container content__container--charlie">
            <h2 className="content__header content__header--welcome"><FontAwesomeIcon icon={faChild} /> hiya!</h2>
            <p className="content__text">We are a small home business, with 35 years of crafting and creating!</p>
            <p className="content__text">We hand make primitive gifts covering a variety of categories such as: 
            <br/>ornaments, figurines, wall decor,
            and other home decor goodies to fit your rustic or country style!</p>
          </section>

          <section id="handcrafted" className="content__container">
          <h2 className="content__header content__header--ouritems"><FontAwesomeIcon icon={faHeart} /> handmade with love</h2>
          <p className="content__text">
          All of our items are handmade in the USA! </p>
          <p className="content__text">We work with a variety of materials, such as: paint, wood, floral or metal. </p>
          <p className="content__text">Our items tend to be primitive, rustic, or country style decor.</p>          
          </section>

          <section id="" className="content__container content__container--bravo">
          <h2 className="content__header content__header--aboutus"><FontAwesomeIcon icon={faSmile} /> meet the st. nick knackers</h2>
          <p className="content__text">Sondra, the crafting diva, does all the creative work.</p>
          <p className="content__text">Maddie, our boss with the tale, inspects every box and must know where we are at all times!</p>
          <p className="content__text">Christopher manages the pixels and paperwork.</p>
          <p className="content__text">Tom works menial tasks to pay for his cruising habit!</p>
          </section>        
        </div>

        <div>
          <ListingsData current_section={this.state.current_section} render={({listings}) => <Listings listings={listings}/> } />
       </div>
       
       </main>

      <footer className="footer">
        <p className="footer__text">&copy; {
          (function(date) {
            return date.getFullYear();
          })(new Date())
        } St. Nick Knacks </p>
      </footer>
      </div>
    )
  }
}

export default App