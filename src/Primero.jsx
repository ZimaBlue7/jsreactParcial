import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Primero = ({numero}) => {
    // let imprime = 'imprime en HTML'

    const [Contador, setContador] = useState(0)
  return (
    <>
    <h1>numero: {numero}</h1>
    </>

  )
}
Primero.propTypes = {
    numero: PropTypes.string.isRequired

}

export default Primero