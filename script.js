$(document).ready(function () {
	$(document).matrixTicker();
	$("#restart").on("click", function () {
	  $(document).matrixTicker();
	});
  });
  
  $.fn.extend({
	matrixTicker: function () {
	  $("#restart").hide();
	  setTimeout(function () {
		$("#hello-world").html("H");
	  }, 0);
	  setTimeout(function () {
		$("#hello-world").html("He");
	  }, 300);
	  setTimeout(function () {
		$("#hello-world").html("Hel");
	  }, 600);
	  setTimeout(function () {
		$("#hello-world").html("Hell");
	  }, 900);
	  setTimeout(function () {
		$("#hello-world").html("Hello");
	  }, 1200);
	  setTimeout(function () {
		$("#hello-world").html("Hello,");
	  }, 1500);
	  setTimeout(function () {
		$("#hello-world").html("Hello, ");
	  }, 1800);
	  setTimeout(function () {
		$("#hello-world").html("Hello, W");
	  }, 2100);
	  setTimeout(function () {
		$("#hello-world").html("Hello, Wo");
	  }, 2400);
	  setTimeout(function () {
		$("#hello-world").html("Hello, Wor");
	  }, 2700);
	  setTimeout(function () {
		$("#hello-world").html("Hello, Worl");
	  }, 3000);
	  setTimeout(function () {
		$("#hello-world").html("Hello, World");
	  }, 3300);
	  setTimeout(function () {
		$("#hello-world").html("Hello, World.");
	  }, 3400);
	  setTimeout(function () {
		$("#hello-world").html("Hello, World..");
	  }, 3500);
	  setTimeout(function () {
		$("#hello-world").html("Hello, World...");
	  }, 3600);
  
	  //
	  setTimeout(function () {
		$("#hello-world").html("T");
	  }, 5600);
	  setTimeout(function () {
		$("#hello-world").html("Th");
	  }, 5900);
	  setTimeout(function () {
		$("#hello-world").html("The");
	  }, 6200);
	  setTimeout(function () {
		$("#hello-world").html("The ");
	  }, 6500);
	  setTimeout(function () {
		$("#hello-world").html("The M");
	  }, 6800);
	  setTimeout(function () {
		$("#hello-world").html("The Ma");
	  }, 7100);
	  setTimeout(function () {
		$("#hello-world").html("The Mat");
	  }, 7400);
	  setTimeout(function () {
		$("#hello-world").html("The Matr");
	  }, 7700);
	  setTimeout(function () {
		$("#hello-world").html("The Matri");
	  }, 8000);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix");
	  }, 8300);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix ");
	  }, 8700);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix h");
	  }, 9000);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix ha");
	  }, 9300);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has");
	  }, 9600);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has ");
	  }, 9900);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has y");
	  }, 10200);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has yo");
	  }, 10500);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has you");
	  }, 10800);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has you.");
	  }, 10900);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has you..");
	  }, 11000);
	  setTimeout(function () {
		$("#hello-world").html("The Matrix has you...");
		$("#restart").show();
	  }, 11100);
	}
  });