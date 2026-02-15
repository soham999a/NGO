import wixWindow from 'wix-window';

$w.onReady(function () {
    // 1. Transparent to Solid Header on Scroll
    // Name your header strip #headerStrip
    wixWindow.onBoundingRectChanged((windowSizeInfo) => {
        if (windowSizeInfo.scroll.y > 50) {
            $w("#headerStrip").style.backgroundColor = "#1A2B4C"; // Navy Blue
        } else {
            $w("#headerStrip").style.backgroundColor = "rgba(26, 43, 76, 0)"; // Transparent
        }
    });

    // 2. Smooth Scroll for "Learn More" button
    // ID for button: #learnMoreBtn, ID for section: #missionSection
    if ($w("#learnMoreBtn").length > 0) {
        $w("#learnMoreBtn").onClick(() => {
            $w("#missionSection").scrollTo();
        });
    }

    // 3. Simple Countdown for a specific Campaign Goal
    // Name your text element #countdownText
    if ($w("#countdownText").length > 0) {
        setupCountdown();
    }
});

function setupCountdown() {
    // Set target date for your next big event/goal
    const targetDate = new Date("Dec 31, 2026 23:59:59").getTime();
    
    let timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        $w("#countdownText").text = days + " Days to reach our goal!";
        
        if (distance < 0) {
            clearInterval(timer);
            $w("#countdownText").text = "Goal Reached!";
        }
    }, 1000);
}