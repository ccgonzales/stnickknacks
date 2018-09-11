import React, { Component } from 'react';


const ListingItem = ({item, ...props}) => {

  const itemImageStyle = {
      backgroundImage: 'url('+item.MainImage.url_570xN + ')',
      animation: `fade-in ${props.index * .1 + '.4s'} ease-in`,
    }

  return (
      <a href={item.url} className="galleryItems__item" style={itemImageStyle}>
        {/* <img className="galleryItems__img" src={item.MainImage.url_570xN} /> */ }
        <div className="galleryItems__textContainer">
          <div className="galleryItems__text">{item.title}</div>
        </div>
      </a>
  )
}

class Listings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [],
      loading: true,
    }
  }

  componentDidMount() {
    // move to .env file
    const API_KEY = 'izjwjxzgox7aa4ci3dihot7t'

    const limit = 100
    const includes = 'MainImage'
  fetch(`/v2/shops/stnickknacks/listings/active?api_key=${API_KEY}&limit=${limit}&includes=${includes}`)
  .then(response => response.json())
  .then(json => this.setState({listings: json.results, loading: false}))
  .catch((error) => {
    console.warn(error)
    return null
  })
}

componentDidUpdate(prevProps) {
  // move to .env file
  const API_KEY = 'izjwjxzgox7aa4ci3dihot7t'

  const limit = 100
  const includes = 'MainImage'

  let api_url = this.props.current_section !== prevProps.current_section && this.props.current_section !== 0 ?
  `/v2/shops/stnickknacks/sections/${this.props.current_section}/listings/active?api_key=${API_KEY}&limit=${limit}&includes=${includes}` :
  `/v2/shops/stnickknacks/listings/active?api_key=${API_KEY}&limit=${limit}&includes=${includes}`


   this.props.current_section !== prevProps.current_section ?

  fetch(api_url)
  .then(response => response.json())
  .then(json => this.setState({listings: json.results, loading: false}))
  .catch((error) => {
    console.warn(error)
    return null
  })
   : false

}

  render() {
    return(
      <div className="galleryItems">
      {
        this.state.listings.map((item, iterator) => <ListingItem item={item} index={iterator} key={item.listing_id} />)
      }
      </div>
    )
  }
}

export default Listings;
