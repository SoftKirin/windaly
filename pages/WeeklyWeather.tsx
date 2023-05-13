import React from 'react'

const WeeklyWeather = (/*{weeklyweather, WeeklyWeather, timezone }*/) => {
  return (
    <div className='weekly'>
     <h3 className="weekly__tittle">
        Weekly <span>Weather</span>
     </h3>

        {WeeklyWeather.length > 0  && 
            weeklyWeather.map((weather, index)=> {
                if(index ==0) {
                    return;
                }
                return(
                    <div className="weekly__card" key={weather.dt}>
                        <div className="weekly__inner">
                            <div className="weekly__left-content">
                                <div>
                                    <h3>
                                        
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }

    </div>
  )
}

export default WeeklyWeather;
