import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselItems = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="text-6xl font-bold leading-tight max-w-2xl sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="max-w-xl mt-6 text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <a className="btn btn-primary" href="/products">
              Our products
            </a>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
          {carouselItems.map((item) => {
            return (
              <div className="carousel-item" key={item}>
                <img
                  src={hero1}
                  alt="Burger"
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Hero
