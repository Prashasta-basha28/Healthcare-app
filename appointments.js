document.addEventListener("DOMContentLoaded", function () {
    loadAppointments();
});

function loadAppointments() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let appList = document.getElementById("appointment-list");

    if (appointments.length === 0) {
        appList.innerHTML = "<li>No upcoming appointments.</li>";
    } else {
        appList.innerHTML = appointments.map((app, index) => `
            <li>
                <span>${app.doctor} - ${app.date} at ${app.time}</span>
                <button class="cancel-btn" onclick="cancelAppointment(${index})">Cancel</button>
            </li>
        `).join('');
    }
}

function addAppointment() {
    let doctor = document.getElementById("doctor-name").value;
    let date = document.getElementById("appointment-date").value;
    let time = document.getElementById("appointment-time").value;

    if (!doctor || !date || !time) {
        alert("Please fill in all fields.");
        return;
    }

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push({ doctor, date, time });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    document.getElementById("doctor-name").value = "";
    document.getElementById("appointment-date").value = "";
    document.getElementById("appointment-time").value = "";

    loadAppointments();
}

function cancelAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem("appointments"));
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
}