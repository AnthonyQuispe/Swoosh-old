const getLatLng = firebase.functions().httpsCallable("getLatLng");

getLatLng({ address: "1600 Amphitheatre Parkway, Mountain View, CA" })
  .then((result) => {
    const location = result.data;
    console.log("Latitude:", location.lat);
    console.log("Longitude:", location.lng);
  })
  .catch((error) => {
    console.error(error);
  });
