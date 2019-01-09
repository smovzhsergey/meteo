export const api = `http://api.openweathermap.org/data/2.5/`;
export const apiKey = `&APPID=a615c27c5de32032687688de15f1792c`;

const getWeather = async (city, type) => {

    try {

        const url = `${api}${type}?q=${city}${apiKey}&lang=ua`;
        const response = await fetch(url, {
            method: 'GET'
        });
        
        if (response.status !== 200) {

            if (response.status === 404) {               
                return `The City "${city.toUpperCase()}" is ${response.statusText}. Please check the city name.`;
            }

            return 'Internal Server Error. Please try again later!';
        }

        const weather = await response.json();
        
        return weather;
        
    }
    catch ({ message }){
        console.log(message);
    }

}

export { getWeather };

export const transformPressure = (p) => Math.round(p*0.750064);
export const transformTemperature = (t) => Math.round(t-273);

