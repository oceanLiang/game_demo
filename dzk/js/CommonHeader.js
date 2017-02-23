
/*  基于ajax请求的同步引用其他js
*/
 
function GetHttpRequest() {
    if (window.XMLHttpRequest) // Gecko
        return new XMLHttpRequest();
    else if (window.ActiveXObject) // IE
        return new ActiveXObject("MsXml2.XmlHttp");
}

function ajaxPage(sId, url) {
    var oXmlHttp = GetHttpRequest();
    oXmlHttp.onreadystatechange = function () {
        if (oXmlHttp.readyState == 4) {
            includeJS(sId, url, oXmlHttp.responseText);
        }
    }
    oXmlHttp.open('GET', url, false);//同步操作
    oXmlHttp.send(null);
}


function includeJS(sId, fileUrl, source) {
    if ((source != null) && (!document.getElementById(sId))) {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript.id = sId;
        oScript.text = source;
        oHead.appendChild(oScript);
    }
}
if (GameName == 'youxizhongxin') {
   // ajaxPage("scrview", "js/zepto.min.js");
} else {
   // ajaxPage("scrview", "js/zepto.min.js");
}
//time 单位天
function cookie(name, value, time) {
    if (name) {
        if (value) {
            if (time) {
                var date = new Date();

                date.setTime(date.getTime() + 864e5 * time),
                time = date.toGMTString();

            }
            return document.cookie = name + "=" + escape(toStr(value)) + (time ? "; expires=" + time + (arguments[3] ? "; domain=" + arguments[3] + (arguments[4] ? "; path=" + arguments[4] + (arguments[5] ? "; secure" : "") : "") : "") : ""), !0;
        }
        return value = document.cookie.match("(?:^|;)\\s*" + name.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") + "=([^;]*)"), value = value && "string" == typeof value[1] ? unescape(value[1]) : !1, (/^(\{|\[).+\}|\]$/.test(value) || /^[0-9]+$/g.test(value)) && eval("value=" + value), value;
    }
    var data = {};
    value = document.cookie.replace(/\s/g, "").split(";");
    for (var i = 0; value.length > i; i++) name = value[i].split("="), name[1] && (data[name[0]] = unescape(name[1]));
    return data;
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}




if (sharedomain.length >= 1 && sharedomain != window.location.host) {

    if (window.location.href.indexOf("?") >= 0) {

        shareurl = window.location.href.replace(window.location.host, sharedomain) + "&directto=" + encodeURI(window.location.host);
    } else {

        shareurl = window.location.href.replace(window.location.host, sharedomain) + "?directto=" + encodeURI(window.location.host);
    }
}









 

function toStr(obj) {
    if (typeof obj == 'object') {
        return JSON.stringify(obj);
    } else {
        return obj;
    }
    return '';
}




var dsDIV = " <div id=\"divuserds\" style=\"display:none; position:absolute;left:0px;top:0px; margin:auto; width:100%;height:100%;opacity: 1;  z-index:99999999;\">";
dsDIV += " <div style=\"position:relative;width:80%; color:#faca9f; background-color:#e1544a; text-align:center; margin:auto; margin-top:5%;-moz-border-radius: 15px;   -webkit-border-radius: 15px; border-radius:15px;  \">";
dsDIV += "  <span onclick=\"hidenDIVds()\" style=\"text-align:right;float:right;margin-right:15px;margin-top:10px;\">X</span>  ";
dsDIV += "   <br><br>";
dsDIV += "    <span style=\"font-size:30px;\">游戏打赏</span>";
dsDIV += "   <br /><br><br>";
dsDIV += "  <a onclick=\"_czc.push(['_trackEvent', 'all', 'ds', 'click', '1', '7']);\" href=\"" + paymenturl + "/example/payment.aspx?total_fee=20&type=88\" style='text-decoration:none;'> <div style=\" color:black; padding-top:35px; font-size:36px; -moz-border-radius: 50%; background-color:#dcbc83; text-align:center;vertical-align:central; width:120px;height:85px;margin:auto;  -webkit-border-radius: 50%; border-radius:50%; border:1px solid #f8be89; \">";
dsDIV += "   打赏";
dsDIV += "   </div></a>";
dsDIV += "   <br>";
dsDIV += "   <span onclick=\"hidenDIVds()\">果断拒绝>></span>";
dsDIV += "   <br>";
dsDIV += "   <br><br>";
dsDIV += "   <span id=\"divtimer\" style=\"font-size:18px; color:#ccc;\">(10)秒后自动关闭打赏按钮..</span>";
dsDIV += "   <br><br>";
dsDIV += " </div>";
dsDIV += "</div>";



dsDIV += " <div id=\"divuserds2\" style=\"display:none; position:absolute;left:0px;top:0px;background-color:#000; margin:auto; width:100%;height:100%;opacity: 0.8;  z-index:99999998;\">";
 
dsDIV += "</div>";


document.write(dsDIV);
var sjns = 10, sjnt;
function sjntimes() {
    sjns--;
    document.getElementById("divtimer").innerText = "(" + sjns + ")秒后自动关闭打赏按钮..";
    sjnt = setTimeout('sjntimes();', 1000);
    if (sjns <= 0) {
        sjns = 10;
        clearTimeout(sjnt);
        hidenDIVds();
    }
}


function hidenDIVds() {

    document.getElementById("divuserds").style.display = "none";
    document.getElementById("divuserds2").style.display = "none";
}
function showDIVds() {
     document.getElementById("divuserds").style.display = "block";
    // clearTimeout(sjnt);
    // sjntimes();
	/*
	if (GameName) {
        var cookename = 'isFirst' + GameName;
        var bast = cookie(cookename);
        console.log("bast:" + cookename);
        if (bast == '3') {//第4次以后就不弹了

        }
        else if (bast == '2') {//第3次  15%概率
            var rund = Math.random();
            if (rund <= 0.15) {
                _czc.push(['_trackEvent', 'all', 'ds', 'dsshow3', '1', '7']);
                document.getElementById("divuserds").style.display = "block";
                document.getElementById("divuserds2").style.display = "block";
                clearTimeout(sjnt);
                sjntimes();
                cookie(cookename, 3, 1);
            }

        } else if (bast == '1') { //第2次  40%概率
            var rund = Math.random();
            if (rund <= 0.4) {
                _czc.push(['_trackEvent', 'all', 'ds', 'dsshow2', '1', '7']);
                document.getElementById("divuserds").style.display = "block";
                document.getElementById("divuserds2").style.display = "block";
                clearTimeout(sjnt);
                sjntimes();
                cookie(cookename, 2, 1);
            }
        } else { //第一次  不弹

            cookie(cookename, 1, 1);
        }

    } else {
        alert(GameName);
    }
    */
}
 
