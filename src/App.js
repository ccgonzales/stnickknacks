import React, { Component } from 'react';
import ShopButton from './ShopButton';
import Listings from './Listings';
import Sections from './Sections';
import FeaturedListings from './FeaturedList';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSmile, faHeart, faChild } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [],
      current_section: 0,
      loading: true,
    }

    this.handleChangeSection = this.handleChangeSection.bind(this)
  }

  handleChangeSection(current_section) {
    this.setState({current_section})
  }

  componentDidMount() {

    // move to .env file
    const API_KEY = 'izjwjxzgox7aa4ci3dihot7t'

    fetch(`/v2/shops/stnickknacks/sections?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => this.setState({sections: json.results, loading:false}))
    .catch((error) => {
      console.warn(error)
      return null
    })

    //window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    let breakpoint = document.querySelector('.hero')
    console.log(breakpoint.getBoundingClientRect())
  }

  

  render() {
    return (
      <div className="App">

<div className="menubar">
  <h1 className="menubar__title">St. Nick Knacks</h1>
  <ShopButton />
</div>

        <div className="hero">
        <FeaturedListings />
          <div className="hero__branding">
            <h1 className="hero__title">St. Nick Knacks</h1>
            <p className="hero__subtitle">Handcrafted Primitive Gifts</p>
            <ShopButton />
          </div>
        </div>

        <main className="content">
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
        </main>

      {
        this.state.loading === false &&
        <div>
          <Sections list={this.state.sections}
            onChangeSection={this.handleChangeSection}
            current_section={this.state.current_section} />
          <Listings current_section={this.state.current_section}/>
       </div>

      }
      <footer className="footer">
        <p className="footer__text">&copy; {
          (function(date) {
            return date.getFullYear();
          })(new Date())
        } St. Nick Knacks </p>
        <p className="footer__text">St. Nick Knacks makes handcrafted primitive gives to match your primitive, country, or rustic decor.
          Our <a href="https://stnickknacks.etsy.com">etsy store</a> has details on product dimensions and styles.
        </p>

      </footer>
      </div>
    );
  }
}

export default App;
