function leadgenSend() {
    const isEmailValid = document.getElementById("form-email").validity.valid
    const isNameValid = document.getElementById("form-name").validity.valid
    const areToSValid = document.getElementById("form-tos").validity.valid
    if (isEmailValid && isNameValid && areToSValid) {
        let request = new XMLHttpRequest()
        const data = {
            name: document.getElementById("form-name").value,
            email: document.getElementById("form-email").value,
            organization: document.getElementById("form-organization").value ? document.getElementById("form-organization").value : "",
            role: document.getElementById("form-role").value ? document.getElementById("form-role").value : "",
            message: document.getElementById("form-message").value ? document.getElementById("form-message").value : "",
            mailing_list: document.getElementById("form-mailing_list").value === "on" ? 1 : 0,
        }

        request.open("POST","https://userhandling.nodoambiental.org")
        request.setRequestHeader("Content-Type", "application/json")
        request.setRequestHeader("query-kind", "leadgen")
        request.send(JSON.stringify(data))
        request.onloadend = () => {
            window.location.replace(`${window.location.origin}/leadgen/verify`)
        }
    } else {
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
    }
};