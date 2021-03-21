import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [], 
        searchTerm: ''
    }
    componentDidMount(){

    }
    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        // debugger        
        fetch(URL + `?query=<${this.state.searchTerm}>`)
        .then(r => r.json())
        .then(data => this.setState({ reviews: data.results }))
    }


    render (){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type='text' 
                    onChange={e => this.handleChange(e)}
                    value={this.state.searchTerm} />
                </form>
                    {
                    this.state.reviews.map(
                        review => this.state.reviews.length > 0 
                        ? <MovieReviews review={review}/> : null ) }
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer