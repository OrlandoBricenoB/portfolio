import { useState } from "react"
import RateStar from "../../atoms/rating/RateStar"

const Multirating = ({ onRate }) => {
  const [stars, setStars] = useState([1, 2, 3, 4, 5].map(star => ({ number: star, state: 'empty' })))
  const [selectedValue, setSelectedValue] = useState(0)

  const handleClickRating = quantity => {
    setSelectedValue(quantity)
    onRate && onRate(quantity)

    setStars(stars => {
      return stars.map(star => {
        // * Limpiar todas las estrellas.
        star.state = 'empty'

        // * Llenar las estrellas desde la primera a la seleccionada.
        if (star.number <= quantity) {
          star.state = 'filled'
          star.keepColor = false
        }

        return star
      })
    })
  }

  const handleMouseEnter = starNumber => {
    setStars(stars => {
      return stars.map(star => {
        // * Solo hacer hover a las estrellas que no estén seleccionadas.
        // * Y que estén antes de la que tiene el mouse encima.
        if (star.number <= starNumber && selectedValue < star.number) {
          star.state = 'filled'
          star.keepColor = true
        }
        return star
      })
    })
  }
  const handleMouseLeave = () => {
    setStars(stars => {
      // * Quitar el hover a todas las estrellas que no estén seleccionadas.
      return stars.map(star => {
        if (star.number > selectedValue) star.state = 'empty'
        return star
      })
    })
  }

  return (
    <div>
      {
        stars.map(star => {
          return (
            <RateStar
              key={star.number}
              state={star.state}
              onClick={() => handleClickRating(star.number)}
              onMouseEnter={() => handleMouseEnter(star.number)}
              onMouseLeave={handleMouseLeave}
              keepColor={star.keepColor}
            />
          )
        })
      }
    </div>
  )
}

export default Multirating
