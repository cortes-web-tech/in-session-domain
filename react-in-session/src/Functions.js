const Funktion = (props) => {
  console.log(props);
  function getSessions() {
    axios
      .get("http://192.168.1.15/api/getSessions.php")
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          setSessions(response.data);
        }
      });
  }
};

export default Funktion;
