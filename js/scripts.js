const  btnel = document.getElementById("btn");
const mykey = "f1yegJeVj7Je70NO6RMH/w==00HXL3O3t3HM9mPY";
const jokeel = document.getElementById("joke");

const options = {
    method: "GET",
    headers : {
        "X-Api-Key": mykey, 
    },
};

const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

/*async function getJoke(){
    jokeel.innerHTML = "fetching joke...";
    btnel.disabled = true;
    btnel.innerText = "Loading joke...";
    const response = await fetch(apiurl,options);
    const data = await response.json();

    jokeel.innerText = data[0].joke;
    btnel.disabled = false;
    btnel.innerText = "Tell me a joke";
}
*/

async function getJoke() {
    jokeel.innerHTML = "fetching joke...";
    btnel.disabled = true;
    btnel.innerText = "Loading joke...";

    try {
        const response = await fetch(apiurl, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the data
        jokeel.innerText = data[0].joke;
    } catch (error) {
        console.error('Failed to fetch the joke:', error);
        jokeel.innerText = "Failed to fetch the joke, please try again.";
    } finally {
        btnel.disabled = false;
        btnel.innerText = "Tell me a joke";
    }
}


btnel.addEventListener("click", getJoke);





