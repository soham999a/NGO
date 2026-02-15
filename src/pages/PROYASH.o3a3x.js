$w.onReady(function () {
    // 1. Tab Switching Logic
    // Create 3 buttons: #tabBtn1, #tabBtn2, #tabBtn3
    // Create 3 Multi-State Boxes or Groups: #state1, #state2, #state3
    
    $w("#tabBtn1").onClick(() => { switchTab(1); });
    $w("#tabBtn2").onClick(() => { switchTab(2); });
    $w("#tabBtn3").onClick(() => { switchTab(3); });
});

function switchTab(tabNum) {
    const totalTabs = 3;
    const activeColor = "#FF8C00"; // Brand Orange
    const inactiveColor = "#1A2B4C"; // Brand Navy

    for (let i = 1; i <= totalTabs; i++) {
        if (i === tabNum) {
            $w(`#state${i}`).show();
            $w(`#tabBtn${i}`).style.backgroundColor = activeColor;
            $w(`#tabBtn${i}`).style.color = "#FFFFFF";
        } else {
            $w(`#state${i}`).hide();
            $w(`#tabBtn${i}`).style.backgroundColor = "transparent";
            $w(`#tabBtn${i}`).style.color = inactiveColor;
        }
    }
}