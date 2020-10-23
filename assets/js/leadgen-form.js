function leadgenSend() {
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
};