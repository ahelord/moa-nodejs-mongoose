## Node version

v11.9.0

## Development server

Run `npm run dev:start` for a dev server. Navigate to `http://localhost:3000/api`. The app will automatically reload if you change any of the source files.


## Prod server

Run `npm run prod:start` for a prod server.

## User endpoint

call by GET method `http://localhost:3000/api/users?page=1&startingPrice=0&finalPrice=300` 

query parameter:
* page: number of the page to query
* startingPrice: From the price range is the initial price of the hats
* finalPrice: From the price range is the final price of the hats

## Recommendations endpoint

call by GET method `http://localhost:3000/api/users/recommendations?page=1` 

query parameter:
* page: number of the page to query
