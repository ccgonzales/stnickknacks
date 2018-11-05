import React from 'react';

const ListingItem = ({item, ...props}) => {

  const itemImageStyle = {
      backgroundImage: 'url('+item.MainImage.url_570xN + ')',
      flexGrow: 2,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      animation: `fade-in .5s ease-in ${props.index * .1 + 's'}`,
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

const Listings = ({listings}) => {
    return(
      <div className="galleryItems" id="gallery">
      {
        listings.map((item, iterator) => <ListingItem item={item} index={iterator} key={item.listing_id} />)
      }
      </div>
    )
  }

export default Listings;
