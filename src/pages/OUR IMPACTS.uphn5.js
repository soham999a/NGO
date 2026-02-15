$w.onReady(function () {
    // 1. Trigger animation when the impact section comes into view
    // Name your section ID: #impactSection
    if ($w("#impactSection").length > 0) {
        $w("#impactSection").onViewportEnter(() => {
            // Start the counters
            animateValue("#learnerCount", 0, 3302, 2000); // 3302 Learners
            animateValue("#libraryCount", 0, 30, 2000);   // 30 Libraries
            animateValue("#scholarshipCount", 0, 71500, 2000); // 71,500 Scholarship
        });
    }
});

// Function to handle the counting logic
function animateValue(id, start, end, duration) {
    if ($w(id).length > 0) {
        let range = end - start;
        let current = start;
        let increment = end > start ? Math.ceil(end / 50) : -1;
        let stepTime = Math.abs(Math.floor(duration / (range / increment)));
        
        let timer = setInterval(function() {
            current += increment;
            if (current >= end) {
                $w(id).text = end.toLocaleString(); // Adds commas to numbers
                clearInterval(timer);
            } else {
                $w(id).text = current.toLocaleString();
            }
        }, stepTime);
    }
}