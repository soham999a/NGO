import wixWindow from 'wix-window';

$w.onReady(function () {
    // 1. Hover Effect for Approach Cards
    // Assuming IDs like #approachCard1, #approachCard2
    const cards = ["#approachCard1", "#approachCard2", "#approachCard3"];
    
    cards.forEach(id => {
        if ($w(id).length > 0) {
            $w(id).onMouseIn(() => {
                $w(id).style.borderColor = "#FF8C00"; // Orange border on hover
                $w(id).style.borderWidth = 2;
            });
            $w(id).onMouseOut(() => {
                $w(id).style.borderColor = "#1A2B4C"; // Back to Navy
                $w(id).style.borderWidth = 1;
            });
        }
    });

    // 2. Simple FAQ/Approach Toggle
    // If you have a button (#toggleBtn) to show more detail (#detailText)
    if ($w("#toggleBtn").length > 0) {
        $w("#toggleBtn").onClick(() => {
            if ($w("#detailText").hidden) {
                $w("#detailText").show("fade");
                $w("#toggleBtn").label = "Show Less";
            } else {
                $w("#detailText").hide("fade");
                $w("#toggleBtn").label = "Learn More";
            }
        });
    }
});