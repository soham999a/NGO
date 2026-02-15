$w.onReady(function () {
    // 1. Pillar Hover Effects
    // Assuming you have 3 pillars: #pillar1, #pillar2, #pillar3
    const pillars = ["#pillar1", "#pillar2", "#pillar3"];

    pillars.forEach(id => {
        if ($w(id).length > 0) {
            $w(id).onMouseIn(() => {
                // Glow effect with brand Orange
                $w(id).style.shadow = "0px 0px 10px #FF8C00";
            });
            $w(id).onMouseOut(() => {
                $w(id).style.shadow = "none";
            });
        }
    });

    // 2. Simple Image Gallery Animation
    // If you have a gallery of program photos named #programGallery
    if ($w("#programGallery").length > 0) {
        $w("#programGallery").onViewportEnter(() => {
            $w("#programGallery").show("slide", {direction: "bottom"});
        });
    }
});