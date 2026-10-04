let sosNumber = 1024;

function hideAll() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
}

function showSOS() {
    hideAll();
    document.getElementById("sos").classList.add("active");
}

function goHome() {
    hideAll();
    document.getElementById("home").classList.add("active");

    document.getElementById("peerCount").innerText = "0";
}

function sendSOS() {

    const emergency =
        document.getElementById("emergency").value;

    document.getElementById("dashboardType").innerText =
        emergency;

    sosNumber++;

    document.getElementById("sosId").innerText =
        "SOS #PM" + sosNumber;

    hideAll();

    document.getElementById("network").classList.add("active");

    let progress = 0;

    const bar = document.getElementById("progressBar");

    document.getElementById("networkMessage").innerText =
        "Discovering nearby peers...";

    document.getElementById("networkSub").innerText =
        "Searching for available communication paths";

    setTimeout(() => {

        document.getElementById("p1").innerText =
            "CONNECTED";

        document.getElementById("peerCount").innerText = "1";

        document.getElementById("networkMessage").innerText =
            "Peer 1 connected";

        document.getElementById("networkSub").innerText =
            "SOS packet forwarded";

        bar.style.width = "35%";

    }, 1200);


    setTimeout(() => {

        document.getElementById("p2").innerText =
            "CONNECTED";

        document.getElementById("peerCount").innerText = "2";

        document.getElementById("networkMessage").innerText =
            "Message forwarded to Peer 2";

        document.getElementById("networkSub").innerText =
            "Finding rescue gateway";

        bar.style.width = "65%";

    }, 2500);


    setTimeout(() => {

        document.getElementById("rescueStatus").innerText =
            "RECEIVED";

        document.getElementById("networkMessage").innerText =
            "SOS reached rescue node";

        document.getElementById("networkSub").innerText =
            "Emergency message delivered successfully";

        document.getElementById("peerCount").innerText = "3";

        bar.style.width = "100%";

        document
            .getElementById("dashboardButton")
            .classList.remove("hidden");

    }, 3900);
}


function showDashboard() {

    hideAll();

    document
        .getElementById("dashboard")
        .classList.add("active");
}