import { Component } from "react"
import fetchJsonp from "fetch-jsonp"

class ListingsData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: [],
            loading: true,
        }
    }

    componentDidMount() {
        const API_KEY = `${process.env.REACT_APP_ETSY_API_KEY}`
        const limit = 100
        const includes = 'MainImage'

      fetchJsonp(`https://openapi.etsy.com/v2/shops/stnickknacks/listings/active.js?api_key=${API_KEY}&limit=${limit}&includes=${includes}`)
      .then(response => response.json())
      .then(json => this.setState({listings: json.results, loading: false}))
      .catch((error) => {
        console.warn(error)
        return null
      })
    }

    componentDidUpdate(prevProps) {
        const API_KEY = `${process.env.REACT_APP_ETSY_API_KEY}`
        const limit = 100
        const includes = 'MainImage'
      
        let api_url = this.props.current_section !== prevProps.current_section && this.props.current_section !== 0 ?
        `https://openapi.etsy.com/v2/shops/stnickknacks/sections/${this.props.current_section}/listings/active.js?api_key=${API_KEY}&limit=${limit}&includes=${includes}` :
        `https://openapi.etsy.com/v2/shops/stnickknacks/listings/active.js?api_key=${API_KEY}&limit=${limit}&includes=${includes}`
      
      
         if (this.props.current_section !== prevProps.current_section) {
      
          fetchJsonp(api_url)
          .then(response => response.json())
          .then(json => this.setState({listings: json.results, loading: false}))
          .then(this.scrollToGallery)
          .catch((error) => {
            console.warn(error)
            return null
          })
      
         }
      
      }
    //TODO: This should probably be moved somewhere else; maybe in Listings after an loading conditional
    scrollToGallery() {
        let scrollPosition = document.querySelector('#gallery').offsetTop - 90
        window.scroll({ 
          top: scrollPosition,
          left: 0,
          behavior: 'smooth' 
        })
      }  

    render() {
        return (
            this.props.render({
                listings: this.state.listings
            })
        )
    }

}

export default ListingsData