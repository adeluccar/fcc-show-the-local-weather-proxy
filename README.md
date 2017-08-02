## A proxy backend for fCC's Show the Local Weather
The "Show the Local Weather" project involves making calls to external APIs (either Dark Sky or OpenWeather) to get the current weather information.

The problem is that most beginners do this project without a backend (by course design). Thus, they have no way to hide the API keys on both services.

We should reinforce the idea that we have to protect and hide API keys (at least with a proxy server) always.
This way, we can reference the API keys through environment variables instead of exposing these in the front-end.

This code base is a simple express.js server that can you can install in a free heroku instance. It works as a proxy between the front-end and the weather services.

The whole point is to make it simple to install and use, so that you can focus on the exercise itself (the front-end).

From fCC's Show the Local Weather project page [here](https://www.freecodecamp.com/challenges/show-the-local-weather):

> Either weather API service will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.

### Installation

Make sure you have Git, Heroku and NPM installed. If you're on a Mac, Homebrew makes this easy.

- `git clone git@github.com:adeluccar/fcc-show-the-local-weather-proxy.git`
- `cd fcc-show-local-weather-proxy`
- `pnpm install` (if you want to try it out locally - note that I use pnpm for managing my node packages)
- `heroku create` (make a note of the name of the heroku instance)
- `git remote -v` (verify that heroku is listed as a remote)
- `git push heroku master`
- `heroku config:set DARKSKYAPIKEY=your-dark-sky-api-key`

### Usage

1. Send GET requests with latitude and longitude parameters to your own server (not Dark Sky). Like so:

    `https://[your-heroku-app-name].herokuapp.com/?lat=xxx&lon=yyy`

2. Receive a JSON with the current weather data for the location specified in the request parameters.

### User Stories

- [x] I should be able to make a GET request with two parameters (latitude and longitude).

- [x] I should not need to send my API key through a request to this server.

- [x] I should be able to configure my API key through an environment variable.

- [x] I should receive a JSON object with current weather from Dark Sky if my parameters are correct.

- [x] I should receive an error if my request is malformed.

### Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
