import { Component } from "react"
import fetchJsonp from "fetch-jsonp"

class SectionsData extends Component {
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
          const API_KEY = `${process.env.REACT_APP_ETSY_API_KEY}`
      
          fetchJsonp(`https://openapi.etsy.com/v2/shops/stnickknacks/sections.js?api_key=${API_KEY}`)
          .then(response => response.json())
          .then(json => this.setState({sections: json.results, loading:false}))
          .catch((error) => {
            console.warn(error)
            return null
          })
        }

    render() {
        return this.props.render({
            sections: this.state.sections,
        })
    }
}

export default SectionsData