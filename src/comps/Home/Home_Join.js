import Button from "../Button"
import Background from "../../assets/Cybertruck-Second-Hero-Desktop.jpg"

const Home_Join = () => {
    return (
        <section className="w-full flex flex-col justify-between min-h-[60vh] bg-fullcenter" style={{ backgroundImage: "url(" + Background + ")" }}>
            <section className="text-center padding">
                <h2 className="text-slate-100 font-semibold md:text-4xl text-2xl">Join to the Tesla's Family</h2>
                <Button to="/" label="Choose Yours" customClass="mt-3" />
            </section>
        </section>
    );
};

export default Home_Join;
