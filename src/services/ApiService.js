

const ApiService = (function () {
  let data = null;
  let apiKey = "2esrTh6M";


  async function callAPI(method, url = "", data = {}) {

    const response = await fetch(url, {
      method: method, 
      mode: "cors", 
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function getArtObjects(pagination, searchTerm) {
    console.log("get arts")
    try {
      let url = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&imgonly=true&q=${searchTerm}&p=${pagination.page}&ps=${pagination.count}`;
      data = await callAPI("GET", url);
      data.status = "SUCCESS";
    } catch (error) {
      data = {};
      data.status = "FAILURE";
    }
    console.log("data", data)
    return data;
  }

  async function getSingleArtObjects(artId) {
    try {
      let url = `https://www.rijksmuseum.nl/api/nl/collection/${artId}?key=${apiKey}`;
      data = await callAPI("GET", url);
      data.status = "SUCCESS";
    } catch (error) {
      data = {};
      data.status = "FAILURE";
    }
    return data;
  }

  return {
    getArtObjects,
    getSingleArtObjects,
  };
})();

export default ApiService;
