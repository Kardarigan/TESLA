import { Link } from 'react-router-dom'
import { homeVehicles } from '../../constants'

const Home_Vehicles = () => {
  return (
    <section className='vehicles'>
      {homeVehicles.map((model) => {
        return (
          <Link to={model.model} className="vehicles-section bg-fullcenter text-slate-100 w-full flex-centralizer flex-col">
            <div className="w-full h-full flex-centralizer">
              <h2 className='text-3xl font-semibold'>{model.model}</h2>
            </div>
            <p>{model.describe}</p></Link>
        )
      })}
    </section>
  )
}

export default Home_Vehicles