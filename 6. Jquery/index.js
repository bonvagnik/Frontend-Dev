$("h1").addClass("changehead");

// $("button").click(function(i){
//     $("h1").css("color","red");
// });
// $(document).keypress(function(o){
//     $("h1").text(o.key);
// });
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
