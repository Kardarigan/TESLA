import Button from '../Button'
import Background from '../../assets/Homepage-SolarRoof-Desktop-Global.jpg'

const Home_Accessories = () => {
  return (
    <section className='h-screen w-full flex-centralizer bg-fullcenter' style={{ backgroundImage: "url(" + Background + ")" }}>
      <div className="text-center h-3/5 flex flex-col justify-between">
        <div className='text-slate-950'>
          <h2 className='font-bold xl:text-4xl text-2xl'>Tesla's Life Style</h2>
          <p className='my-3'>If you'r a Big Huge Giant Fan of Tesla, You Must check the Accessories</p>
        </div>
        <div className="md:flex gap-5 md:mx-auto padding">
          <Button to='/' label="Explore Accessories" light />
          <Button to='/' label="Learn About" customClass="md:mt-0 mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Home_Accessories