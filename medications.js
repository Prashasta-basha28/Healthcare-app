document.addEventListener("DOMContentLoaded", function () {
    loadMedications();
});

function loadMedications() {
    let medications = JSON.parse(localStorage.getItem("medications")) || [];
    let medList = document.getElementById("medication-list");
    
    if (medications.length === 0) {
        medList.innerHTML = "<li>No medications scheduled for today.</li>";
    } else {
        medList.innerHTML = medications.map((med, index) => `
            <li>
                <input type="checkbox" id="med-${index}" onclick="markTaken(${index})">
                <label for="med-${index}">${med.name} - ${med.dosage} at ${med.time}</label>
            </li>
        `).join('');
    }
}

function addMedication() {
    let name = document.getElementById("medication-name").value;
    let dosage = document.getElementById("medication-dosage").value;
    let time = document.getElementById("medication-time").value;
    
    if (!name || !dosage || !time) {
        alert("Please fill in all fields.");
        return;
    }

    let medications = JSON.parse(localStorage.getItem("medications")) || [];
    medications.push({ name, dosage, time, taken: false });
    localStorage.setItem("medications", JSON.stringify(medications));

    document.getElementById("medication-name").value = "";
    document.getElementById("medication-dosage").value = "";
    document.getElementById("medication-time").value = "";

    loadMedications();
}

function markTaken(index) {
    let medications = JSON.parse(localStorage.getItem("medications"));
    medications[index].taken = true;
    localStorage.setItem("medications", JSON.stringify(medications));
    loadMedications();
}

