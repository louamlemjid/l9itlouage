// script.js file

// Make sure that Axios is included in your project

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found your QR code
    function onScanSuccess(decodeText, decodeResult) {
        alert("Your QR code is: " + decodeText);
        
        // Send the QR code value to the server using Axios
        axios.post('/qrCodeScan', {
            qrCodeValue: decodeText,
            qrCodeResult: decodeResult
        })
        .then(function (response) {
            
            // Handle the response if needed
        })
        .catch(function (error) {
            console.error(error);
            // Handle errors if needed
        });
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
