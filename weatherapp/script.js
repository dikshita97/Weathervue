//const url = 'https://weather-data-api1.p.rapidapi.com/find-location?q=manila&limit=5';
//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
/*const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '232a174490mshb3835e4e4acdec2p167ff8jsn57d0e5a1844a',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};*/
/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
/*
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))*/
/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '232a174490mshb3835e4e4acdec2p167ff8jsn57d0e5a1844a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response);

			const location = response.location;
			const current = response.current;

			name.innerHTML = location.name;
			region.innerHTML = location.region;
			country.innerHTML = location.country;
			lat.innerHTML = location.lat;
			lon.innerHTML = location.lon;
			tz_id.innerHTML = location.tz_id;
			localtime_epoch.innerHTML = location.localtime_epoch;
			localtime.innerHTML = location.localtime;

			last_updated_epoch.innerHTML = current.last_updated_epoch;
			last_updated.innerHTML = current.last_updated;
			temp_c.innerHTML = current.temp_c;
			temp_f.innerHTML = current.temp_f;
			is_day.innerHTML = current.is_day;

			text.innerHTML = current.condition.text;
			//icon.innerHTML = current.condition.icon;
			code.innerHTML = current.condition.code;

			wind_mph.innerHTML = current.wind_mph;
			wind_kph.innerHTML = current.wind_kph;
			wind_degree.innerHTML = current.wind_degree;
			wind_dir.innerHTML = current.wind_dir;
			pressure_mb.innerHTML = current.pressure_mb;
			pressure_in.innerHTML = current.pressure_in;
			precip_mm.innerHTML = current.precip_mm;
			precip_in.innerHTML = current.precip_in;
			humidity.innerHTML = current.humidity;
			cloud.innerHTML = current.cloud;
			feelslike_c.innerHTML = current.feelslike_c;
			feelslike_f.innerHTML = current.feelslike_f;
			windchill_c.innerHTML = current.windchill_c;
			windchill_f.innerHTML = current.windchill_f;
			heatindex_c.innerHTML = current.heatindex_c;
			heatindex_f.innerHTML = current.heatindex_f;
			dewpoint_c.innerHTML = current.dewpoint_c;
			dewpoint_f.innerHTML = current.dewpoint_f;
			vis_km.innerHTML = current.vis_km;
			vis_miles.innerHTML = current.vis_miles;
			uv.innerHTML = current.uv;
			gust_mph.innerHTML = current.gust_mph;
			gust_kph.innerHTML = current.gust_kph;
		})
		.catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

//getWeather("Ontario");
