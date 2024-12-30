import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
      const data = await response.json();

        setImages(data);
        setLoading(false)
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }

  }
  const handlePrevious =() => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
     fetchImages('https://picsum.photos/v2/list?page=1&limit=10');
  }, []);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="flex relative items-center justify-center w-[600px] h-[450px] mt-40 ml-[420px]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute w-4 h-4 shadow-md mr-4 text-red-500 text-3xl" 
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={index}
              alt={imageItem.download_url} 
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "w-full h-full rounded-md shadow-lg"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-4 h-4 shadow-md ml-4 text-red-500 text-3xl"
      />
      <span className="flex absolute mt-96">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "cursor-pointer rounded-lg w-5 h-5 bg-green-700"
                    : "cursor-pointer rounded-lg w-5 h-5 bg-gray-300"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
