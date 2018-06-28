// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devouredBurger = $(this).data("devoured");

        var newBurgerState = {
            devoured: devouredBurger
        };

        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function() {
            console.log("changed burger state to ", devouredBurger);
            // Reload the page to get an updated status of burgers
            location.reload();
        });

    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burgerName: $("#burger_name").val().trim()
        };

        // send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a new burger");
            // Reload the page to get an updated list
            location.reload();
        });
    });

});