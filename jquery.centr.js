/*
 *          
 *                         _                  _ ____  
 *           ___ ___ _ __ | |_ _ __          | / ___| 
 *          / __/ _ \ '_ \| __| '__|      _  | \___ \ 
 *         | (_|  __/ | | | |_| |     _  | |_| |___) |
 *          \___\___|_| |_|\__|_|    (_)  \___/|____/ 
 *                                            
 *                                                                                                                
 *          
 *          centr.js
 *          http://boeddo.com/centr
 *          A minimal plugin to center objects.
 *          
 *          Copyright (c) 2014 Quincy Kools
 *          Licensed under the MIT license.
 *          
 *          Title generated using "Ivrit"
 *          http://patorjk.com/software/taag/#p=display&f=Ivrit&t=centr . JS
 *          
 *          Made by Quincy Kools, www.boeddo.com.
 */

;(function ($, window, undefined) {

  "use strict";

  $.fn.centr = function(options) {


      var defaults = {

          //  Options
        axisX: true,  //     [     center horizontal      ]
        axisY:  false, //    [     center vertical        ]
        addClass: true, //   [     add class "centered"   ]
        textCenter: false // [     center the text        ]
      }

    var settings = $.extend({}, defaults, options);

      //  X-axis
    if(settings.axisX) {
      this.each(function() {
        var object = $(this);
        var objWidth = object.width();
        var halfWidth = objWidth / 2;
        object.css({
          "margin-left": - halfWidth,
          "position": "relative",
          "left": "50%",
        });
      });
    }

      //  Y-axis
    if(settings.axisY) {
      this.each(function() {
        var object = $(this);
        var objHeight = object.height();
        var halfHeight = objHeight / 2;
        object.css({
          "margin-top": - halfHeight,
          "position": "relative",
          "top": "50%",
        });
      });
    }

      //  Class name
    if(settings.addClass) {
      this.each(function() {
        var object = $(this);
        object.addClass("centered");
      });
    }

      //  Center text
    if(settings.textCenter) {
      this.each(function() {
        var object = $(this);
        object.css("text-align", "center");
      });
    }

  }

})(jQuery, window);
