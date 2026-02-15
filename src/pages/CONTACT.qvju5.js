import wixWindow from 'wix-window';

$w.onReady(function () {
    // 1. Copy Email to Clipboard Feature
    // Name your email text element #emailText
    if ($w("#emailText").length > 0) {
        $w("#emailText").onClick(() => {
            // This copies the text to the user's phone/computer
            const email = $w("#emailText").text;
            wixWindow.copyToClipboard(email)
                .then(() => {
                    // Show a small "Copied!" message
                    $w("#copyMessage").show();
                    setTimeout(() => $w("#copyMessage").hide(), 2000);
                });
        });
    }

    // 2. Form Submission Animation
    // ID for form: #contactForm, ID for button: #sendBtn
    if ($w("#sendBtn").length > 0) {
        $w("#sendBtn").onClick(() => {
            $w("#sendBtn").label = "Sending Message...";
            
            // Logic to show a success message after sending
            setTimeout(() => {
                $w("#contactForm").hide("fade");
                $w("#thankYouBox").show("bounce");
            }, 1000);
        });
    }
});