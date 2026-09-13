import Banner from "../assets/banner-stack.png"

const Bannar = () => {
    return (
        <div className = "flex justify-between gap-4  container mx-auto">
            <div className="px-8 py-7">
            <h1 className = "text-4xl  ">Built Your Ideal <br/><span className="gradient-text">Development Stack</span></h1>
            <p className="py-8">Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your
                next project.</p>
                <div className="flex gap-6 items-center">
            <button className="gradient-btn rounded-2xl px-4 py-2 text-white">Explore Technologies</button>
            <button className="border border-gray-300  rounded-2xl px-14 py-3">Learn More</button>
            </div>
            </div>
            <div>
                <img src={Banner} alt="" />
            </div>
        </div>
       
    );
};

export default Bannar;