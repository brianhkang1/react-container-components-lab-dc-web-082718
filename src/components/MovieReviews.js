import React from 'react'


const MovieReviews = (props) => {

  const returnMovie = (review) => {
    return (
      <div className="review" key={review.display_title}>
        <h3 className="movie-title">{review.display_title}</h3>
        <div className="review-summary">{review.summary_short}</div>
        <div className="movie-opening-date">Opened on: {review.opening_date}</div>
      </div>)
  }

    return(
      <div className="review-list">
      {props.reviews.map(review => returnMovie(review))}
      </div>
    )

}

export default MovieReviews
