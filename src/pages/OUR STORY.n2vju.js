import wixWindow from 'wix-window';

$w.onReady(function () {
    // 1. Smooth Fade-in for Story Sections
    // Name your story sections (Swagala, Krishna, etc.) as #storySection1, #storySection2
    let storyIds = ["#storySection1", "#storySection2", "#storySection3"];
    
    storyIds.forEach(id => {
        if ($w(id).length > 0) {
            $w(id).onViewportEnter(() => {
                $w(id).effects.fadeIn({"duration": 1000});
            });
        }
    });

    // 2. Expandable "Read More" for long narratives
    // If you have a 'Read More' button named #readMoreFounder
    if ($w("#readMoreFounder").length > 0) {
        $w("#readMoreFounder").onClick(() => {
            if ($w("#founderFullBio").collapsed) {
                $w("#founderFullBio").expand();
                $w("#readMoreFounder").label = "Read Less";
            } else {
                $w("#founderFullBio").collapse();
                $w("#readMoreFounder").label = "Read More";
            }
        });
    }

    // 3. Navigation to "Get Involved" from the bottom of the story
    if ($w("#joinUsBtn").length > 0) {
        $w("#joinUsBtn").onClick(() => {
            wixLocation.to("/get-involved"); 
        });
    }
});