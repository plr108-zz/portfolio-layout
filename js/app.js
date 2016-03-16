$(".project").click(function() {
    if ($(this).find("a").length) {
        window.open("http://plr108.github.io/ballpark-map/index.html", "_blank");
    }
});

$(".project").hover(function() {
        $(this).find(".project-title").css("text-decoration", "underline");
        var titleDiv = $(this).find(".project-title");
        $(this).find(".project-description").css("text-decoration", "underline");
        var descriptionDiv = $(this).find(".project-description");

        $(this).find(".project-repo").hover(function() {
            titleDiv.css("text-decoration", "none");
            descriptionDiv.css("text-decoration", "none");
        },
        function() {
            titleDiv.css("text-decoration", "underline");
            descriptionDiv.css("text-decoration", "underline");
        });
    },
    function() {
        $(this).find(".project-title").css("text-decoration", "none");
        $(this).find(".project-description").css("text-decoration", "none");
    });


$(".project-repo").click(function() {
    if ($(this).find("a").length) {
        window.open("https://github.com/plr108/ballpark-map", "_blank");
    }
});
