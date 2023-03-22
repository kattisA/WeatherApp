const weatherSituations = [
{value: 1, meaning:"	Clear sky"},
{value: 2, meaning:"	Nearly clear sky"},
{value: 3, meaning:"	Variable cloudiness"},
{value: 4, meaning:"	Halfclear sky"},
{value: 5, meaning:"	Cloudy sky"},
{value: 6, meaning:"	Overcast"},
{value: 7, meaning:"	Fog"},
{value: 8, meaning:"	Light rain showers"},
{value: 9, meaning:"	Moderate rain showers"},
{value: 10, meaning:	"Heavy rain showers"},
{value: 11, meaning:	"Thunderstorm"},
{value: 12, meaning:	"Light sleet showers"},
{value: 13, meaning:	"Moderate sleet showers"},
{value: 14, meaning:	"Heavy sleet showers"},
{value: 15, meaning:	"Light snow showers"},
{value: 16, meaning:	"Moderate snow showers"},
{value: 17, meaning:	"Heavy snow showers"},
{value: 18, meaning:	"Light rain"},
{value: 19, meaning:	"Moderate rain"},
{value: 20, meaning:	"Heavy rain"},
{value: 21, meaning:	"Thunder"},
{value: 22, meaning:	"Light sleet"},
{value: 23, meaning:	"Moderate sleet"},
{value: 24, meaning:	"Heavy sleet"},
{value: 25, meaning:	"Light snowfall"},
{value: 26, meaning:	"Moderate snowfall"},
{value: 27, meaning:	"Heavy snowfall"}
]

export function getWeatherSituations(){
    return weatherSituations;
}