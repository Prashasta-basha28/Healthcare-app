document.addEventListener("DOMContentLoaded", function () {
    loadMedications();
    loadAppointments();
    loadMessages();
});

function loadMedications() {
    let medications = JSON.parse(localStorage.getItem("medications")) || [];
    let medList = document.getElementById("medication-list");
    medList.innerHTML = medications.length ? medications.map(med => `<li>${med}</li>`).join('') : "<li>No medications today.</li>";
}

function loadAppointments() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let appList = document.getElementById("appointment-list");
    appList.innerHTML = appointments.length ? appointments.map(app => `<li>${app}</li>`).join('') : "<li>No upcoming appointments.</li>";
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let msgList = document.getElementById("message-list");
    msgList.innerHTML = messages.length ? messages.map(msg => `<li>${msg}</li>`).join('') : "<li>No new messages.</li>";
}

document.addEventListener("DOMContentLoaded", function () {
    displayNextAppointment();
    displayNextMedication();
});

function displayNextAppointment() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    
    if (appointments.length === 0) {
        document.getElementById("next-appointment").innerText = "No upcoming appointments.";
        return;
    }

    appointments.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));
    let nextApp = appointments[0];

    document.getElementById("next-appointment").innerText = `${nextApp.doctor} on ${nextApp.date} at ${nextApp.time}`;
}

function displayNextMedication() {
    let medications = JSON.parse(localStorage.getItem("medications")) || [];

    if (medications.length === 0) {
        document.getElementById("next-medication").innerText = "No medications scheduled.";
        return;
    }

    document.getElementById("next-medication").innerText = `${medications[0].name} - ${medications[0].dosage} at ${medications[0].time}`;
}

function displayHealthStats() {
    let healthStats = JSON.parse(localStorage.getItem("healthStats")) || [];
    
    document.getElementById("bp").innerText = healthStats.bp || "Not Available";
    document.getElementById("weight").innerText = healthStats.weight || "Not Available";
    document.getElementById("glucose").innerText = healthStats.glucose || "Not Available";
}

document.addEventListener("DOMContentLoaded", displayHealthStats);