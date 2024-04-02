import Button from '../Button'

const Home_Weekly = () => {
  return (

    <section className='max-h-screen padding'>
      <div className="w-full">
        <div className="flex md:flex-row flex-col justify-center sm:gap-12 max-container bg-slate-300 padding-x rounded">
          <div className="relative md:w-3/5 flex justify-start flex-col w-full py-5">
            <h1 className='mt-2 text-slate-950 font-bold xl:text-4xl text-2xl'>Always Be Up To Date</h1>
            <h2 className='mt-3 text-slate-600'>Join to out Weekly Offers and Events Service. This will Help you be Aware of all Things that will be Happened i Tesla's Universe</h2>

            <div className="md:flex gap-5 mt-10">
              <Button to='/' label='Last Events' light />
              <Button to='/' label='Last Offers' customClass="md:mt-0 mt-2" />
            </div>
            <div className="mt-5 md:flex gap-5">
            </div>
          </div>
          <form className="md:w-2/5 w-full flex-centralizer md:py-5 pb-5">
            <div className="flex justify-between flex-col w-full min-h-[100px] rounded-lg p-4 bg-slate-800">
              <div className="flex items-center text-slate-200">
                <i className="fa-light fa-envelope-circle text-4xl pe-3" />
                <label htmlFor="weeklyMail" className='text-sm max-w-[260px] font-bold'>Enter your Email Address to Recieve them every Weeks :</label>
              </div>
              <input type="text" id="weeklyMail" class="field mt-12" placeholder='example@email.com' required />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home_Weekly