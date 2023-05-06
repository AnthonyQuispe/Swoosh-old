// const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

exports.getLatLng = functions.https.onRequest(async (req, res) => {
  // Enable CORS using the `cors` middleware
  cors(req, res, async () => {
    const { address } = req.body;

    try {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address,
            key: "AIzaSyCCp8eriyAho7kWw59-a1s0XfNE0v0ckx8",
          },
        }
      );

      const result = response.data.results[0];
      const location = result.geometry.location;

      res.json({
        lat: location.lat,
        lng: location.lng,
      });
    } catch (error) {
      res.status(500).send("Failed to fetch location data");
    }
  });
});
