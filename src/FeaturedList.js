import React, { Component } from 'react';


const FeaturedListingItem = ({item}) => {

  const itemImageStyle = {
      backgroundImage: 'url('+item.MainImage.url_570xN + ')'
    }

  return (
    <div className="featuredItems__item" style={itemImageStyle} >
    { //<span>{item.title}</span>
  }
    </div>
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

  render () {
    let featured = this.state.listings.filter(item => item.featured_rank !== null)
    return(
      <div className="featuredItems">
        {
          featured.map(item => <FeaturedListingItem item={item} key={item.listing_id} />)
        }
      </div>
      )
  }
}

export default Listings;