const axios = require('axios');

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city || 'Nashik'; // default fallback
    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const { data } = await axios.get(url);

    const weather = {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      rainfall: data.rain ? data.rain['1h'] || 0 : 0,
      windSpeed: data.wind.speed,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      city: data.name,
      country: data.sys.country
    };

    res.json(weather);
  } catch (err) {
    console.error('Weather API Error:', err.message);
    res.status(500).json({ message: "Failed to fetch real-time weather data" });
  }
};
