import React, {useEffect, useState} from 'react';
import {cities} from "../store/cities";
import axios from "axios";
import audio from "../audio/kazan.mp3"

const Kazan = () => {
    // const [audio, setAudio] = useState()

    // useEffect(() => {
    //     const fetchAudio = async () => {
    //         let data = axios.get(`https://translate.tatar/byhackathon_synthesize?text=${cities.kazan.tt.desc}`)
    //         setAudio(data)
    //     }
    //     fetchAudio()
    // }, [])

    // console.log(audio)

    return (
        <div>
            <h1>{cities.kazan.ru.name}</h1>
        </div>
    );
};

export default Kazan;