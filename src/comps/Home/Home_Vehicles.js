import { Link } from 'react-router-dom'
import { vehicles } from '../../constants'

const Home_Vehicles = () => {
  return (
    <section className='vehicles'>
      {vehicles.map((model) => {
        return (
          <Link to={model.learnLink} className="vehicles-section bg-fullcenter text-slate-100 w-full flex-centralizer flex-col">
            <div className="w-full h-full flex-centralizer">
              <h2 className='text-3xl font-semibold'>{model.model}</h2>
            </div>
            <p>{model.subtitle}</p>
          </Link>
        )
      })}
    </section>
  )
}

export default Home_Vehicles