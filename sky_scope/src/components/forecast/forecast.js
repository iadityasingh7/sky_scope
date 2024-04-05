import "./forecast.css";

import { 
    Accordion, 
    AccordionItem, 
    AccordionItemButton, 
    AccordionItemHeading, 
    AccordionItemPanel 
} from "react-accessible-accordion";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({data}) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    console.log(forecastDays);


    return (
    <>
        <label className="forcast-title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="Forecast-daily-item">
                                <img alt="wether" className="forecast-icon" src={`weather-icons/${item.weather[0].icon}.png`}/>
                                <label className="forecast-day">{forecastDays[index]}</label>
                                <label className="forecast-description">{item.weather[0].description}</label>
                                <label className="forecast-min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                        <div className="forecast-daily-details-grid">
                            <div className="forecast-daily-details-grid-item">
                                <label>Pressure</label>
                                <label>{item.main.pressure}hPa</label>
                            </div>
                            <div className="forecast-daily-details-grid-item">
                                <label>Humidity</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className="forecast-daily-details-grid-item">
                                <label>Clouds</label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className="forecast-daily-details-grid-item">
                                <label>Wind Speed</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className="forecast-daily-details-grid-item">
                                <label>Sea level</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className="forecast-daily-details-grid-item">
                                <label>Feels like</label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                            
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
    )
}

export default Forecast;