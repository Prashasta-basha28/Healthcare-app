document.addEventListener("DOMContentLoaded", loadHealthData);

function loadHealthData() {
    let healthData = JSON.parse(localStorage.getItem("healthStats")) || {};
    
    document.getElementById("latest-bp").innerText = healthData.bp || "Not Available";
    document.getElementById("latest-weight").innerText = healthData.weight || "Not Available";
    document.getElementById("latest-glucose").innerText = healthData.glucose || "Not Available";
}

function saveHealthData() {
    let bp = document.getElementById("bp").value.trim();
    let weight = document.getElementById("weight").value.trim();
    let glucose = document.getElementById("glucose").value.trim();

    let healthData = { bp, weight, glucose };
    localStorage.setItem("healthStats", JSON.stringify(healthData));

    loadHealthData();
}
