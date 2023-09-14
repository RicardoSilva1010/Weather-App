import { useEffect, useState } from "react"; 
import "./hour.css"   
import AccessTimeIcon from '@mui/icons-material/AccessTime';

//função para exibir a hora local
function Clocker(){
        const [secondsAmount,  setSecondsAMount] = useState("")

        useEffect(() =>{
            setTimeout(() =>{
                setSecondsAMount(state => state - 1);
            }, 1000)
        }, [secondsAmount]);

        let date = new Date();

        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

    return(
        <div className="current-weather_hour">
            <span className="iconTime"><AccessTimeIcon /></span>  
            <span className="title">Clocker:</span>
            <span>{String(hour).padStart(2, '0')}h</span>
            <span></span>
            <span>{String(minutes).padStart(2, '0')}m</span>
            <span></span>
            <span className="lastType">{String(seconds).padStart(2, '0')}s</span>
        </div>
    )
}

export default Clocker;