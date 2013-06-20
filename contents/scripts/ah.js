/**
 * Created with JetBrains WebStorm.
 * User: hulstkan
 * Date: 19.06.13
 * Time: 13:00
 * To change this template use File | Settings | File Templates.
 */

(function (window, document, undefined) {

    window.AHBLOG = (function () {

        var naviToggle;
        var naviList;
        var mainNavi;
        var naviIsOn = false;
        var baseMainNaviClasses;
        var baseNaviListClasses;

        var addEvent = function (el, evt, fn, bubble) {
            if ("addEventListener" in el) {
                try {
                    el.addEventListener(evt, fn, bubble);
                } catch (e) {
                    if (typeof fn === "object" && fn.handleEvent) {
                        el.addEventListener(evt, function (e) {
                            fn.handleEvent.call(fn, e);
                        }, bubble);
                    } else {
                        throw e;
                    }
                }
            } else if ("attachEvent" in el) {
                if (typeof fn === "object" && fn.handleEvent) {
                    el.attachEvent("on" + evt, function () {
                        fn.handleEvent.call(fn);
                    });
                } else {
                    el.attachEvent("on" + evt, fn);
                }
            }
        };

        /*
         * toggles the main navigation on mobile devices
         */
        var toggleNavi = function(event) {
            var cssClasses,
                baseCssClasses;
            if (naviIsOn) {
                cssClasses = baseNaviListClasses;
                baseCssClasses = baseMainNaviClasses;
            } else {
                cssClasses = baseNaviListClasses + " shown";
                baseCssClasses = baseMainNaviClasses + " shown";
            }
            naviList.className = cssClasses;
            mainNavi.className = baseCssClasses;
            naviIsOn = !naviIsOn;
        };

        /*
         * get references to nodes that are involved in navigation
         * save the default css classes for later use
         */
        var init = function () {

            //the main navi container node
            mainNavi = document.getElementById('mainNavi');
            baseMainNaviClasses = mainNavi.className;

            //the navi list
            naviList = document.getElementById("naviList");
            baseNaviListClasses = naviList.className;

            //the navi toggle element
            naviToggle = document.getElementById("naviToggle");

            addEvent(naviToggle, 'touchstart', toggleNavi, false);
        }

        return {
            init: init
        }
    })();

    window.onload = function() {
        AHBLOG.init();
    };
})
(window, document);
