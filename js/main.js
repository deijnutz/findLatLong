document.querySelector('button').addEventListener('click', convert)

function convert() {
    const result = document.querySelector('input').value
    console.log(result)

    const url = `https://getlatlong2022-04-14-2-xqfy473giq-uc.a.run.app/get?address=${result}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h3').innertext = `The coordinates for ${result} are approximately: `
            document.querySelector('h2').innerText = `Latitude = ${data.lat}        &        Longitude = ${data.lng}`
        })



    .catch(err => {
        console.log(`error ${err}`)
    })
}