const apiKey = '873c6a416d5ff2708e48dd2d41bfad39';

let search = document.getElementById('search-btn');
// ------------day------------
let day = document.getElementById('day');
let date = Date();
day.innerText = date.slice(0,3);

async function weatherData(city){
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(Url);
    let data = await response.json();

if(data.cod != 200){
    let loction = document.getElementById('city');
    loction.innerText = data.message;
}else{
    let loction = document.getElementById('city');
    loction.innerText = data.name + ","+ data.sys.country;

    let temp = document.querySelector('.weather .temp');
    temp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

    let weather = document.querySelector('.weather .des');
    weather.innerHTML = `${data.weather[0].main}&nbsp;${Math.round(data.main.temp_max)}&deg;/${Math.round(data.main.temp_min)}&deg;`;

    let wind = document.getElementById('wind');
    wind.innerText = Math.round(data.wind.speed*(18/5))+"km/h";

    let humidity =document.getElementById('humidity');
    humidity.innerText = data.main.humidity +"%";

    let real = document.getElementById('real');
    real.innerHTML = `${Math.round(data.main.feels_like)}&deg;C`;

    let pressure = document.getElementById('pressure'); 
    pressure.innerHTML = `${data.main.pressure}<small>mbar</small>`;  

    let img = document.getElementById('bgimage');
    if(data.weather[0].main == 'Haze'){
        img.src = 'asset/haz.jpg'; 
    }else if(data.weather[0].main == 'Clouds'){
        img.src = 'asset/clouds.jpg'; 
    }
    
    else if(data.weather[0].main == 'Rain'){
        img.src = 'asset/rain.jpg'; 
    }
    else if(data.weather[0].main == 'Dust'){
        img.src = 'asset/dust.jpg'; 
    }else{
        img.src = 'asset/clear.png'; 
    };

};

};
search.addEventListener('click',function(){
    let Sinput = document.getElementById('search-input').value;
    weatherData(Sinput);
});


// weatherData();