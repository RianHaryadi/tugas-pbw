// JavaScript untuk "Bagikan Lokasi" button
document.getElementById("shareLocation").addEventListener("click", function() {
    // URL lokasi yang akan dibagikan (gantilah sesuai kebutuhan)
    const locationUrl = "https://www.google.com/maps?q=Gn.+Batur&hl=id";

    // Menyalin URL lokasi ke clipboard
    navigator.clipboard.writeText(locationUrl).then(function() {
        alert("Lokasi telah disalin ke clipboard! Anda dapat membagikannya.");
    }).catch(function(error) {
        console.error("Gagal menyalin lokasi: ", error);
    });
});