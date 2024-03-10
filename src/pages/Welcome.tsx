import Navbar from "../components/Navbar";

const Welcome = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col text-center">
                <h1 className="text-3xl mt-20">Hello! The web site is in progress. Visit us for more updates</h1>
            </div>
        </>
    );
};

export default Welcome;
