let tg = window.Telegram.WebApp;

tg.expand();

const updatedData = {}
updatedData['ready_for_relocation'] = false

const form = document.getElementById("edit-profile-form")
const btn_submit = document.getElementById("btn-submit")

form.addEventListener("change", function (event) {
    const changedElement = event.target;
    if (changedElement.type === "checkbox") {
        updatedData[changedElement.id] = changedElement.checked;
    } else {
        updatedData[changedElement.id] = changedElement.value
    }
    btn_submit.classList.remove('d-none')

});

form.addEventListener("submit", function () {
    tg.sendData(JSON.stringify(updatedData))
});
