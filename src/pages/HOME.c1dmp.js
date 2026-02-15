import wixWindow from 'wix-window';

$w.onReady(function () {
    // 1. WATCH OUR STORY - Video Trigger
    // This will only run if you name your button 'watchStoryBtn'
    if ($w("#watchStoryBtn").length > 0) {
        $w("#watchStoryBtn").onClick(() => {
            // Make sure you create a Lightbox named 'VideoStoryPlayer'
            wixWindow.openLightbox("VideoStoryPlayer"); 
        });
    }

    // 2. DYNAMIC IMPACT COUNTER
    // This will only run if you name your section 'impactSection'
    if ($w("#impactSection").length > 0) {
        $w("#impactSection").onViewportEnter(() => {
            animateImpactNumbers();
        });
    }

    // 3. DONATE BUTTON HOVER
    // This will only run if you name your button 'donateBtn'
    if ($w("#donateBtn").length > 0) {
        setupButtonHover("#donateBtn", "#FF8C00", "#E67E00");
    }
});

function animateImpactNumbers() {
    let start = 0;
    let end = 3000; 
    
    // Checks if the text element exists before trying to change it
    if ($w("#learnerCountText").length > 0) {
        let timer = setInterval(() => {
            start += 50; 
            $w("#learnerCountText").text = start.toLocaleString() + "+";
            if (start >= end) {
                $w("#learnerCountText").text = "3,000+";
                clearInterval(timer);
            }
        }, 30);
    }
}

function setupButtonHover(id, originalColor, hoverColor) {
    $w(id).onMouseIn(() => { $w(id).style.backgroundColor = hoverColor; });
    $w(id).onMouseOut(() => { $w(id).style.backgroundColor = originalColor; });
}