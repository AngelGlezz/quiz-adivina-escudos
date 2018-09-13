var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "Barcelona",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Barca1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Barca2.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Atlas",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Atlas2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Atlas1.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Bayern Munich",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Bayern1.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Bayern2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Chivas",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chivas2.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chivas1.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Brasil",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Brasil2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Brasil1.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Chelsea",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chelsea2.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chelsea1.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "México",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Mexico2.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Mexico1.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Real Madrid",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Real1.png'>",
				          "tipo": "false"
				        },{
				          "respuesta": "<img class='option' src='images/respuestas/Real2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Veracruz",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Tibu2.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Tibu1.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Manchester United",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/United2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/United1.png'>",
				          "tipo": "true"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			$(this > '.option').css('opacity', '0');
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
			if(preguntas.length == respuestas_array.length){
				
				$.each(respuestas_array, function( i, item ) {
				  	if(item!=undefined)
				  		respuesta_num++;
				});
				  	
				console.log("respuestas " + respuesta_num);
				console.log(respuesta_num);
				finish_test();
			}
		});
});

var totalfb = "";
function finish_test(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();

	$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=3){
	  	msg="¿Seguro que te gusta el futbol? Creo que lo tuyo es el rugby o alguno de esos deportes que nadie conoce…";
	  	totalfb = "mal";
	  	$("#indepth_resultados").css({
			"background-image": "url("+urlIndepth+"images/Resultados-1.jpg)"
		});
  	}

  	if(aciertos>=4 && aciertos<=7){
	  	msg="Podrías mejorar. Te hizo falta echarle Yaytsa";
	  	totalfb = "maso";
	  	$("#indepth_resultados").css({
			"background-image": "url("+urlIndepth+"images/Resultados-2.jpg)"
		});
  	}

  	if(aciertos>=8){
	  	msg="¡Ni Mister Chip sabe tanto! ¡No sé qué haces contestando este quiz! ¡Tú deberías trabajar en la FIFA!";
	  	totalfb = "bien";
	  	$("#indepth_resultados").css({
			"background-image": "url("+urlIndepth+"images/Resultados-3.jpg)"
		});
  	}
  	
  	$(".indepth_result_container").html(msg);

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total <= 4) {
			text = encodeURIComponent("¿Seguro que te gusta el futbol? Creo que lo tuyo es el rugby o alguno de esos deportes que nadie conoce…");
		} else if (total >= 5 && total <= 7) {
			text = encodeURIComponent("Podrías mejorar. Te hizo falta echarle Yaytsa");
		} else if (total >= 8) {
			text = encodeURIComponent("¡Ni Mister Chip sabe tanto! ¡No sé qué haces contestando este quiz! ¡Tú deberías trabajar en la FIFA!");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-juan-escudos");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuiz&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-juan-escudos?m="+totalfb);
		console.log(url);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


