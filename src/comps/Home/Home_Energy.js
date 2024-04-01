import Button from '../Button'
import Background from '../../assets/Homepage-SolarPanels-01-Desktop.jpg'

const Home_Energy = () => {
  return (
    <section className='h-screen w-full flex-centralizer bg-fullcenter' style={{ backgroundImage: "url(" + Background + ")" }}>
      <div className="text-center h-3/5 flex flex-col justify-between">
        <div>
          <h2 className='font-bold xl:text-4xl text-2xl'>Power is Yours</h2>
          <p className='my-3'>Produce, Provide and Use Energy Completelly in your very own Home Built</p>
        </div>
        <div className="md:flex gap-5 md:mx-auto padding">
          <Button to='/' label="Explore Products" light />
          <Button to='/' label="Learn About" customClass="md:mt-0 mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Home_Energy