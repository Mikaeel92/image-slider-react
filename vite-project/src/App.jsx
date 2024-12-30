import React, { useEffect, useState } from 'react'

const App = () => {

  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10')
      const data = await response.json()
      if(data) {
        setImages(data)
        setLoading(false)}
      } catch (errorMsg) {
      setErrorMsg(error)
      setLoading(false)}}

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='text-3xl text-red-600'>
      {
        images && images.length ?
        images.map((item, index) => (
          <div>
            <img src={item.download_url} alt={item.download_url} key={index}/>
          </div>
      )) : null
      }
    </div>
  )
}

export default App