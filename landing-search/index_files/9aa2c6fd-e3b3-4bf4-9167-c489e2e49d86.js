// Copyright 2006-2017 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};

	
(function (d) {
	var dom="",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						return false;
					})()
})(window.location.hostname.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var e in T){var r=T[e];r.collect(t)&&r.errors.push({message:n,url:t,lineno:o})}return y?y(n,t,o):!1}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function e(n){++n.sampled>n.repeats?p(n.name):r(n)}function r(n){var t=n.reporter()||{},o=n.errors.splice(0),e=n.level,r=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":e,errors:encodeURIComponent(JSON.stringify(o))};r&&e!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(r+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+b[o]+"="+t[o];return n}function a(n,o,e){var r=S.sendBeacon,i=function(n){n.errors=e.concat(n.errors)};if(t(r))r.call(S,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function s(n){T[n]&&(T[n].starting=!0)}function f(n,o,e){var r=window.ClickTaleMonitor;r&&(b.monitorState=40,b.isMonitoring=42,t(r.getPid)&&g(C,r.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(r.getState)&&r.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(r.isMonitoring)&&r.isMonitoring()}},o||5e3,e||1))}function m(){p(C)}function g(t,o,e,r,i,a,l){T[t]=T[t]||new v(t,o,e,r,i,a,l),h||(y=window.onerror,window.onerror=n,h=!0)}function p(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;h=!1}function v(n,t,o,r,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(r)},c.sampler=setInterval(function(){e(c)},a)}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){s(n)}}}var h,y,T={},S=navigator,k="info",C="monitor",b={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(C,f,m)}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2017 ClickTale Ltd., US Patent Pending
// PID: 38170
// WR destination: www02
// WR version: latest
// Recording ratio: 0
(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();

(function(){}());

if (typeof(ClickTaleHooks) == 'undefined') {
    ClickTaleHooks = {
        Hooks : ['PreLoad', 'AfterPreLoad', 'PreRecording', 'AfterPreRecording', 'AdditionalCustomCode', 'AfterAdditionalCustomCode'],
        RunHook : function (hookName) {
			if (typeof window["ClickTale" + hookName + "Hook"] === "function") window["ClickTale" + hookName + "Hook"]();
            var s = 'ClickTaleSettings'; if (!ClickTaleHooks.IsValidHookName(hookName) || !(s in window) || !('PDCHooks' in window[s]) || !(hookName in window[s].PDCHooks)) return;
            var c = window[s].PDCHooks[hookName]; if (c instanceof Array) for (var i=0;i<c.length;i++) if (typeof(c[i]) == "function") c[i](); 
            if (typeof(c) == "function") c();
        },
		IsValidHookName : function (hookName) {
			if(Array.prototype.indexOf) { return ClickTaleHooks.Hooks.indexOf(hookName) >= 0; }
			for(var i = 0; i < ClickTaleHooks.Hooks.length; i++) { if(ClickTaleHooks.Hooks[i] === hookName) { return true; } } return false;
		}
    }
}    
	

window.ClickTaleIsXHTMLCompliant = false;


ClickTaleHooks.RunHook('PreLoad');
// Start of user-defined pre WR code (PreLoad)

// End of user-defined pre WR code
ClickTaleHooks.RunHook('AfterPreLoad');

var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource;


if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}

window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=38170, 
		Ratio=0, 
		PartitionPrefix="www02",
		SubsId=103329;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	ClickTaleHooks.RunHook('PreRecording');
	// Start of user-defined header code (PreInitialize)
	
	// End of user-defined header code (PreInitialize)
    ClickTaleHooks.RunHook('AfterPreRecording');
	
	
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	ClickTaleHooks.RunHook('AdditionalCustomCode');
	// Start of user-defined footer code
	
	// End of user-defined footer code
	ClickTaleHooks.RunHook('AfterAdditionalCustomCode');
};
 
document.write(unescape("%3Cdiv%20id%3D%22ClickTaleDiv%22%20style%3D%22display%3A%20none%3B%22%3E%3C/div%3E"));

if (document.location.protocol != 'https:')
{


ClickTaleGlobal.init.isAllowed && document.write(unescape("%3Cscript%20src='"+window.ClickTaleScriptSource+"WR-latest.js"+"'%20type='text/javascript'%20crossorigin='anonymous'%3E%3C/script%3E"));


}

!function(){function e(){window.addEventListener&&addEventListener("message",t,!1)}function t(e){var t,o=new RegExp("(clicktale.com|qa-core.app.clicktale.com)($|:)"),i=new RegExp("qa-core.app.clicktale.com"),c=!1,a=e.origin;try{t=JSON.parse(e.data)}catch(l){return}o.test(e.origin)!==!1&&(window.ct_ve_parent_window=e.source,i.test(e.origin)===!0&&(c=!0),"CT_testRules"==t.name&&(sessionStorage.setItem("CT_testRules",JSON.stringify(t.params.testRules)),console.log((new Date).toJSON(),"PostPTC: testRules ",sessionStorage.getItem("CT_testRules")),window.ct_ve_parent_window.postMessage({name:"testRulesRecieved",params:{}},"*")),"CTload_ve"===t["function"]&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&n(a,c))}function o(e){return document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",e):document.createElement(e)}function n(e,t){var n=o("script");n.setAttribute("type","text/javascript"),n.setAttribute("id","ctVisualEditorClientModule");var i;i=t?document.location.protocol+"//qa-core.app.clicktale.com/VisualEditor/Client/dist/veClientModule.js":document.location.protocol+"//"+e.match(/subs\d*/)[0]+".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js",n.src=i,document.getElementById("ctVisualEditorClientModule")||document.body.appendChild(n)}try{var i=window.chrome,c=window.navigator&&window.navigator.vendor;null!==i&&void 0!==i&&"Google Inc."===c&&e()}catch(a){}}();
