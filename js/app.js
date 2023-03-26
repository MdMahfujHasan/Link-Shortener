document.getElementById('btn-go').addEventListener('click', function () {
    const websiteLink = document.getElementById('website-link');
    const websiteLinkValue = websiteLink.value;
    loadShortenLink(websiteLinkValue);
    websiteLink.value = '';
})

const loadShortenLink = async link => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    const res = await fetch(url);
    const data = await res.json();
    displayShortenLink(data);
}

const displayShortenLink = data => {
    // console.log(data.result);
    const { short_link } = data.result;
    document.getElementById('short-link').innerHTML = `
    <a target="_blank" class="text-3xl text-blue-600 font-semibold underline underline-offset-2" href="https://${short_link}">${short_link}</a>
    `;
}