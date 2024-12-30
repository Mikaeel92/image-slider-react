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
    <div className='flex flex-col items-center justify-center w-screen h-screen mt-40'>
      {
        images && images.length ?
        images.map((item, index) => (
          <div 
          key={index}
          className='flex flex-col items-center justify-center w-[600px] h-[450px]'>
            <img 
            src={item.download_url}
            alt={item.download_url} 
            className={ index === currentSlide ? 'w-full h-full rounded-md shadow-md' : 'hidden' }/>
          </div>
      )) : null
      }
    </div>
  )
}

export default App