$(document).ready(function() {
    let progressMax = $(".content__task-item progress").attr("max");
    $(".content__task-item progress").siblings(".content__progress ").children(".content__progress-value").html(progressMax)

    // // Open active
    // $(".content__active-btn.open").click(function() {
    //         openActive()
    //     })
    //     // Close active
    // $(".content__active-btn.close").click(function() {
    //     closeActive()
    // })

    // // Open tasks
    // $(".content__task-btn.open").click(function() {
    //         openTask()
    //     })
    //     // Close tasks
    // $(".content__task-btn.close").click(function() {
    //     closeTask()
    // })

    // // Open tt
    // $(".content__tt-btn.open").click(function() {
    //         openTt()
    //     })
    //     // Close tt
    // $(".content__tt-btn.close").click(function() {
    //     closeTt()
    // })

    // // Open staff
    // $(".content__staff-all.open").click(function() {
    //         openStaff()
    //     })
    //     // Close staff
    // $(".content__staff-all.close").click(function() {
    //     closeStaff()
    // })
})


function range(el, max) {
    let val = $(el).val();
    val = (val / max) * 100;
    $(el).css({
        'background': "-webkit-linear-gradient(left, #FF4D4E 0%, #FF4D4E " + val + "%, #F1F3F6 " + val + "%, #F1F3F6 100%)"
    });
}

// function openActive() {
//     $(".content__active-btn.open").hide();
//     $(".content__active-btn.close").show();
//     $(".content__active-hidden-items").slideToggle();
//     $(".content__active").addClass("active-block");
//     $(".modal-bg").show();
// }

// function closeActive() {
//     $(".content__active-btn.open").show();
//     $(".content__active-btn.close").hide();
//     $(".content__active").removeClass("active-block");
//     $(".modal-bg").hide();
//     $(".content__active-hidden-items").slideToggle();
// }

// function openTask() {
//     $(".content__task-btn.open").hide();
//     $(".content__task-btn.close").show();
//     $(".content__task-hidden-items").slideToggle();
//     $(".content__task").addClass("active-block");
//     $(".modal-bg").show();
// }

// function closeTask() {
//     $(".content__task-btn.open").show();
//     $(".content__task-btn.close").hide();
//     $(".content__task").removeClass("active-block");
//     $(".modal-bg").hide();
//     $(".content__task-hidden-items").slideToggle();
// }

// function openTt() {
//     $(".content__tt-btn.open").hide();
//     $(".content__tt-btn.close").show();
//     $(".content__tt-hidden-items").slideToggle();
//     $(".content__tt").addClass("active-block");
//     $(".modal-bg").show();
// }

// function closeTt() {
//     $(".content__tt-btn.open").show();
//     $(".content__tt-btn.close").hide();
//     $(".content__tt").removeClass("active-block");
//     $(".modal-bg").hide();
//     $(".content__tt-hidden-items").slideToggle();
// }

// function openStaff() {
//     $(".content__staff-all.open").hide();
//     $(".content__staff-all.close").show();
//     $(".content__staff-hidden-items").slideToggle();
//     $(".content__staff").addClass("active-block");
//     $(".modal-bg").show();
// }

// function closeStaff() {
//     $(".content__staff-all.open").show();
//     $(".content__staff-all.close").hide();
//     $(".content__staff").removeClass("active-block");
//     $(".modal-bg").hide();
//     $(".content__staff-hidden-items").slideToggle();
// }