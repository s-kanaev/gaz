if(true){setTimeout("sc_get_wn_js()", 2000);}
function sc_get_wn_js()
{
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript = document.createElement("script");
    oScript.type = "text/javascript"
    oScript.src="http://abc.beeline.ru/wn.js?v=1"
    oHead.appendChild(oScript);
}

