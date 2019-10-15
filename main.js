$(document).ready(function(){
    $(".container").on("click", "li", function(e) {
        $(".content").hide()
        $(this).find('.content').show()

    })
})



// $(document).ready(function(){
//     $(".container").on("click", "li", function(e) {
//         $(".content").remove()
//         $(this).find('.content').add()

//     })
// })