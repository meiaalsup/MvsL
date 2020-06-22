let SERVER_URL = "http://localhost:5000"
if (process.env.NODE_ENV !== "development") {
  SERVER_URL = "https://mit-koms-backend.herokuapp.com"
}

module.exports = {
  SERVER_URL: SERVER_URL
}
