function membershipSend() {
    const url = new URL(document.URL)
    const userToken = url.searchParams.get("token")
    const origin = url.searchParams.get("origin")
    const isIDKindValid = document.getElementById("form-ID-kind").validity.valid
    const isIDValid = document.getElementById("form-ID").validity.valid
    const isZipValid = document.getElementById("form-zip").validity.valid
    const isMessageValid = document.getElementById("form-message").validity.valid
    const areToSValid = document.getElementById("form-tos").validity.valid
    if (userToken && origin && areToSValid && isIDKindValid && isIDValid && isZipValid && isMessageValid) {
        let request = new XMLHttpRequest()
        const data = {
            user_token: userToken,
            ID: document.getElementById("form-ID").value,
            ID_type: document.getElementById("form-ID-kind").value,
            zip: document.getElementById("form-zip").value,
            message: document.getElementById("form-message").value,
            title: document.getElementById("form-role").value ? document.getElementById("form-role").value : "",
        }

        request.open("POST","https://userhandling.nodoambiental.org")
        request.setRequestHeader("Content-Type", "application/json")
        request.setRequestHeader("query-kind", "membership")
        request.send(JSON.stringify(data))
        request.onloadend = () => {
            window.location.replace(`${window.location.origin}/membership/application-success`)
        }
    } else if (userToken && origin) {
        const originalValue = document.getElementById("form-send").value
        const originalBGColor = document.getElementById("form-send").style.backgroundColor
        const originalColor = document.getElementById("form-send").style.color
        const originalPadding = document.getElementById("form-send").style.padding

        document.getElementById("form-send").value = "Completa los campos requeridos 🙌"
        document.getElementById("form-send").style.backgroundColor = "#a00"
        document.getElementById("form-send").style.color = "#fff"
        document.getElementById("form-send").style.padding = "25px"

        setTimeout(() => {
            document.getElementById("form-send").value = originalValue
            document.getElementById("form-send").style.backgroundColor = originalBGColor
            document.getElementById("form-send").style.color = originalColor
            document.getElementById("form-send").style.padding = originalPadding
        },4000)
    } else {
        window.location.replace(`${window.location.origin}/membership/invalid-data`)
    }
};

document.querySelector(".form.js").style.display = "block"