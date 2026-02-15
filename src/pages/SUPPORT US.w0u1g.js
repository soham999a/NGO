$w.onReady(function () {
    // 1. Donation Amount Selection logic
    // IDs for buttons: #amt10, #amt50, #amt100
    // ID for the description text: #impactDesc
    
    $w("#amt10").onClick(() => { updateDonation(10, "Provides books for one student."); });
    $w("#amt50").onClick(() => { updateDonation(50, "Funds a classroom STEM kit."); });
    $w("#amt100").onClick(() => { updateDonation(100, "Supports a digital literacy hub for a month."); });
});

function updateDonation(amount, description) {
    const activeColor = "#FF8C00"; // Orange
    const inactiveColor = "#1A2B4C"; // Navy

    // Update the description text
    $w("#impactDesc").text = description;
    $w("#impactDesc").show("fade");

    // Reset all buttons and highlight the active one
    const buttons = ["#amt10", "#amt50", "#amt100"];
    buttons.forEach(id => {
        $w(id).style.backgroundColor = (id === `#amt${amount}`) ? activeColor : "transparent";
        $w(id).style.color = (id === `#amt${amount}`) ? "#FFFFFF" : inactiveColor;
    });
}