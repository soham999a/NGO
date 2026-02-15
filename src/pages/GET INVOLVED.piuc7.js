import wixWindow from 'wix-window';

$w.onReady(function () {
    // 1. Selection Logic (Volunteer vs Donor vs Partner)
    // If you use a dropdown named #involvementType
    if ($w("#involvementType").length > 0) {
        $w("#involvementType").onChange(() => {
            const type = $w("#involvementType").value;
            
            // Show different messages based on choice
            if (type === "Volunteer") {
                $w("#volunteerNote").show();
                $w("#partnerNote").hide();
            } else if (type === "Partner") {
                $w("#partnerNote").show();
                $w("#volunteerNote").hide();
            }
        });
    }

    // 2. Form Submission Feedback
    // Name your submit button #submitBtn and your success message #successMsg
    if ($w("#submitBtn").length > 0) {
        $w("#submitBtn").onClick(() => {
            // This is a simple visual trick to show progress
            $w("#submitBtn").label = "Sending...";
            
            // Simulating a delay for the "Thank You" message
            setTimeout(() => {
                $w("#mainForm").hide("fade");
                $w("#successMsg").show("drop");
                $w("#successMsgText").text = "Thank you for joining the Treasure family!";
            }, 1500);
        });
    }
});