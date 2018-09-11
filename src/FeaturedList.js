import React from 'react';


const ListingItem = ({item}) => {

  const itemImageStyle = {
      backgroundSize: 'contain',
      backgroundImage: 'url('+item.MainImage.url_570xN + ')'
    }

  return (
    <div className="featuredItems__item" style={itemImageStyle} >
    { //<span>{item.title}</span>
  }
    </div>
  )
}

const Listings = (props) => {
  let featured = props.listings.filter(listing => listing.featured_rank !== null )
  console.log(featured);
  return(
    <div className="featuredItems">
      {
        featured.map(item => <ListingItem item={item} key={item.listing_id} />)
      }
    </div>
  )
}

export default Listings;
