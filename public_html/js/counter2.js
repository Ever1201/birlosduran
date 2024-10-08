$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});

function Numeros(string){//Solo numeros
            var out = '';
            var filtro = '1234567890';//Caracteres validos
          
            //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
            for (var i=0; i<string.length; i++)
              if (filtro.indexOf(string.charAt(i)) != -1) 
                    //Se añaden a la salida los caracteres validos
              out += string.charAt(i);
          
            //Retornar valor filtrado
            return out;
          } 


        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
        
window.onload = ()=>{
            // $(selector).countMe(delay,speed)
            $("#num1").countMe(1,20);
            $("#num2").countMe(1, 600);
        };

 $(".count").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 6000,
                easing: "swing",
                step: function (now) {
                now = Number(Math.ceil(now)).toLocaleString('en');
                                        $(this).text(now);
                },
            }
            );
        });
function lenguaje(){
            eng = document.getElementById("video_eng");
            esp = document.getElementById("video_esp");
            check = document.getElementById("chk_id");
            bmx = document.getElementById("bandera_mx");
            busa = document.getElementById("bandera_usa");

            if (check.checked) {
                esp.classList.remove("video_esp");
                esp.classList.add("video_eng");
                eng.classList.remove("video_eng");
                eng.classList.add("video_esp");
                bmx.classList.remove("bandera1");
                bmx.classList.add("bandera2");
                busa.classList.remove("bandera2");
                busa.classList.add("bandera1");
            } else {
                esp.classList.remove("video_eng");
                esp.classList.add("video_esp");
                eng.classList.remove("video_esp");
                eng.classList.add("video_eng");
                bmx.classList.remove("bandera2");
                bmx.classList.add("bandera1");
                busa.classList.remove("bandera1");
                busa.classList.add("bandera2");
            }

        }

function overback_bir(){
            document.getElementById("faster_l").style.visibility = "hidden";
            document.getElementById("faster_l").style.transition = "0.1s";
            document.getElementById("ert_l").style.visibility = "hidden";
            document.getElementById("ert_l").style.transition = "0.1s";
            document.getElementById("maxi_img").style.visibility = "hidden";
            document.getElementById("maxi_img").style.transition = "0.1s";
            document.getElementById("dis-bg").style.backgroundColor = "red";
            document.getElementById("dis-bg").style.transition = "1s";

        }

        function outback_bir(){
            document.getElementById("dis-bg").style.backgroundColor = "rgb(236, 236, 236)";
            document.getElementById("dis-bg").style.transition = "1s";
            document.getElementById("faster_l").style.visibility = "visible";
            document.getElementById("faster_l").style.transition = "0.1s";
            document.getElementById("ert_l").style.visibility = "visible";
            document.getElementById("ert_l").style.transition = "0.1s";
            document.getElementById("maxi_img").style.visibility = "visible";
            document.getElementById("maxi_img").style.transition = "0.1s";


        }

        function overback_faster() {
            document.getElementById("birt_l").style.visibility = "hidden";
            document.getElementById("birt_l").style.transition = "0.1s";
            document.getElementById("ert_l").style.visibility = "hidden";
            document.getElementById("ert_l").style.transition = "0.1s";
            document.getElementById("maxi_img").style.visibility = "hidden";
            document.getElementById("maxi_img").style.transition = "0.1s";
            document.getElementById("dis-bg").style.backgroundColor = "#e8dc57" //#A0A9CC
            document.getElementById("dis-bg").style.transition = "1s";
        }

        function outback_faster(){
            document.getElementById("dis-bg").style.backgroundColor = "rgb(236, 236, 236)";
            document.getElementById("dis-bg").style.transition = "1s";
            document.getElementById("birt_l").style.visibility = "visible";
            document.getElementById("birt_l").style.transition = "0.1s";
            document.getElementById("ert_l").style.visibility = "visible";
            document.getElementById("ert_l").style.transition = "0.1s";
            document.getElementById("maxi_img").style.visibility = "visible";
            document.getElementById("maxi_img").style.transition = "0.1s";
        }

        function overback_ert() {
            document.getElementById("birt_l").style.visibility = "hidden";
            document.getElementById("birt_l").style.transition = "0.1s";
            document.getElementById("faster_l").style.visibility = "hidden";
            document.getElementById("faster_l").style.transition = "0.1s";
            document.getElementById("maxi_img").style.visibility = "hidden";
            document.getElementById("maxi_img").style.transition = "0.1s";
            document.getElementById("dis-bg").style.backgroundColor = "#A0A9CC" 
            document.getElementById("dis-bg").style.transition = "1s";
        }

        function outback_ert(){
            document.getElementById("dis-bg").style.backgroundColor = "rgb(236, 236, 236)";
            document.getElementById("dis-bg").style.transition = "1s";
            document.getElementById("birt_l").style.visibility = "visible";
            document.getElementById("birt_l").style.transition = "0.1s";
            document.getElementById("faster_l").style.visibility = "visible";
            document.getElementById("faster_l").style.transition = "0.1s";
            document.getElementById("maxi_img").style.visibility = "visible";
            document.getElementById("maxi_img").style.transition = "0.1s";
        }

        function overback_maxi() {
            document.getElementById("birt_l").style.visibility = "hidden";
            document.getElementById("birt_l").style.transition = "0.1s";
            document.getElementById("faster_l").style.visibility = "hidden";
            document.getElementById("faster_l").style.transition = "0.1s";
            document.getElementById("ert_l").style.visibility = "hidden";
            document.getElementById("ert_l").style.transition = "0.1s";
            document.getElementById("dis-bg").style.backgroundColor = "orange" 
            document.getElementById("dis-bg").style.transition = "1s";
        }

        function outback_maxi(){
            document.getElementById("dis-bg").style.backgroundColor = "rgb(236, 236, 236)";
            document.getElementById("dis-bg").style.transition = "1s";
            document.getElementById("birt_l").style.visibility = "visible";
            document.getElementById("birt_l").style.transition = "0.1s";
            document.getElementById("faster_l").style.visibility = "visible";
            document.getElementById("faster_l").style.transition = "0.1s";
            document.getElementById("ert_l").style.visibility = "visible";
            document.getElementById("ert_l").style.transition = "0.1s";
        }

var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                        return new bootstrap.Tooltip(tooltipTriggerEl)
                });
                
window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-H343REQERQ');
                


    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '585940172618671');
    fbq('track', 'PageView');
    
AOS.init();