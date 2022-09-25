const url = "https://api.thecatapi.com/v1/images/search";
const api_key = "live_vkLDV9D7HPRZifGiKkQsPYSsJVQR1ljAxHLsLaMk9usbeVXYWv2eWZ4o1T4o81UO";

async function getCat() {
    let res = await fetch(url);

    let data = await res.json();

    let catURL = data["0"]["url"];

    document.getElementById("catIMG").src = catURL;
}

//  vscode is great