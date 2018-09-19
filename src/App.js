import React, { Component } from 'react';
import Listings from './Listings';
import Sections from './Sections';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

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
  }

  render() {
    return (
      <div className="App">

<div className="menubar">
  <h1 className="menubar__title">St. Nick Knacks</h1>
  <a href="https://stnickknacks.etsy.com?ref=ws" className="menubar__shoplink">
  <FontAwesomeIcon icon={faStore} /> Etsy Shop</a>
</div>

        <div className="hero">
          <svg viewBox="0 0 500 95">
            <path className="hero__textpath" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="">
              <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle" className="logo-text">
                St. Nick Knacks
              </textPath>
            </text>
          </svg>
          <p className="hero__sitesubtitle">Handcrafted Primitive Gifts</p>
        </div>

        <main className="content">
          <section className="content__container content__container--tall">
            <h2>hiya!</h2>
            <p className="content__text">we are a small home business, with 35 years of crafting and creating. 
            <br />Sondra, the crafting diva, does all 
the creative work. tom does all the wood cutting. christopher handles everything else.
we are all managed by our boss with the tale, Maddie. He inspects every box and must know where we are at all times!</p>
          </section>
          <section id="handcrafted" className="content__container content__container--alpha">
          <h2>handmade with love</h2>
          <p className="content__text">
          All of our items are handmade in the USA! We work with a variety of materials, such as: paint, wood, floral or metal. 
          Our items tend to be primitive, rustic, or country style decor.
          </p>
          </section>
          <section id="" className="content__container content__container--bravo">
          <h2>put something here</h2>
          <p className="content__text">something something, danger zone.</p>
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
        <p className="footer__text">&copy; 2018 St. Nick Knacks </p>
        <p className="footer__text">St. Nick Knacks makes handcrafted primitive gives to match your primitive, country, or rustic decor.
          Our <a href="https://stnickknacks.etsy.com">etsy store</a> has details on product dimensions and styles.
        </p>

      </footer>
      </div>
    );
  }
}

export default App;
