import React, {useEffect} from 'react';
import Header from "../components/Header"
import {cities} from "../store/cities"
import City from "../components/City";
import "./home.css"
import audio from "../audio/kazan.mp3"


const Home = () => {

    // const soundPlay = () => {
    //     const sound = new Howl({
    //         sound: 'https://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3',
    //         html5: true
    //     })
    //     sound.play()
    // }
    // useEffect(() => {
    //     audio.play()
    // }, [])

    return (
        <div>
            <Header />
            <div className="contain">
                <City className={'card'} city={cities.kazan}/>
                <City className={'card'} city={cities.almet}/>
            </div>
        </div>
    );
};

export default Home;