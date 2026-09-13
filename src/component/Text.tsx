
const Text = () => {
    return (
        // <div className="container mx-auto">
        //     <h1 className="container mx-auto text-4xl">Explore the Technologies</h1>
        //     <p>Pick one technology per category to build your ideal stack.</p>
        // </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 " >

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Explore the <span className=" gradient-text">Technologies</span>
            </h2>


            <p className="text-gray-500 mt-2 text-sm md:text-base">
                Pick one technology per category to build your ideal stack.
            </p>
        </div>
    );
};

export default Text;