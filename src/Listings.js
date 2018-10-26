import React, { Component } from 'react';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';


const ListingItem = ({item, ...props}) => {

  const itemImageStyle = {
      backgroundImage: 'url('+item.MainImage.url_570xN + ')',
      flexGrow: 2,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      //animation: `fade-in ${props.index * .1 + '.4s'} ease-in`,
    }

    // strip ending url params to avoid displaying 'similar items' section from displaying on etsy.com
    let trimmedItemUrl = item.url.slice(0, item.url.lastIndexOf('?')) + '#listing-body'

    let trimmedItemTitle = item.title.slice(0, item.title.indexOf('.') !== -1 ? item.title.indexOf('.') : item.title.length)

  return (
      <a href={trimmedItemUrl} className="galleryItems__item" >
        <div style={itemImageStyle}></div>
         {/* <div className="galleryItems__textContainer"> */}
          <div className="galleryItems__text">{trimmedItemTitle}</div>
        {/* </div> */}
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
