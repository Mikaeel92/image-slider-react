import React, { useEffect, useState } from 'react'

const App = () => {

  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchData = async () => {

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='text-3xl text-red-600'>App</div>
  )
}

export default App