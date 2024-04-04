import Background from '../../assets/Overviewpage-Group-83.jpg'

const Ow_Hero = () => {
    return (
        <section className="w-full h-screen bg-fullcenter flex-centralizer" style={{ backgroundImage: "url(" + Background + ")" }}>
            <div className="text-center grid gap-y-40">
                <h1 className='md:text-4xl text-2xl font-bold'>Find Your Best, Then Customize It</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            </div>
        </section>
    )
};

export default Ow_Hero;
