import Navbar from "./Navbar";
import Slider from "./Slider";

function Home() {
    return (
        <div className='home'>
            <img src="https://gndec.ac.in/sites/default/logo.png"/>            
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home
