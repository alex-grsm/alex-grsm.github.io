<<<<<<< HEAD
/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={333:()=>{if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(),function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;return t(this).one("bsTransitionEnd",(function(){i=!0})),setTimeout((function(){i||t(n).trigger(t.support.transition.end)}),e),this},t((function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})}))}(jQuery),function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){r.detach().trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target");s||(s=(s=o.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,""));var r=t(s);e&&e.preventDefault(),r.length||(r=o.closest(".alert")),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var n=t.fn.alert;t.fn.alert=function(e){return this.each((function(){var n=t(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)}))},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),function(t){"use strict";function e(e){return this.each((function(){var n=t(this),o=n.data("bs.button"),s="object"==typeof e&&e;o||n.data("bs.button",o=new i(this,s)),"toggle"==e?o.toggle():e&&o.setState(e)}))}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.3.6",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",n=this.$element,o=n.is("input")?"val":"html",s=n.data();e+="Text",null==s.resetText&&n.data("resetText",n[o]()),setTimeout(t.proxy((function(){n[o](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))}),this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(i){var n=t(i.target);n.hasClass("btn")||(n=n.closest(".btn")),e.call(n,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))}))}(jQuery),function(t){"use strict";function e(e){return this.each((function(){var n=t(this),o=n.data("bs.carousel"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide;o||n.data("bs.carousel",o=new i(this,s)),"number"==typeof e?o.to(e):r?o[r]():s.interval&&o.pause().cycle()}))}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.6",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var n=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(n)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",(function(){e.to(t)})):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,n){var o=this.$element.find(".item.active"),s=n||this.getItemForDirection(e,o),r=this.interval,a="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var c=s[0],h=t.Event("slide.bs.carousel",{relatedTarget:c,direction:a});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var d=t(this.$indicators.children()[this.getItemIndex(s)]);d&&d.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:c,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,o.addClass(a),s.addClass(a),o.one("bsTransitionEnd",(function(){s.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout((function(){l.$element.trigger(p)}),0)})).emulateTransitionEnd(i.TRANSITION_DURATION)):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(p)),r&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this};var o=function(i){var n,o=t(this),s=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var r=t.extend({},s.data(),o.data()),a=o.attr("data-slide-to");a&&(r.interval=!1),e.call(s,r),a&&s.data("bs.carousel").to(a),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),t(window).on("load",(function(){t('[data-ride="carousel"]').each((function(){var i=t(this);e.call(i,i.data())}))}))}(jQuery),function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each((function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!o&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),o||i.data("bs.collapse",o=new n(this,s)),"string"==typeof e&&o[e]()}))}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.6",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),e||o.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy((function(i,n){var o=t(n);this.addAriaAndCollapsedClass(e(o),o)}),this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(n){var o=t(this);o.attr("data-target")||n.preventDefault();var s=e(o),r=s.data("bs.collapse")?"toggle":o.data();i.call(s,r)}))}(jQuery),function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=(i=e.attr("href"))&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(o).each((function(){var n=t(this),o=e(n),s={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))})))}var n=".dropdown-backdrop",o='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.6",s.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var s=e(o),r=s.hasClass("open");if(i(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var a={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",a)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},s.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var s=e(n),r=s.hasClass("open");if(!r&&27!=i.which||r&&27==i.which)return 27==i.which&&s.find(o).trigger("focus"),n.trigger("click");var a=s.find(".dropdown-menu li:not(.disabled):visible a");if(a.length){var l=a.index(i.target);38==i.which&&l>0&&l--,40==i.which&&l<a.length-1&&l++,~l||(l=0),a.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each((function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new s(this)),"string"==typeof e&&n[e].call(i)}))},t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})).on("click.bs.dropdown.data-api",o,s.prototype.toggle).on("keydown.bs.dropdown.data-api",o,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),function(t){"use strict";function e(e,n){return this.each((function(){var o=t(this),s=o.data("bs.modal"),r=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new i(this,r)),"string"==typeof e?s[e](n):r.show&&s.show(n)}))}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy((function(){this.$element.trigger("loaded.bs.modal")}),this))};i.VERSION="3.3.6",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",(function(){n.$element.one("mouseup.dismiss.bs.modal",(function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)}))})),this.backdrop((function(){var o=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?n.$dialog.one("bsTransitionEnd",(function(){n.$element.trigger("focus").trigger(s)})).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(s)})))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy((function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")}),this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy((function(t){27==t.which&&this.hide()}),this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop((function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")}))},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy((function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))}),this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(i){var n=t(this),o=n.attr("href"),s=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),n.data());n.is("a")&&i.preventDefault(),s.one("show.bs.modal",(function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",(function(){n.is(":visible")&&n.trigger("focus")}))})),e.call(s,r,this)}))}(jQuery),function(t){"use strict";var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};e.VERSION="3.3.6",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),s=o.length;s--;){var r=o[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,(function(t,n){i[t]!=n&&(e[t]=n)})),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)):i.show())},e.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)):i.hide())},e.prototype.show=function(){var i=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!n)return;var o=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(a);c&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),d=s[0].offsetWidth,p=s[0].offsetHeight;if(c){var u=a,f=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+p>f.bottom?"top":"top"==a&&h.top-p<f.top?"bottom":"right"==a&&h.right+d>f.width?"left":"left"==a&&h.left-d<f.left?"right":a,s.removeClass(u).addClass(a)}var m=this.getCalculatedOffset(a,h,d,p);this.applyPlacement(m,a);var v=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(e.TRANSITION_DURATION):v()}},e.prototype.applyPlacement=function(e,i){var n=this.tip(),o=n[0].offsetWidth,s=n[0].offsetHeight,r=parseInt(n.css("margin-top"),10),a=parseInt(n.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,c=n[0].offsetHeight;"top"==i&&c!=s&&(e.top=e.top+s-c);var h=this.getViewportAdjustedDelta(i,e,l,c);h.left?e.left+=h.left:e.top+=h.top;var d=/top|bottom/.test(i),p=d?2*h.left-o+l:2*h.top-s+c,u=d?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(p,n[0][u],d)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(i){function n(){"in"!=o.hoverState&&s.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),i&&i()}var o=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(e.TRANSITION_DURATION):n(),this.hoverState=null,this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var i=(e=e||this.$element)[0],n="BODY"==i.tagName,o=i.getBoundingClientRect();null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var s=n?{top:0,left:0}:e.offset(),r={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},o,r,a,s)},e.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,i,n){var o={top:0,left:0};if(!this.$viewport)return o;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+n;a<r.top?o.top=r.top-a:l>r.top+r.height&&(o.top=r.top+r.height-l)}else{var c=e.left-s,h=e.left+s+i;c<r.left?o.left=r.left-c:h>r.right&&(o.left=r.left+r.width-h)}return o},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},e.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("bs."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide((function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null}))};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each((function(){var n=t(this),o=n.data("bs.tooltip"),s="object"==typeof i&&i;(o||!/destroy|hide/.test(i))&&(o||n.data("bs.tooltip",o=new e(this,s)),"string"==typeof i&&o[i]())}))},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.6",e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),(e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype)).constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=function(i){return this.each((function(){var n=t(this),o=n.data("bs.popover"),s="object"==typeof i&&i;(o||!/destroy|hide/.test(i))&&(o||n.data("bs.popover",o=new e(this,s)),"string"==typeof i&&o[i]())}))},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),function(t){"use strict";function e(i,n){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each((function(){var n=t(this),o=n.data("bs.scrollspy"),s="object"==typeof i&&i;o||n.data("bs.scrollspy",o=new e(this,s)),"string"==typeof i&&o[i]()}))}e.VERSION="3.3.6",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map((function(){var e=t(this),o=e.data("target")||e.attr("href"),s=/^#./.test(o)&&t(o);return s&&s.length&&s.is(":visible")&&[[s[i]().top+n,o]]||null})).sort((function(t,e){return t[0]-e[0]})).each((function(){e.offsets.push(this[0]),e.targets.push(this[1])}))},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return r!=(t=s[s.length-1])&&this.activate(t);if(r&&e<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)r!=s[t]&&e>=o[t]&&(void 0===o[t+1]||e<o[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",(function(){t('[data-spy="scroll"]').each((function(){var e=t(this);i.call(e,e.data())}))}))}(jQuery),function(t){"use strict";function e(e){return this.each((function(){var n=t(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new i(this)),"string"==typeof e&&o[e]()}))}var i=function(e){this.element=t(e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(n);this.activate(e.closest("li"),i),this.activate(a,a.parent(),(function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})}))}}},i.prototype.activate=function(e,n,o){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var r=n.find("> .active"),a=o&&t.support.transition&&(r.length&&r.hasClass("fade")||!!n.find("> .fade").length);r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),r.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var o=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),function(t){"use strict";function e(e){return this.each((function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof e&&e;o||n.data("bs.affix",o=new i(this,s)),"string"==typeof e&&o[e]()}))}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.6",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var o=this.$target.scrollTop(),s=this.$element.offset(),r=this.$target.height();if(null!=i&&"top"==this.affixed)return i>o&&"top";if("bottom"==this.affixed)return null!=i?!(o+this.unpin<=s.top)&&"bottom":!(t-n>=o+r)&&"bottom";var a=null==this.affixed,l=a?o:s.top;return null!=i&&i>=o?"top":null!=n&&l+(a?r:e)>=t-n&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,o=n.top,s=n.bottom,r=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(s=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof s&&(s=n.bottom(this.$element));var a=this.getState(r,e,o,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),c=t.Event(l+".bs.affix");if(this.$element.trigger(c),c.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-e-s})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",(function(){t('[data-spy="affix"]').each((function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)}))}))}(jQuery)},340:function(t,e,i){var n,o,s,r,a,l;(function(){"use strict";function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var s=t.prototype,r=this,a=r.EventEmitter;s.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t)for(i in e={},n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i]);else e=n[t]||(n[t]=[]);return e},s.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},s.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&((e={})[t]=i),e||i},s.addListener=function(t,i){var n,o=this.getListenersAsObject(t),s="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(s?i:{listener:i,once:!1});return this},s.on=i("addListener"),s.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},s.once=i("addOnceListener"),s.defineEvent=function(t){return this.getListeners(t),this},s.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},s.removeListener=function(t,i){var n,o,s=this.getListenersAsObject(t);for(o in s)s.hasOwnProperty(o)&&-1!==(n=e(s[o],i))&&s[o].splice(n,1);return this},s.off=i("removeListener"),s.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},s.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},s.manipulateListeners=function(t,e,i){var n,o,s=t?this.removeListener:this.addListener,r=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)s.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?s.call(this,n,o):r.call(this,n,o));return this},s.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},s.removeAllListeners=i("removeEvent"),s.emitEvent=function(t,e){var i,n,o,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)!0===(i=s[o][n]).once&&this.removeListener(t,i.listener),i.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},s.trigger=i("emitEvent"),s.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},s.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return r.EventEmitter=a,t},void 0!==(n=function(){return t}.apply(o={},[]))||(n=o)}).call(this),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var n=document.documentElement,o=function(){};n.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:n.attachEvent&&(o=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var l=function(){};n.removeEventListener?l=function(t,e,i){t.removeEventListener(e,i,!1)}:n.detachEvent&&(l=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}}),"function"==typeof(r={bind:o,unbind:l})?(a={id:"eventie/eventie",exports:{},loaded:!1},s=r.call(a.exports,i,a.exports,a),a.loaded=!0,void 0===s&&(s=a.exports)):s=r}(this),function(i,o){"use strict";l=function(t,e){return function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t){var e=[];if(function(t){return"[object Array]"==h.call(t)}(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e,i);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=o(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),l&&(this.jqDeferred=new l.Deferred);var r=this;setTimeout((function(){r.check()}))}function r(t){this.img=t}function a(t,e){this.url=t,this.element=e,this.img=new Image}var l=t.jQuery,c=t.console,h=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0;t<this.elements.length;t++){var e=this.elements[t];this.addElementImages(e)}},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var s=t.querySelectorAll(this.options.background);for(n=0;n<s.length;n++){var r=s[n];this.addElementBackgroundImages(r)}}}};var d={1:!0,9:!0,11:!0};s.prototype.addElementBackgroundImages=function(t){for(var e=p(t),i=/url\(['"]*([^'"\)]+)['"]*\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[1];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}};var p=t.getComputedStyle||function(t){return t.currentStyle};return s.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new a(t,e);this.images.push(i)},s.prototype.check=function(){function t(t,i,n){setTimeout((function(){e.progress(t,i,n)}))}var e=this;if(this.progressedCount=0,this.hasAnyBroken=!1,this.images.length)for(var i=0;i<this.images.length;i++){var n=this.images[i];n.once("progress",t),n.check()}else this.complete()},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emit("progress",this,t,e),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(t,this),this.emit("always",this),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=new e,r.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,i.bind(this.proxyImage,"load",this),i.bind(this.proxyImage,"error",this),i.bind(this.img,"load",this),i.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.img,e)},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){i.unbind(this.proxyImage,"load",this),i.unbind(this.proxyImage,"error",this),i.unbind(this.img,"load",this),i.unbind(this.img,"error",this)},a.prototype=new r,a.prototype.check=function(){i.bind(this.img,"load",this),i.bind(this.img,"error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){i.unbind(this.img,"load",this),i.unbind(this.img,"error",this)},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.element,e)},s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((l=e).fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(l(this))})},s.makeJQueryPlugin(),s}(i,t,e)}.apply(e,[n,s]),void 0===l||(t.exports=l)}(window)},778:function(){!function(t,e){"use strict";if(!e)throw new Error("Filterizr requires jQuery to work.");var i=function(t){this.init(t)};i.prototype={init:function(t){this.root={x:0,y:0,w:t}},fit:function(t){var e,i,n,o=t.length,s=o>0?t[0].h:0;for(this.root.h=s,e=0;o>e;e++)n=t[e],(i=this.findNode(this.root,n.w,n.h))?n.fit=this.splitNode(i,n.w,n.h):n.fit=this.growDown(n.w,n.h)},findNode:function(t,e,i){return t.used?this.findNode(t.right,e,i)||this.findNode(t.down,e,i):e<=t.w&&i<=t.h?t:null},splitNode:function(t,e,i){return t.used=!0,t.down={x:t.x,y:t.y+i,w:t.w,h:t.h-i},t.right={x:t.x+e,y:t.y,w:t.w-e,h:i},t},growDown:function(t,e){var i;return this.root={used:!0,x:0,y:0,w:this.root.w,h:this.root.h+e,down:{x:0,y:this.root.h,w:this.root.w,h:e},right:this.root},(i=this.findNode(this.root,t,e))?this.splitNode(i,t,e):null}},e.fn.filterizr=function(){var t=this,i=arguments;if(t._fltr||(t._fltr=e.fn.filterizr.prototype.init(t.selector,"object"==typeof i[0]?i[0]:void 0)),"string"==typeof i[0]){if(i[0].lastIndexOf("_")>-1)throw new Error("Filterizr error: You cannot call private methods");if("function"!=typeof t._fltr[i[0]])throw new Error("Filterizr error: There is no such function");t._fltr[i[0]](i[1],i[2])}return t},e.fn.filterizr.prototype={init:function(t,i){var n=e(t).extend(e.fn.filterizr.prototype);return n.options={animationDuration:.5,callbacks:{onFilteringStart:function(){},onFilteringEnd:function(){}},delay:0,delayMode:"progressive",easing:"ease-out",filter:"all",filterOutCss:{opacity:0,transform:"scale(0.5)"},filterInCss:{opacity:1,transform:"scale(1)"},layout:"sameSize",selector:"string"==typeof t?t:".filtr-container",setupControls:!0},0===arguments.length&&(t=n.options.selector,i=n.options),1===arguments.length&&"object"==typeof arguments[0]&&(i=arguments[0]),i&&n.setOptions(i),n.css({padding:0,position:"relative"}),n._lastCategory=0,n._isAnimating=!1,n._mainArray=n._getFiltrItems(),n._subArrays=n._makeSubarrays(),n._activeArray=n._getCollectionByFilter(n.options.filter),n._toggledCategories={},n._typedText=e("input[data-search]").val()||"",n._uID="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})),n._setupEvents(),n.options.setupControls&&n._setupControls(),n.filter(n.options.filter),n},filter:function(t){var e=this,i=e._getCollectionByFilter(t);e.options.filter=t,e.trigger("filteringStart"),e._handleFiltering(i),e._isSearchActivated()&&e.search(e._typedText)},toggleFilter:function(t){var e=this,i=[];e.trigger("filteringStart"),e._toggledCategories[t]?delete e._toggledCategories[t]:e._toggledCategories[t]=!0,e._multifilterModeOn()?(i=e._makeMultifilterArray(),e._handleFiltering(i),e._isSearchActivated()&&e.search(e._typedText)):(e.filter("all"),e._isSearchActivated()&&e.search(e._typedText))},search:function(t){var e=this,i=e._multifilterModeOn()?e._makeMultifilterArray():e._getCollectionByFilter(e.options.filter),n=[],o=0;if(e._isSearchActivated())for(o=0;o<i.length;o++)i[o].text().toLowerCase().indexOf(t.toLowerCase())>-1&&n.push(i[o]);if(n.length>0)e._handleFiltering(n);else if(e._isSearchActivated())for(o=0;o<e._activeArray.length;o++)e._activeArray[o]._filterOut();else e._handleFiltering(i)},shuffle:function(){var t=this;t._mainArray=t._fisherYatesShuffle(t._mainArray),t._subArrays=t._makeSubarrays();var e=t._multifilterModeOn()?t._makeMultifilterArray():t._getCollectionByFilter(t.options.filter);t._isSearchActivated()?t.search(t._typedText):t._placeItems(e)},sort:function(t,e){var i=this;if(e=e||"asc","domIndex"!==(t=t||"domIndex")&&"sortData"!==t&&"w"!==t&&"h"!==t)for(var n=0;n<i._mainArray.length;n++)i._mainArray[n][t]=i._mainArray[n].data(t);i._mainArray.sort(i._comparator(t,e)),i._subArrays=i._makeSubarrays();var o=i._multifilterModeOn()?i._makeMultifilterArray():i._getCollectionByFilter(i.options.filter);i._isSearchActivated()?i.search(i._typedText):i._placeItems(o)},setOptions:function(t){var e=this,i=0;for(var n in t)e.options[n]=t[n];if(e._mainArray&&(t.animationDuration||t.delay||t.easing||t.delayMode))for(i=0;i<e._mainArray.length;i++)e._mainArray[i].css("transition","all "+e.options.animationDuration+"s "+e.options.easing+" "+e._mainArray[i]._calcDelay()+"ms");e.options.filterInCss.transform||(e.options.filterInCss.transform="translate3d(0,0,0)"),e.options.filterOutCss.transform||(e.options.filterOutCss.transform="translate3d(0,0,0)")},_getFiltrItems:function(){var t=this,i=e(t.find(".filtr-item")),o=[];return e.each(i,(function(i,s){var r=e(s).extend(n)._init(i,t);o.push(r)})),o},_makeSubarrays:function(){for(var t=this,e=[],i=0;i<t._lastCategory;i++)e.push([]);for(i=0;i<t._mainArray.length;i++)if("object"==typeof t._mainArray[i]._category)for(var n in t._mainArray[i]._category)e[t._mainArray[i]._category[n]-1].push(t._mainArray[i]);else e[t._mainArray[i]._category-1].push(t._mainArray[i]);return e},_makeMultifilterArray:function(){for(var t=this,e=[],i={},n=0;n<t._mainArray.length;n++){var o=t._mainArray[n],s=!1,r=o.domIndex in i==0;if(Array.isArray(o._category)){for(var a=0;a<o._category.length;a++)if(o._category[a]in t._toggledCategories){s=!0;break}}else o._category in t._toggledCategories&&(s=!0);r&&s&&(i[o.domIndex]=!0,e.push(o))}return e},_setupControls:function(){var t=this;e("*[data-filter]").click((function(){var i=e(this).data("filter");t.options.filter!==i&&t.filter(i)})),e("*[data-multifilter]").click((function(){var i=e(this).data("multifilter");"all"===i?(t._toggledCategories={},t.filter("all")):t.toggleFilter(i)})),e("*[data-shuffle]").click((function(){t.shuffle()})),e("*[data-sortAsc]").click((function(){var i=e("*[data-sortOrder]").val();t.sort(i,"asc")})),e("*[data-sortDesc]").click((function(){var i=e("*[data-sortOrder]").val();t.sort(i,"desc")})),e("input[data-search]").keyup((function(){t._typedText=e(this).val(),t._delayEvent((function(){t.search(t._typedText)}),250,t._uID)}))},_setupEvents:function(){var i=this;e(t).resize((function(){i._delayEvent((function(){i.trigger("resizeFiltrContainer")}),250,i._uID)})),i.on("resizeFiltrContainer",(function(){i._multifilterModeOn()?i.toggleFilter():i.filter(i.options.filter)})).on("filteringStart",(function(){i.options.callbacks.onFilteringStart()})).on("filteringEnd",(function(){i.options.callbacks.onFilteringEnd()}))},_calcItemPositions:function(){var t=this,n=t._activeArray,o=0,s=Math.round(t.width()/t.find(".filtr-item").outerWidth()),r=0,a=n[0].outerWidth(),l=0,c=0,h=0,d=0,p=0,u=[];if("packed"===t.options.layout){e.each(t._activeArray,(function(t,e){e._updateDimensions()}));var f=new i(t.outerWidth());for(f.fit(t._activeArray),d=0;d<n.length;d++)u.push({left:n[d].fit.x,top:n[d].fit.y});o=f.root.h}if("horizontal"===t.options.layout)for(r=1,d=1;d<=n.length;d++)a=n[d-1].outerWidth(),l=n[d-1].outerHeight(),u.push({left:c,top:h}),c+=a,l>o&&(o=l);else if("vertical"===t.options.layout){for(d=1;d<=n.length;d++)l=n[d-1].outerHeight(),u.push({left:c,top:h}),h+=l;o=h}else if("sameHeight"===t.options.layout){r=1;var m=t.outerWidth();for(d=1;d<=n.length;d++){a=n[d-1].width();var v=n[d-1].outerWidth(),g=0;n[d]&&(g=n[d].width()),u.push({left:c,top:h}),(p=c+a+g)>m?(p=0,c=0,h+=n[0].outerHeight(),r++):c+=v}o=r*n[0].outerHeight()}else if("sameWidth"===t.options.layout){for(d=1;d<=n.length;d++){if(u.push({left:c,top:h}),d%s==0&&r++,c+=a,h=0,r>0)for(p=r;p>0;)h+=n[d-s*p].outerHeight(),p--;d%s==0&&(c=0)}for(d=0;s>d;d++){for(var y=0,b=d;n[b];)y+=n[b].outerHeight(),b+=s;y>o?(o=y,y=0):y=0}}else if("sameSize"===t.options.layout){for(d=1;d<=n.length;d++)u.push({left:c,top:h}),c+=a,d%s==0&&(h+=n[0].outerHeight(),c=0);o=(r=Math.ceil(n.length/s))*n[0].outerHeight()}return t.css("height",o),u},_handleFiltering:function(t){for(var e=this,i=e._getArrayOfUniqueItems(e._activeArray,t),n=0;n<i.length;n++)i[n]._filterOut();e._activeArray=t,e._placeItems(t)},_multifilterModeOn:function(){return Object.keys(this._toggledCategories).length>0},_isSearchActivated:function(){return this._typedText.length>0},_placeItems:function(t){var e=this;e._isAnimating=!0,e._itemPositions=e._calcItemPositions();for(var i=0;i<t.length;i++)t[i]._filterIn(e._itemPositions[i])},_getCollectionByFilter:function(t){return"all"===t?this._mainArray:this._subArrays[t-1]},_makeDeepCopy:function(t){var e={};for(var i in t)e[i]=t[i];return e},_comparator:function(t,e){return function(i,n){return"asc"===e?i[t]<n[t]?-1:i[t]>n[t]?1:0:"desc"===e?n[t]<i[t]?-1:n[t]>i[t]?1:0:void 0}},_getArrayOfUniqueItems:function(t,e){var i,n,o=[],s={},r=e.length;for(i=0;r>i;i++)s[e[i].domIndex]=!0;for(r=t.length,i=0;r>i;i++)(n=t[i]).domIndex in s||o.push(n);return o},_delayEvent:function(){var t={};return function(e,i,n){if(null===n)throw Error("UniqueID needed");t[n]&&clearTimeout(t[n]),t[n]=setTimeout(e,i)}}(),_fisherYatesShuffle:function(t){for(var e,i,n=t.length;n;)i=Math.floor(Math.random()*n--),e=t[n],t[n]=t[i],t[i]=e;return t}};var n={_init:function(t,e){var i=this;return i._parent=e,i._category=i._getCategory(),i._lastPos={},i.domIndex=t,i.sortData=i.data("sort"),i.w=0,i.h=0,i._isFilteredOut=!0,i._filteringOut=!1,i._filteringIn=!1,i.css(e.options.filterOutCss).css({"-webkit-backface-visibility":"hidden",perspective:"1000px","-webkit-perspective":"1000px","-webkit-transform-style":"preserve-3d",position:"absolute",transition:"all "+e.options.animationDuration+"s "+e.options.easing+" "+i._calcDelay()+"ms"}),i.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",(function(){i._onTransitionEnd()})),i},_updateDimensions:function(){var t=this;t.w=t.outerWidth(),t.h=t.outerHeight()},_calcDelay:function(){var t=this,e=0;return"progressive"===t._parent.options.delayMode?e=t._parent.options.delay*t.domIndex:t.domIndex%2==0&&(e=t._parent.options.delay),e},_getCategory:function(){var t=this,e=t.data("category");if("string"==typeof e)for(var i in e=e.split(", ")){if(isNaN(parseInt(e[i])))throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");e[i]>t._parent._lastCategory&&(t._parent._lastCategory=e[i])}else e>t._parent._lastCategory&&(t._parent._lastCategory=e);return e},_onTransitionEnd:function(){var t=this;t._filteringOut?(e(t).addClass("filteredOut"),t._isFilteredOut=!0,t._filteringOut=!1):t._filteringIn&&(t._isFilteredOut=!1,t._filteringIn=!1),t._parent._isAnimating&&(t._parent.trigger("filteringEnd"),t._parent._isAnimating=!1)},_filterOut:function(){var t=this,e=t._parent._makeDeepCopy(t._parent.options.filterOutCss);e.transform+=" translate3d("+t._lastPos.left+"px,"+t._lastPos.top+"px, 0)",t.css(e),t._filteringOut=!0},_filterIn:function(t){var i=this,n=i._parent._makeDeepCopy(i._parent.options.filterInCss);e(i).removeClass("filteredOut"),i._filteringIn=!0,i._lastPos=t,n.transform+=" translate3d("+t.left+"px,"+t.top+"px, 0)",i.css(n)}}}(this,jQuery)},754:()=>{!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,s=e.length;s>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,s=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",(function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))}))},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",(function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))}))},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll?n.forward:n.backward;for(var s in this.waypoints[i]){var r=this.waypoints[i][s],a=n.oldScroll<r.triggerPoint,l=n.newScroll>=r.triggerPoint;(a&&l||!a&&!l)&&(r.queueTrigger(o),t[r.group.id]=r.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};for(var s in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[s];for(var a in this.waypoints[s]){var l,c,h,d,p=this.waypoints[s][a],u=p.options.offset,f=p.triggerPoint,m=0,v=null==f;p.element!==p.element.window&&(m=p.adapter.offset()[r.offsetProp]),"function"==typeof u?u=u.apply(p):"string"==typeof u&&(u=parseFloat(u),p.options.offset.indexOf("%")>-1&&(u=Math.ceil(r.contextDimension*u/100))),l=r.contextScroll-r.contextOffset,p.triggerPoint=m+l-u,c=f<r.oldScroll,h=p.triggerPoint>=r.oldScroll,d=!c&&!h,!v&&c&&h?(p.queueTrigger(r.backward),n[p.group.id]=p.group):(!v&&d||v&&r.oldScroll>=p.triggerPoint)&&(p.queueTrigger(r.forward),n[p.group.id]=p.group)}}return o.requestAnimationFrame((function(){for(var t in n)n[t].flushTriggers()})),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){s&&s(),e.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var s=0,r=n.length;r>s;s+=1){var a=n[s];(a.options.continuous||s===n.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}})),e.each(["extend","inArray","isEmptyObject"],(function(i,n){t[n]=e[n]})),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],n=arguments[0];return t.isFunction(arguments[0])&&((n=t.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var o=t.extend({},n,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),i.push(new e(o))})),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},464:()=>{function t(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,i,n){return e+e+i+i+n+n}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function e(t,e){return e.indexOf(t)>-1}var i=function(i,n){var o=document.querySelector("#"+i+" > .particles-js-canvas-el");this.pJS={canvas:{el:o,w:o.offsetWidth,h:o.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var s=this.pJS;n&&Object.deepExtend(s,n),s.tmp.obj={size_value:s.particles.size.value,size_anim_speed:s.particles.size.anim.speed,move_speed:s.particles.move.speed,line_linked_distance:s.particles.line_linked.distance,line_linked_width:s.particles.line_linked.width,mode_grab_distance:s.interactivity.modes.grab.distance,mode_bubble_distance:s.interactivity.modes.bubble.distance,mode_bubble_size:s.interactivity.modes.bubble.size,mode_repulse_distance:s.interactivity.modes.repulse.distance},s.fn.retinaInit=function(){s.retina_detect&&window.devicePixelRatio>1?(s.canvas.pxratio=window.devicePixelRatio,s.tmp.retina=!0):(s.canvas.pxratio=1,s.tmp.retina=!1),s.canvas.w=s.canvas.el.offsetWidth*s.canvas.pxratio,s.canvas.h=s.canvas.el.offsetHeight*s.canvas.pxratio,s.particles.size.value=s.tmp.obj.size_value*s.canvas.pxratio,s.particles.size.anim.speed=s.tmp.obj.size_anim_speed*s.canvas.pxratio,s.particles.move.speed=s.tmp.obj.move_speed*s.canvas.pxratio,s.particles.line_linked.distance=s.tmp.obj.line_linked_distance*s.canvas.pxratio,s.interactivity.modes.grab.distance=s.tmp.obj.mode_grab_distance*s.canvas.pxratio,s.interactivity.modes.bubble.distance=s.tmp.obj.mode_bubble_distance*s.canvas.pxratio,s.particles.line_linked.width=s.tmp.obj.line_linked_width*s.canvas.pxratio,s.interactivity.modes.bubble.size=s.tmp.obj.mode_bubble_size*s.canvas.pxratio,s.interactivity.modes.repulse.distance=s.tmp.obj.mode_repulse_distance*s.canvas.pxratio},s.fn.canvasInit=function(){s.canvas.ctx=s.canvas.el.getContext("2d")},s.fn.canvasSize=function(){s.canvas.el.width=s.canvas.w,s.canvas.el.height=s.canvas.h,s&&s.interactivity.events.resize&&window.addEventListener("resize",(function(){s.canvas.w=s.canvas.el.offsetWidth,s.canvas.h=s.canvas.el.offsetHeight,s.tmp.retina&&(s.canvas.w*=s.canvas.pxratio,s.canvas.h*=s.canvas.pxratio),s.canvas.el.width=s.canvas.w,s.canvas.el.height=s.canvas.h,s.particles.move.enable||(s.fn.particlesEmpty(),s.fn.particlesCreate(),s.fn.particlesDraw(),s.fn.vendors.densityAutoParticles()),s.fn.vendors.densityAutoParticles()}))},s.fn.canvasPaint=function(){s.canvas.ctx.fillRect(0,0,s.canvas.w,s.canvas.h)},s.fn.canvasClear=function(){s.canvas.ctx.clearRect(0,0,s.canvas.w,s.canvas.h)},s.fn.particle=function(e,i,n){if(this.radius=(s.particles.size.random?Math.random():1)*s.particles.size.value,s.particles.size.anim.enable&&(this.size_status=!1,this.vs=s.particles.size.anim.speed/100,s.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=n?n.x:Math.random()*s.canvas.w,this.y=n?n.y:Math.random()*s.canvas.h,this.x>s.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>s.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),s.particles.move.bounce&&s.fn.vendors.checkOverlap(this,n),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var o=e.value[Math.floor(Math.random()*s.particles.color.value.length)];this.color.rgb=t(o)}else null!=e.value.r&&null!=e.value.g&&null!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),null!=e.value.h&&null!=e.value.s&&null!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=t(this.color.value));this.opacity=(s.particles.opacity.random?Math.random():1)*s.particles.opacity.value,s.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=s.particles.opacity.anim.speed/100,s.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var r={};switch(s.particles.move.direction){case"top":r={x:0,y:-1};break;case"top-right":r={x:.5,y:-.5};break;case"right":r={x:1,y:-0};break;case"bottom-right":r={x:.5,y:.5};break;case"bottom":r={x:0,y:1};break;case"bottom-left":r={x:-.5,y:1};break;case"left":r={x:-1,y:0};break;case"top-left":r={x:-.5,y:-.5};break;default:r={x:0,y:0}}s.particles.move.straight?(this.vx=r.x,this.vy=r.y,s.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=r.x+Math.random()-.5,this.vy=r.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var a=s.particles.shape.type;if("object"==typeof a){if(a instanceof Array){var l=a[Math.floor(Math.random()*a.length)];this.shape=l}}else this.shape=a;if("image"==this.shape){var c=s.particles.shape;this.img={src:c.image.src,ratio:c.image.width/c.image.height},this.img.ratio||(this.img.ratio=1),"svg"==s.tmp.img_type&&null!=s.tmp.source_svg&&(s.fn.vendors.createSvgImg(this),s.tmp.pushing&&(this.img.loaded=!1))}},s.fn.particle.prototype.draw=function(){var t=this;if(null!=t.radius_bubble)var e=t.radius_bubble;else e=t.radius;if(null!=t.opacity_bubble)var i=t.opacity_bubble;else i=t.opacity;if(t.color.rgb)var n="rgba("+t.color.rgb.r+","+t.color.rgb.g+","+t.color.rgb.b+","+i+")";else n="hsla("+t.color.hsl.h+","+t.color.hsl.s+"%,"+t.color.hsl.l+"%,"+i+")";switch(s.canvas.ctx.fillStyle=n,s.canvas.ctx.beginPath(),t.shape){case"circle":s.canvas.ctx.arc(t.x,t.y,e,0,2*Math.PI,!1);break;case"edge":s.canvas.ctx.rect(t.x-e,t.y-e,2*e,2*e);break;case"triangle":s.fn.vendors.drawShape(s.canvas.ctx,t.x-e,t.y+e/1.66,2*e,3,2);break;case"polygon":s.fn.vendors.drawShape(s.canvas.ctx,t.x-e/(s.particles.shape.polygon.nb_sides/3.5),t.y-e/.76,2.66*e/(s.particles.shape.polygon.nb_sides/3),s.particles.shape.polygon.nb_sides,1);break;case"star":s.fn.vendors.drawShape(s.canvas.ctx,t.x-2*e/(s.particles.shape.polygon.nb_sides/4),t.y-e/1.52,2*e*2.66/(s.particles.shape.polygon.nb_sides/3),s.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==s.tmp.img_type)var o=t.img.obj;else o=s.tmp.img_obj;o&&s.canvas.ctx.drawImage(o,t.x-e,t.y-e,2*e,2*e/t.img.ratio)}s.canvas.ctx.closePath(),s.particles.shape.stroke.width>0&&(s.canvas.ctx.strokeStyle=s.particles.shape.stroke.color,s.canvas.ctx.lineWidth=s.particles.shape.stroke.width,s.canvas.ctx.stroke()),s.canvas.ctx.fill()},s.fn.particlesCreate=function(){for(var t=0;t<s.particles.number.value;t++)s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value))},s.fn.particlesUpdate=function(){for(var t=0;t<s.particles.array.length;t++){var i=s.particles.array[t];if(s.particles.move.enable){var n=s.particles.move.speed/2;i.x+=i.vx*n,i.y+=i.vy*n}if(s.particles.opacity.anim.enable&&(1==i.opacity_status?(i.opacity>=s.particles.opacity.value&&(i.opacity_status=!1),i.opacity+=i.vo):(i.opacity<=s.particles.opacity.anim.opacity_min&&(i.opacity_status=!0),i.opacity-=i.vo),i.opacity<0&&(i.opacity=0)),s.particles.size.anim.enable&&(1==i.size_status?(i.radius>=s.particles.size.value&&(i.size_status=!1),i.radius+=i.vs):(i.radius<=s.particles.size.anim.size_min&&(i.size_status=!0),i.radius-=i.vs),i.radius<0&&(i.radius=0)),"bounce"==s.particles.move.out_mode)var o={x_left:i.radius,x_right:s.canvas.w,y_top:i.radius,y_bottom:s.canvas.h};else o={x_left:-i.radius,x_right:s.canvas.w+i.radius,y_top:-i.radius,y_bottom:s.canvas.h+i.radius};if("bounce"===(i.x-i.radius>s.canvas.w?(i.x=o.x_left,i.y=Math.random()*s.canvas.h):i.x+i.radius<0&&(i.x=o.x_right,i.y=Math.random()*s.canvas.h),i.y-i.radius>s.canvas.h?(i.y=o.y_top,i.x=Math.random()*s.canvas.w):i.y+i.radius<0&&(i.y=o.y_bottom,i.x=Math.random()*s.canvas.w),s.particles.move.out_mode)&&((i.x+i.radius>s.canvas.w||i.x-i.radius<0)&&(i.vx=-i.vx),(i.y+i.radius>s.canvas.h||i.y-i.radius<0)&&(i.vy=-i.vy)),e("grab",s.interactivity.events.onhover.mode)&&s.fn.modes.grabParticle(i),(e("bubble",s.interactivity.events.onhover.mode)||e("bubble",s.interactivity.events.onclick.mode))&&s.fn.modes.bubbleParticle(i),(e("repulse",s.interactivity.events.onhover.mode)||e("repulse",s.interactivity.events.onclick.mode))&&s.fn.modes.repulseParticle(i),s.particles.line_linked.enable||s.particles.move.attract.enable)for(var r=t+1;r<s.particles.array.length;r++){var a=s.particles.array[r];s.particles.line_linked.enable&&s.fn.interact.linkParticles(i,a),s.particles.move.attract.enable&&s.fn.interact.attractParticles(i,a),s.particles.move.bounce&&s.fn.interact.bounceParticles(i,a)}}},s.fn.particlesDraw=function(){s.canvas.ctx.clearRect(0,0,s.canvas.w,s.canvas.h),s.fn.particlesUpdate();for(var t=0;t<s.particles.array.length;t++)s.particles.array[t].draw()},s.fn.particlesEmpty=function(){s.particles.array=[]},s.fn.particlesRefresh=function(){cancelRequestAnimFrame(s.fn.checkAnimFrame),cancelRequestAnimFrame(s.fn.drawAnimFrame),s.tmp.source_svg=void 0,s.tmp.img_obj=void 0,s.tmp.count_svg=0,s.fn.particlesEmpty(),s.fn.canvasClear(),s.fn.vendors.start()},s.fn.interact.linkParticles=function(t,e){var i=t.x-e.x,n=t.y-e.y,o=Math.sqrt(i*i+n*n);if(o<=s.particles.line_linked.distance){var r=s.particles.line_linked.opacity-o/(1/s.particles.line_linked.opacity)/s.particles.line_linked.distance;if(r>0){var a=s.particles.line_linked.color_rgb_line;s.canvas.ctx.strokeStyle="rgba("+a.r+","+a.g+","+a.b+","+r+")",s.canvas.ctx.lineWidth=s.particles.line_linked.width,s.canvas.ctx.beginPath(),s.canvas.ctx.moveTo(t.x,t.y),s.canvas.ctx.lineTo(e.x,e.y),s.canvas.ctx.stroke(),s.canvas.ctx.closePath()}}},s.fn.interact.attractParticles=function(t,e){var i=t.x-e.x,n=t.y-e.y;if(Math.sqrt(i*i+n*n)<=s.particles.line_linked.distance){var o=i/(1e3*s.particles.move.attract.rotateX),r=n/(1e3*s.particles.move.attract.rotateY);t.vx-=o,t.vy-=r,e.vx+=o,e.vy+=r}},s.fn.interact.bounceParticles=function(t,e){var i=t.x-e.x,n=t.y-e.y,o=Math.sqrt(i*i+n*n);t.radius+e.radius>=o&&(t.vx=-t.vx,t.vy=-t.vy,e.vx=-e.vx,e.vy=-e.vy)},s.fn.modes.pushParticles=function(t,e){s.tmp.pushing=!0;for(var i=0;t>i;i++)s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value,{x:e?e.pos_x:Math.random()*s.canvas.w,y:e?e.pos_y:Math.random()*s.canvas.h})),i==t-1&&(s.particles.move.enable||s.fn.particlesDraw(),s.tmp.pushing=!1)},s.fn.modes.removeParticles=function(t){s.particles.array.splice(0,t),s.particles.move.enable||s.fn.particlesDraw()},s.fn.modes.bubbleParticle=function(t){function i(){t.opacity_bubble=t.opacity,t.radius_bubble=t.radius}function n(e,i,n,o,r){if(e!=i)if(s.tmp.bubble_duration_end)null!=n&&(l=e+(e-(o-p*(o-e)/s.interactivity.modes.bubble.duration)),"size"==r&&(t.radius_bubble=l),"opacity"==r&&(t.opacity_bubble=l));else if(d<=s.interactivity.modes.bubble.distance){if(null!=n)var a=n;else a=o;if(a!=e){var l=o-p*(o-e)/s.interactivity.modes.bubble.duration;"size"==r&&(t.radius_bubble=l),"opacity"==r&&(t.opacity_bubble=l)}}else"size"==r&&(t.radius_bubble=void 0),"opacity"==r&&(t.opacity_bubble=void 0)}if(s.interactivity.events.onhover.enable&&e("bubble",s.interactivity.events.onhover.mode)){var o=t.x-s.interactivity.mouse.pos_x,r=t.y-s.interactivity.mouse.pos_y,a=1-(d=Math.sqrt(o*o+r*r))/s.interactivity.modes.bubble.distance;if(d<=s.interactivity.modes.bubble.distance){if(a>=0&&"mousemove"==s.interactivity.status){if(s.interactivity.modes.bubble.size!=s.particles.size.value)if(s.interactivity.modes.bubble.size>s.particles.size.value)(c=t.radius+s.interactivity.modes.bubble.size*a)>=0&&(t.radius_bubble=c);else{var l=t.radius-s.interactivity.modes.bubble.size,c=t.radius-l*a;t.radius_bubble=c>0?c:0}if(s.interactivity.modes.bubble.opacity!=s.particles.opacity.value)if(s.interactivity.modes.bubble.opacity>s.particles.opacity.value)(h=s.interactivity.modes.bubble.opacity*a)>t.opacity&&h<=s.interactivity.modes.bubble.opacity&&(t.opacity_bubble=h);else{var h;(h=t.opacity-(s.particles.opacity.value-s.interactivity.modes.bubble.opacity)*a)<t.opacity&&h>=s.interactivity.modes.bubble.opacity&&(t.opacity_bubble=h)}}}else i();"mouseleave"==s.interactivity.status&&i()}else if(s.interactivity.events.onclick.enable&&e("bubble",s.interactivity.events.onclick.mode)){if(s.tmp.bubble_clicking){o=t.x-s.interactivity.mouse.click_pos_x,r=t.y-s.interactivity.mouse.click_pos_y;var d=Math.sqrt(o*o+r*r),p=((new Date).getTime()-s.interactivity.mouse.click_time)/1e3;p>s.interactivity.modes.bubble.duration&&(s.tmp.bubble_duration_end=!0),p>2*s.interactivity.modes.bubble.duration&&(s.tmp.bubble_clicking=!1,s.tmp.bubble_duration_end=!1)}s.tmp.bubble_clicking&&(n(s.interactivity.modes.bubble.size,s.particles.size.value,t.radius_bubble,t.radius,"size"),n(s.interactivity.modes.bubble.opacity,s.particles.opacity.value,t.opacity_bubble,t.opacity,"opacity"))}},s.fn.modes.repulseParticle=function(t){if(s.interactivity.events.onhover.enable&&e("repulse",s.interactivity.events.onhover.mode)&&"mousemove"==s.interactivity.status){var i=t.x-s.interactivity.mouse.pos_x,n=t.y-s.interactivity.mouse.pos_y,o=Math.sqrt(i*i+n*n),r={x:i/o,y:n/o},a=function(t,e,i){return Math.min(Math.max(t,0),50)}(1/(c=s.interactivity.modes.repulse.distance)*(-1*Math.pow(o/c,2)+1)*c*100),l={x:t.x+r.x*a,y:t.y+r.y*a};"bounce"==s.particles.move.out_mode?(l.x-t.radius>0&&l.x+t.radius<s.canvas.w&&(t.x=l.x),l.y-t.radius>0&&l.y+t.radius<s.canvas.h&&(t.y=l.y)):(t.x=l.x,t.y=l.y)}else if(s.interactivity.events.onclick.enable&&e("repulse",s.interactivity.events.onclick.mode))if(s.tmp.repulse_finish||(s.tmp.repulse_count++,s.tmp.repulse_count==s.particles.array.length&&(s.tmp.repulse_finish=!0)),s.tmp.repulse_clicking){var c=Math.pow(s.interactivity.modes.repulse.distance/6,3),h=s.interactivity.mouse.click_pos_x-t.x,d=s.interactivity.mouse.click_pos_y-t.y,p=h*h+d*d,u=-c/p*1;c>=p&&function(){var e=Math.atan2(d,h);if(t.vx=u*Math.cos(e),t.vy=u*Math.sin(e),"bounce"==s.particles.move.out_mode){var i={x:t.x+t.vx,y:t.y+t.vy};(i.x+t.radius>s.canvas.w||i.x-t.radius<0)&&(t.vx=-t.vx),(i.y+t.radius>s.canvas.h||i.y-t.radius<0)&&(t.vy=-t.vy)}}()}else 0==s.tmp.repulse_clicking&&(t.vx=t.vx_i,t.vy=t.vy_i)},s.fn.modes.grabParticle=function(t){if(s.interactivity.events.onhover.enable&&"mousemove"==s.interactivity.status){var e=t.x-s.interactivity.mouse.pos_x,i=t.y-s.interactivity.mouse.pos_y,n=Math.sqrt(e*e+i*i);if(n<=s.interactivity.modes.grab.distance){var o=s.interactivity.modes.grab.line_linked.opacity-n/(1/s.interactivity.modes.grab.line_linked.opacity)/s.interactivity.modes.grab.distance;if(o>0){var r=s.particles.line_linked.color_rgb_line;s.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+o+")",s.canvas.ctx.lineWidth=s.particles.line_linked.width,s.canvas.ctx.beginPath(),s.canvas.ctx.moveTo(t.x,t.y),s.canvas.ctx.lineTo(s.interactivity.mouse.pos_x,s.interactivity.mouse.pos_y),s.canvas.ctx.stroke(),s.canvas.ctx.closePath()}}}},s.fn.vendors.eventsListeners=function(){"window"==s.interactivity.detect_on?s.interactivity.el=window:s.interactivity.el=s.canvas.el,(s.interactivity.events.onhover.enable||s.interactivity.events.onclick.enable)&&(s.interactivity.el.addEventListener("mousemove",(function(t){if(s.interactivity.el==window)var e=t.clientX,i=t.clientY;else e=t.offsetX||t.clientX,i=t.offsetY||t.clientY;s.interactivity.mouse.pos_x=e,s.interactivity.mouse.pos_y=i,s.tmp.retina&&(s.interactivity.mouse.pos_x*=s.canvas.pxratio,s.interactivity.mouse.pos_y*=s.canvas.pxratio),s.interactivity.status="mousemove"})),s.interactivity.el.addEventListener("mouseleave",(function(t){s.interactivity.mouse.pos_x=null,s.interactivity.mouse.pos_y=null,s.interactivity.status="mouseleave"}))),s.interactivity.events.onclick.enable&&s.interactivity.el.addEventListener("click",(function(){if(s.interactivity.mouse.click_pos_x=s.interactivity.mouse.pos_x,s.interactivity.mouse.click_pos_y=s.interactivity.mouse.pos_y,s.interactivity.mouse.click_time=(new Date).getTime(),s.interactivity.events.onclick.enable)switch(s.interactivity.events.onclick.mode){case"push":s.particles.move.enable||1==s.interactivity.modes.push.particles_nb?s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb,s.interactivity.mouse):s.interactivity.modes.push.particles_nb>1&&s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb);break;case"remove":s.fn.modes.removeParticles(s.interactivity.modes.remove.particles_nb);break;case"bubble":s.tmp.bubble_clicking=!0;break;case"repulse":s.tmp.repulse_clicking=!0,s.tmp.repulse_count=0,s.tmp.repulse_finish=!1,setTimeout((function(){s.tmp.repulse_clicking=!1}),1e3*s.interactivity.modes.repulse.duration)}}))},s.fn.vendors.densityAutoParticles=function(){if(s.particles.number.density.enable){var t=s.canvas.el.width*s.canvas.el.height/1e3;s.tmp.retina&&(t/=2*s.canvas.pxratio);var e=t*s.particles.number.value/s.particles.number.density.value_area,i=s.particles.array.length-e;0>i?s.fn.modes.pushParticles(Math.abs(i)):s.fn.modes.removeParticles(i)}},s.fn.vendors.checkOverlap=function(t,e){for(var i=0;i<s.particles.array.length;i++){var n=s.particles.array[i],o=t.x-n.x,r=t.y-n.y;Math.sqrt(o*o+r*r)<=t.radius+n.radius&&(t.x=e?e.x:Math.random()*s.canvas.w,t.y=e?e.y:Math.random()*s.canvas.h,s.fn.vendors.checkOverlap(t))}},s.fn.vendors.createSvgImg=function(t){var e=s.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,(function(e,i,n,o){if(t.color.rgb)var s="rgba("+t.color.rgb.r+","+t.color.rgb.g+","+t.color.rgb.b+","+t.opacity+")";else s="hsla("+t.color.hsl.h+","+t.color.hsl.s+"%,"+t.color.hsl.l+"%,"+t.opacity+")";return s})),i=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),n=window.URL||window.webkitURL||window,o=n.createObjectURL(i),r=new Image;r.addEventListener("load",(function(){t.img.obj=r,t.img.loaded=!0,n.revokeObjectURL(o),s.tmp.count_svg++})),r.src=o},s.fn.vendors.destroypJS=function(){cancelAnimationFrame(s.fn.drawAnimFrame),o.remove(),pJSDom=null},s.fn.vendors.drawShape=function(t,e,i,n,o,s){var r=o*s,a=o/s,l=180*(a-2)/a,c=Math.PI-Math.PI*l/180;t.save(),t.beginPath(),t.translate(e,i),t.moveTo(0,0);for(var h=0;r>h;h++)t.lineTo(n,0),t.translate(n,0),t.rotate(c);t.fill(),t.restore()},s.fn.vendors.exportImg=function(){window.open(s.canvas.el.toDataURL("image/png"),"_blank")},s.fn.vendors.loadImg=function(t){if(s.tmp.img_error=void 0,""!=s.particles.shape.image.src)if("svg"==t){var e=new XMLHttpRequest;e.open("GET",s.particles.shape.image.src),e.onreadystatechange=function(t){4==e.readyState&&(200==e.status?(s.tmp.source_svg=t.currentTarget.response,s.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),s.tmp.img_error=!0))},e.send()}else{var i=new Image;i.addEventListener("load",(function(){s.tmp.img_obj=i,s.fn.vendors.checkBeforeDraw()})),i.src=s.particles.shape.image.src}else console.log("Error pJS - No image.src"),s.tmp.img_error=!0},s.fn.vendors.draw=function(){"image"==s.particles.shape.type?"svg"==s.tmp.img_type?s.tmp.count_svg>=s.particles.number.value?(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame)):s.tmp.img_error||(s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw)):null!=s.tmp.img_obj?(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame)):s.tmp.img_error||(s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw)):(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame))},s.fn.vendors.checkBeforeDraw=function(){"image"==s.particles.shape.type?"svg"==s.tmp.img_type&&null==s.tmp.source_svg?s.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(s.tmp.checkAnimFrame),s.tmp.img_error||(s.fn.vendors.init(),s.fn.vendors.draw())):(s.fn.vendors.init(),s.fn.vendors.draw())},s.fn.vendors.init=function(){s.fn.retinaInit(),s.fn.canvasInit(),s.fn.canvasSize(),s.fn.canvasPaint(),s.fn.particlesCreate(),s.fn.vendors.densityAutoParticles(),s.particles.line_linked.color_rgb_line=t(s.particles.line_linked.color)},s.fn.vendors.start=function(){e("image",s.particles.shape.type)?(s.tmp.img_type=s.particles.shape.image.src.substr(s.particles.shape.image.src.length-3),s.fn.vendors.loadImg(s.tmp.img_type)):s.fn.vendors.checkBeforeDraw()},s.fn.vendors.eventsListeners(),s.fn.vendors.start()};Object.deepExtend=function(t,e){for(var i in e)e[i]&&e[i].constructor&&e[i].constructor===Object?(t[i]=t[i]||{},arguments.callee(t[i],e[i])):t[i]=e[i];return t},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(t,e){"string"!=typeof t&&(e=t,t="particles-js"),t||(t="particles-js");var n=document.getElementById(t),o="particles-js-canvas-el",s=n.getElementsByClassName(o);if(s.length)for(;s.length>0;)n.removeChild(s[0]);var r=document.createElement("canvas");r.className=o,r.style.width="100%",r.style.height="100%",null!=document.getElementById(t).appendChild(r)&&pJSDom.push(new i(t,e))},window.particlesJS.load=function(t,e,i){var n=new XMLHttpRequest;n.open("GET",e),n.onreadystatechange=function(e){if(4==n.readyState)if(200==n.status){var o=JSON.parse(e.currentTarget.response);window.particlesJS(t,o),i&&i()}else console.log("Error pJS - XMLHttpRequest status: "+n.status),console.log("Error pJS - File config not found")},n.send()}}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}(()=>{"use strict";window,document,document.documentElement,document.body,i(333),i(464),i(754),i(340),i(778),document.addEventListener("DOMContentLoaded",(()=>{$("body").css({overflow:"hidden"}),$(".loader-screen").fadeOut(),$("body").css({overflow:"auto"});var t,e,i,n=$(window).width()<768,o=$(".navbar"),s=!1,r=(t=$(".nav-open"),e=$(".nav-close"),i=$(".overlay"),function(){s?(e.animate({opacity:0}),t.animate({opacity:1}),$("body").removeClass("stop-scrolling"),i.fadeOut()):(t.animate({opacity:0}),e.animate({opacity:1}),$("body").addClass("stop-scrolling"),i.fadeIn()),s=!s});$(".nav-toggle-btn").on("click",r);var a=!1;$(".main-header").waypoint((function(t){"down"===t?(a=!0,o.addClass("navbar-fixed-top navbar-sticky animated slideInDown")):(a=!1,o.addClass("animated slideOutUp"))}),{offset:"-100%"}),o.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){a?o.removeClass("animated slideInDown slideOutUp"):o.removeClass("navbar-fixed-top navbar-sticky animated slideInDown slideOutUp")})),$("a[href*=#]:not([href=#])").on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(n&&s&&$(".nav-toggle-btn").trigger("click"),(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})),particlesJS.load("main-header","../vendor/particleconfignasa.json"),setTimeout((()=>{$("#showcase-container").imagesLoaded((function(){$(".showcase-container").filterizr({delay:25,filterOutCss:{opacity:0,zIndex:-1,transform:"scale(0.75) skewY(20deg)"},filterInCss:{opacity:1,zIndex:50,transform:"scale(1) skewY(0)"}}),$(".portfolio-nav li").on("click",(function(){var t=$(this);$(".portfolio-nav li").removeClass("active-tab"),t.addClass("active-tab")}))}))}),300),$(".welcome-box p").type((function(){$(".welcome-box h1").animate({opacity:1},2e3,(function(){$(".social-nav ul").removeClass("invisible").addClass("animated flipInX")}))}),70),$(".about-me").waypoint((function(t){$(".feat-bg.bg-me").removeClass("invisible").addClass("animated slideInRight")}),{offset:"60%"}),$(".about-me").waypoint((function(t){$(".feat-bg.bg-whatido").removeClass("invisible").addClass("animated slideInLeft")}),{offset:"30%"}),$(".about-me").waypoint((function(t){$(".feat-bg.bg-facts").removeClass("invisible").addClass("animated slideInRight")}),{offset:"-5%"}),$(".tools").waypoint((function(t){$(".js-tool-logo").removeClass("invisible").addClass("animated zoomIn")}),{offset:"40%"}),(new Date).getFullYear(),document.querySelector("#year").innerHTML=(new Date).getFullYear();class l{constructor(t,e,i,n,o,s,r,a){this.imgSrc=t,this.title=e,this.p1=i,this.p2=n,this.p3=o,this.btnLife=s,this.btnDev=r;for(var l=arguments.length,c=new Array(l>8?l-8:0),h=8;h<l;h++)c[h-8]=arguments[h];this.classes=c,this.parent=document.querySelector(a)}render(){const t=document.createElement("div");this.classes.forEach((e=>{t.classList.add(e)})),t.innerHTML='\n      <img class="img-responsive showcase-img" src="'.concat(this.imgSrc,'" alt="').concat(this.title,'">\n      <div class="item-desc">\n        <h4>').concat(this.title,"</h4>\n        <p>").concat(this.p1,"</p>\n        <p>").concat(this.p2,"</p>\n        <p>").concat(this.p3,'</p>\n        <div class="buttons">\n          <a class="button" href="').concat(this.btnLife,'" target="_blank" rel="noreferrer">Visit</a>\n          <a class="button gitHubLink" href="').concat(this.btnDev,'" target="_blank" rel="noreferrer">GitHub</a>\n        </div>\n      </div>\n    '),this.parent.prepend(t)}}new l("img/preview/case-bussines.webp","Business formula","Marketing","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/lmarketing/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/lmarketing","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-krasota.webp","S&Mitler","Beauty salon","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/krasota/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/krasota","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-urcompany.webp","Law Firm","Website on the topic Law firm","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/urcompany/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/urcompany","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","business").render(),new l("img/preview/case-afg.webp","Armata Financical Group","Website with scroll animation","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/afg/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/afg","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-natur.webp","Naturetour","Some single page","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/urcompany/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/urcompany","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-medvedka.webp","Medvedka","Medicine","Developed Front End - Alex Herasymchuk","Working in the company — Asabix","https://alex-grsm.github.io/showcase/medvedka/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/medvedka","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-losen.webp","Losen","Сosmetology","Developed Front End - Alex Herasymchuk","Working in the company — Asabix","https://alex-grsm.github.io/showcase/losen/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/losen","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-ucard.webp","Your Card","Some Animation Card","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/ucard/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/ucard","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-lenses.webp","AMAZING LENSES","Eye lens shop","Developed Front & Back Ends — Alex Herasymchuk","Working in freelancing","https://lenses.bestprofit.top/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-steffany.webp","Steffany","Franchise","Developed Front & Back Ends — Alex Herasymchuk","Working in freelancing","https://franchise.steffany.ua/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-armer.webp","Armer","Сar accessories catalog","Developed Front — Alex Herasymchuk","Working in freelancing","https://armer.com.ua/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","business").render(),new l("img/preview/case-axxis.webp","AXXIS","Сatalog of accessories and tools","Developed Front — Alex Herasymchuk","Working in freelancing","https://www.axxis-chemicals.com/en/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","business").render(),new l("img/preview/case-roof.webp","Roof","Roofing materials and work","Developed Front End - Alex Herasymchuk","Working in freelancing","https://alex-grsm.github.io/showcase/roof/","https://github.com/alex-grsm/alex-grsm.github.io/tree/master/showcase/roof","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-kyivstar.webp","Kyivstar","Internet provider","Developed Front End - Alex Herasymchuk","Working in freelancing","https://my-kyivstar.com.ua/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-xpand.webp","Xpand","Case for xpand company","Developed Front End - Alex Herasymchuk","Working in the agency — Doris Advertising","http://digital.doris.agency/xpand","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-great.webp","GR8","Translation Agency","Developed Front End - Alex Herasymchuk","Working in the agency — Doris Advertising","https://gr8.com.ua/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","business").render(),new l("img/preview/case-gelato.webp","GELATO","Promo site — ice cream","Developed Front End - Alex Herasymchuk","Working in the agency — Doris Advertising","https://gelato.rud.ua/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-doris.webp","Doris Advertising","Website for Doris digital agency","Developed Front End - Alex Herasymchuk","Working in the agency — Doris Advertising","http://digital.doris.agency/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-husky.webp","Husky","Case for Husky company","Developed Front End - Alex Herasymchuk","Working in the agency — Doris Advertising","http://digital.doris.agency/husky","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item").render(),new l("img/preview/case-prosto.webp","Prosto CNC","Online store - CNC machines","Developed Front End - Alex Herasymchuk","Working in freelancing","https://www.prostocnc.com/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","ecommerce").render(),new l("img/preview/case-beatnik.webp","BEATNIKSPACE","Store of original shoes, clothes and accessories","Developed Front & Back Ends — Alex Herasymchuk","Working in freelancing","https://beatnik.space/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","ecommerce").render(),new l("img/preview/case-marcipan.webp","Pan marzipan","Restaurant","Developed Front End - Alex Herasymchuk","Working in the agency — Doris Advertising","http://marcipanzt.com.ua/","","#showcase-container","col-lg-3","col-md-4","filtr-item","showcase-item","business").render(),document.querySelectorAll(".showcase-item").forEach((function(t){t.classList.contains("business")?t.setAttribute("data-category","2"):t.classList.contains("ecommerce")?t.setAttribute("data-category","3"):t.setAttribute("data-category","1")})),document.querySelectorAll(".gitHubLink").forEach((t=>{""==t.getAttribute("href")&&(t.style.display="none")}))}))})()})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/bootstrap.min.js */ "./src/js/vendor/bootstrap.min.js");
/* harmony import */ var _vendor_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_jquery_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/jquery.waypoints.min.js */ "./src/js/vendor/jquery.waypoints.min.js");
/* harmony import */ var _vendor_jquery_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_imagesloaded_pkgd_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/imagesloaded.pkgd.min.js */ "./src/js/vendor/imagesloaded.pkgd.min.js");
/* harmony import */ var _vendor_imagesloaded_pkgd_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_imagesloaded_pkgd_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_jquery_filterizr_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/jquery.filterizr.min.js */ "./src/js/vendor/jquery.filterizr.min.js");
/* harmony import */ var _vendor_jquery_filterizr_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_filterizr_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_particles_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/particles.min.js */ "./src/js/vendor/particles.min.js");
/* harmony import */ var _vendor_particles_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_particles_min_js__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener('DOMContentLoaded', () => {
  $('body').css({
    overflow: 'hidden'
  }); //Deactivate loader

  $('.loader-screen').fadeOut();
  $('body').css({
    overflow: 'auto'
  }); //restore scrollability
  //BEGIN APP

  var onMobile = $(window).width() < 768;
  /*******************************************
                  NAVIGATION
  *******************************************/

  var nav = $('.navbar');
  var isNavOpen = false; //Mobile nav "toggle button"

  var toggleBtnHandler = function () {
    var openNavBtn = $('.nav-open');
    var closeNavBtn = $('.nav-close');
    var overlay = $('.overlay');
    return function () {
      if (!isNavOpen) {
        openNavBtn.animate({
          opacity: 0
        });
        closeNavBtn.animate({
          opacity: 1
        });
        $('body').addClass('stop-scrolling');
        overlay.fadeIn();
      } else {
        closeNavBtn.animate({
          opacity: 0
        });
        openNavBtn.animate({
          opacity: 1
        });
        $('body').removeClass('stop-scrolling');
        overlay.fadeOut();
      }

      isNavOpen = !isNavOpen;
    };
  }();

  $('.nav-toggle-btn').on('click', toggleBtnHandler); //enable sticky nav on desktops

  var navIsSticky = false;
  var navWp = $('.main-header').waypoint(function (dir) {
    if (dir === 'down') {
      navIsSticky = true;
      nav.addClass('navbar-fixed-top navbar-sticky animated slideInDown');
    } else {
      navIsSticky = false;
      nav.addClass('animated slideOutUp');
    }
  }, {
    offset: '-100%'
  });
  nav.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    if (navIsSticky) {
      nav.removeClass('animated slideInDown slideOutUp');
    } else {
      nav.removeClass('navbar-fixed-top navbar-sticky animated slideInDown slideOutUp');
    }
  }); //Navigation Scroll

  $('a[href*=#]:not([href=#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (onMobile && isNavOpen) $('.nav-toggle-btn').trigger('click'); //toggle the mobile navigation bar

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  /*******************************************
                  EFX
  *******************************************/
  //particles

  particlesJS.load('main-header', '../vendor/particleconfignasa.json'); //Portfolio Shuffle-Plugin Config use DeSandro's plugin to make sure
  //images have loaded before instantiating shuffle to avoid height bugs

  $('#showcase-container').imagesLoaded(function () {
    var filtrOptions = {
      delay: 25,
      filterOutCss: {
        opacity: 0,
        zIndex: -1,
        transform: 'scale(0.75) skewY(20deg)'
      },
      filterInCss: {
        opacity: 1,
        zIndex: 50,
        transform: 'scale(1) skewY(0)'
      }
    };
    var filterizd = $('.showcase-container').filterizr(filtrOptions);
    $('.portfolio-nav li').on('click', function () {
      var item = $(this);
      $('.portfolio-nav li').removeClass('active-tab');
      item.addClass('active-tab');
    });
  }); //typewriter

  $('.welcome-box p').type(function () {
    $('.welcome-box h1').animate({
      opacity: 1
    }, 2000, function () {
      $('.social-nav ul').removeClass('invisible').addClass('animated flipInX');
    });
  }, 70);
  /*******************************************
                  ANIMATIONS
  *******************************************/

  $('.about-me').waypoint(function (dir) {
    $('.feat-bg.bg-me').removeClass('invisible').addClass('animated slideInRight');
  }, {
    offset: '60%'
  });
  $('.about-me').waypoint(function (dir) {
    $('.feat-bg.bg-whatido').removeClass('invisible').addClass('animated slideInLeft');
  }, {
    offset: '30%'
  });
  $('.about-me').waypoint(function (dir) {
    $('.feat-bg.bg-facts').removeClass('invisible').addClass('animated slideInRight');
  }, {
    offset: '-5%'
  });
  $('.tools').waypoint(function (dir) {
    $('.js-tool-logo').removeClass('invisible').addClass('animated zoomIn');
  }, {
    offset: '40%'
  });
  /** Current year */

  new Date().getFullYear();
  document.querySelector("#year").innerHTML = new Date().getFullYear();
  /*******************************************
                  SHOW CASE
  *******************************************/

  class ShowCase {
    constructor() {}

  }
});

/***/ }),

/***/ "./src/js/vendor/bootstrap.min.js":
/*!****************************************!*\
  !*** ./src/js/vendor/bootstrap.min.js ***!
  \****************************************/
/***/ (() => {

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";

  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), +function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) if (void 0 !== a.style[c]) return {
      end: b[c]
    };

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });

    var e = function () {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function (b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }

  var c = '[data-dismiss="alert"]',
      d = function (b) {
    a(b).on("click", c, this.close);
  };

  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }

    var e = a(this),
        f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }

  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };

  c.VERSION = "3.3.6", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }

  var c = function (b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
    return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
        k = a.Event("slide.bs.carousel", {
      relatedTarget: j,
      direction: h
    });

    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active");
      }

      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };

  var e = function (c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));

    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };

  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d);
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }

  var d = function (b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");

        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var h = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var e = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();
    c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = {
        relatedTarget: this
      };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }

  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");

      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }

      return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);

      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);

        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }

  var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var g = function () {
        d.removeBackdrop(), b && b();
      };

      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;

    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function (a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) if (this.inState[a]) return !0;

    return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide());
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
          f = this.tip(),
          g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;

      if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }

      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);

      var q = function () {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };

      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function (a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }

    var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
      top: 0,
      left: 0
    } : b.offset(),
        g = {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
    },
        h = d ? {
      width: a(window).width(),
      height: a(window).height()
    } : null;
    return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);

    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }

    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));

    return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function (a, b) {
    this.init("popover", a, b);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }

  b.VERSION = "3.3.6", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();

    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }

  var c = function (b) {
    this.element = a(b);
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", {
        relatedTarget: b[0]
      }),
          g = a.Event("show.bs.tab", {
        relatedTarget: e[0]
      });

      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }

    var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };

  var e = function (c) {
    c.preventDefault(), b.call(a(this), "show");
  };

  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);

      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == h && this.$element.offset({
        top: g - b - f
      });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);

/***/ }),

/***/ "./src/js/vendor/imagesloaded.pkgd.min.js":
/*!************************************************!*\
  !*** ./src/js/vendor/imagesloaded.pkgd.min.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__exports;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
  "use strict";

  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;) if (e[n].listener === t) return n;

    return -1;
  }

  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }

  var i = e.prototype,
      r = this,
      s = r.EventEmitter;
  i.getListeners = function (e) {
    var t,
        n,
        i = this._getEvents();

    if ("object" == typeof e) {
      t = {};

      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);

    return t;
  }, i.flattenListeners = function (e) {
    var t,
        n = [];

    for (t = 0; t < e.length; t += 1) n.push(e[t].listener);

    return n;
  }, i.getListenersAsObject = function (e) {
    var t,
        n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n;
  }, i.addListener = function (e, n) {
    var i,
        r = this.getListenersAsObject(e),
        s = "object" == typeof n;

    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
      listener: n,
      once: !1
    });

    return this;
  }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    });
  }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
    return this.getListeners(e), this;
  }, i.defineEvents = function (e) {
    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);

    return this;
  }, i.removeListener = function (e, n) {
    var i,
        r,
        s = this.getListenersAsObject(e);

    for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));

    return this;
  }, i.off = n("removeListener"), i.addListeners = function (e, t) {
    return this.manipulateListeners(!1, e, t);
  }, i.removeListeners = function (e, t) {
    return this.manipulateListeners(!0, e, t);
  }, i.manipulateListeners = function (e, t, n) {
    var i,
        r,
        s = e ? this.removeListener : this.addListener,
        o = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) s.call(this, t, n[i]);else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
    return this;
  }, i.removeEvent = function (e) {
    var t,
        n = typeof e,
        i = this._getEvents();

    if ("string" === n) delete i[e];else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];else delete this._events;
    return this;
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
    var n,
        i,
        r,
        s,
        o = this.getListenersAsObject(e);

    for (r in o) if (o.hasOwnProperty(r)) for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);

    return this;
  }, i.trigger = n("emitEvent"), i.emit = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
  }, i.setOnceReturnValue = function (e) {
    return this._onceReturnValue = e, this;
  }, i._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
  }, i._getEvents = function () {
    return this._events || (this._events = {});
  }, e.noConflict = function () {
    return r.EventEmitter = s, e;
  },  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function () {
    return e;
  }).apply(__WEBPACK_LOCAL_MODULE_0__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__exports)) : 0;
}).call(this), function (e) {
  function t(t) {
    var n = e.event;
    return n.target = n.target || n.srcElement || t, n;
  }

  var n = document.documentElement,
      i = function () {};

  n.addEventListener ? i = function (e, t, n) {
    e.addEventListener(t, n, !1);
  } : n.attachEvent && (i = function (e, n, i) {
    e[n + i] = i.handleEvent ? function () {
      var n = t(e);
      i.handleEvent.call(i, n);
    } : function () {
      var n = t(e);
      i.call(e, n);
    }, e.attachEvent("on" + n, e[n + i]);
  });

  var r = function () {};

  n.removeEventListener ? r = function (e, t, n) {
    e.removeEventListener(t, n, !1);
  } : n.detachEvent && (r = function (e, t, n) {
    e.detachEvent("on" + t, e[t + n]);

    try {
      delete e[t + n];
    } catch (i) {
      e[t + n] = void 0;
    }
  });
  var s = {
    bind: i,
    unbind: r
  };
   true ? !(__WEBPACK_LOCAL_MODULE_1__factory = (s), (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_1__module = { id: "eventie/eventie", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)) : __WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__factory)) : 0;
}(this), function (e, t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (n, i) {
    return t(e, n, i);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function (e, t, n) {
  function i(e, t) {
    for (var n in t) e[n] = t[n];

    return e;
  }

  function r(e) {
    return "[object Array]" == f.call(e);
  }

  function s(e) {
    var t = [];
    if (r(e)) t = e;else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]);else t.push(e);
    return t;
  }

  function o(e, t, n) {
    if (!(this instanceof o)) return new o(e, t, n);
    "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred());
    var r = this;
    setTimeout(function () {
      r.check();
    });
  }

  function h(e) {
    this.img = e;
  }

  function a(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }

  var u = e.jQuery,
      c = e.console,
      f = Object.prototype.toString;
  o.prototype = new t(), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [];

    for (var e = 0; e < this.elements.length; e++) {
      var t = this.elements[e];
      this.addElementImages(t);
    }
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;

    if (t && d[t]) {
      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var r = n[i];
        this.addImage(r);
      }

      if ("string" == typeof this.options.background) {
        var s = e.querySelectorAll(this.options.background);

        for (i = 0; i < s.length; i++) {
          var o = s[i];
          this.addElementBackgroundImages(o);
        }
      }
    }
  };
  var d = {
    1: !0,
    9: !0,
    11: !0
  };

  o.prototype.addElementBackgroundImages = function (e) {
    for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
      var r = i && i[1];
      r && this.addBackground(r, e), i = n.exec(t.backgroundImage);
    }
  };

  var m = e.getComputedStyle || function (e) {
    return e.currentStyle;
  };

  return o.prototype.addImage = function (e) {
    var t = new h(e);
    this.images.push(t);
  }, o.prototype.addBackground = function (e, t) {
    var n = new a(e, t);
    this.images.push(n);
  }, o.prototype.check = function () {
    function e(e, n, i) {
      setTimeout(function () {
        t.progress(e, n, i);
      });
    }

    var t = this;
    if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();

    for (var n = 0; n < this.images.length; n++) {
      var i = this.images[n];
      i.once("progress", e), i.check();
    }
  }, o.prototype.progress = function (e, t, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t);
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";

    if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this);
    }
  }, h.prototype = new t(), h.prototype.check = function () {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src));
  }, h.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth;
  }, h.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("progress", this, this.img, t);
  }, h.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e);
  }, h.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, h.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, h.prototype.unbindEvents = function () {
    n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this);
  }, a.prototype = new h(), a.prototype.check = function () {
    n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, a.prototype.unbindEvents = function () {
    n.unbind(this.img, "load", this), n.unbind(this.img, "error", this);
  }, a.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("progress", this, this.element, t);
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
      var n = new o(this, e, t);
      return n.jqDeferred.promise(u(this));
    });
  }, o.makeJQueryPlugin(), o;
});

/***/ }),

/***/ "./src/js/vendor/jquery.filterizr.min.js":
/*!***********************************************!*\
  !*** ./src/js/vendor/jquery.filterizr.min.js ***!
  \***********************************************/
/***/ (function() {

!function (t, e) {
  "use strict";

  if (!e) throw new Error("Filterizr requires jQuery to work.");

  var r = function (t) {
    this.init(t);
  };

  r.prototype = {
    init: function (t) {
      this.root = {
        x: 0,
        y: 0,
        w: t
      };
    },
    fit: function (t) {
      var e,
          r,
          i,
          n = t.length,
          o = n > 0 ? t[0].h : 0;

      for (this.root.h = o, e = 0; n > e; e++) i = t[e], (r = this.findNode(this.root, i.w, i.h)) ? i.fit = this.splitNode(r, i.w, i.h) : i.fit = this.growDown(i.w, i.h);
    },
    findNode: function (t, e, r) {
      return t.used ? this.findNode(t.right, e, r) || this.findNode(t.down, e, r) : e <= t.w && r <= t.h ? t : null;
    },
    splitNode: function (t, e, r) {
      return t.used = !0, t.down = {
        x: t.x,
        y: t.y + r,
        w: t.w,
        h: t.h - r
      }, t.right = {
        x: t.x + e,
        y: t.y,
        w: t.w - e,
        h: r
      }, t;
    },
    growDown: function (t, e) {
      var r;
      return this.root = {
        used: !0,
        x: 0,
        y: 0,
        w: this.root.w,
        h: this.root.h + e,
        down: {
          x: 0,
          y: this.root.h,
          w: this.root.w,
          h: e
        },
        right: this.root
      }, (r = this.findNode(this.root, t, e)) ? this.splitNode(r, t, e) : null;
    }
  }, e.fn.filterizr = function () {
    var t = this,
        r = arguments;

    if (t._fltr || (t._fltr = e.fn.filterizr.prototype.init(t.selector, "object" == typeof r[0] ? r[0] : void 0)), "string" == typeof r[0]) {
      if (r[0].lastIndexOf("_") > -1) throw new Error("Filterizr error: You cannot call private methods");
      if ("function" != typeof t._fltr[r[0]]) throw new Error("Filterizr error: There is no such function");

      t._fltr[r[0]](r[1], r[2]);
    }

    return t;
  }, e.fn.filterizr.prototype = {
    init: function (t, r) {
      var i = e(t).extend(e.fn.filterizr.prototype);
      return i.options = {
        animationDuration: .5,
        callbacks: {
          onFilteringStart: function () {},
          onFilteringEnd: function () {}
        },
        delay: 0,
        delayMode: "progressive",
        easing: "ease-out",
        filter: "all",
        filterOutCss: {
          opacity: 0,
          transform: "scale(0.5)"
        },
        filterInCss: {
          opacity: 1,
          transform: "scale(1)"
        },
        layout: "sameSize",
        selector: "string" == typeof t ? t : ".filtr-container",
        setupControls: !0
      }, 0 === arguments.length && (t = i.options.selector, r = i.options), 1 === arguments.length && "object" == typeof arguments[0] && (r = arguments[0]), r && i.setOptions(r), i.css({
        padding: 0,
        position: "relative"
      }), i._lastCategory = 0, i._isAnimating = !1, i._mainArray = i._getFiltrItems(), i._subArrays = i._makeSubarrays(), i._activeArray = i._getCollectionByFilter(i.options.filter), i._toggledCategories = {}, i._typedText = e("input[data-search]").val() || "", i._uID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var e = 16 * Math.random() | 0,
            r = "x" == t ? e : 3 & e | 8;
        return r.toString(16);
      }), i._setupEvents(), i.options.setupControls && i._setupControls(), i.filter(i.options.filter), i;
    },
    filter: function (t) {
      var e = this,
          r = e._getCollectionByFilter(t);

      e.options.filter = t, e.trigger("filteringStart"), e._handleFiltering(r), e._isSearchActivated() && e.search(e._typedText);
    },
    toggleFilter: function (t) {
      var e = this,
          r = [];
      e.trigger("filteringStart"), e._toggledCategories[t] ? delete e._toggledCategories[t] : e._toggledCategories[t] = !0, e._multifilterModeOn() ? (r = e._makeMultifilterArray(), e._handleFiltering(r), e._isSearchActivated() && e.search(e._typedText)) : (e.filter("all"), e._isSearchActivated() && e.search(e._typedText));
    },
    search: function (t) {
      var e = this,
          r = e._multifilterModeOn() ? e._makeMultifilterArray() : e._getCollectionByFilter(e.options.filter),
          i = [],
          n = 0;
      if (e._isSearchActivated()) for (n = 0; n < r.length; n++) {
        var o = r[n].text().toLowerCase().indexOf(t.toLowerCase()) > -1;
        o && i.push(r[n]);
      }
      if (i.length > 0) e._handleFiltering(i);else if (e._isSearchActivated()) for (n = 0; n < e._activeArray.length; n++) e._activeArray[n]._filterOut();else e._handleFiltering(r);
    },
    shuffle: function () {
      var t = this;
      t._mainArray = t._fisherYatesShuffle(t._mainArray), t._subArrays = t._makeSubarrays();
      var e = t._multifilterModeOn() ? t._makeMultifilterArray() : t._getCollectionByFilter(t.options.filter);
      t._isSearchActivated() ? t.search(t._typedText) : t._placeItems(e);
    },
    sort: function (t, e) {
      var r = this;
      t = t || "domIndex", e = e || "asc";
      var i = "domIndex" !== t && "sortData" !== t && "w" !== t && "h" !== t;
      if (i) for (var n = 0; n < r._mainArray.length; n++) r._mainArray[n][t] = r._mainArray[n].data(t);
      r._mainArray.sort(r._comparator(t, e)), r._subArrays = r._makeSubarrays();
      var o = r._multifilterModeOn() ? r._makeMultifilterArray() : r._getCollectionByFilter(r.options.filter);
      r._isSearchActivated() ? r.search(r._typedText) : r._placeItems(o);
    },
    setOptions: function (t) {
      var e = this,
          r = 0;

      for (var i in t) e.options[i] = t[i];

      if (e._mainArray && (t.animationDuration || t.delay || t.easing || t.delayMode)) for (r = 0; r < e._mainArray.length; r++) e._mainArray[r].css("transition", "all " + e.options.animationDuration + "s " + e.options.easing + " " + e._mainArray[r]._calcDelay() + "ms");
      e.options.filterInCss.transform || (e.options.filterInCss.transform = "translate3d(0,0,0)"), e.options.filterOutCss.transform || (e.options.filterOutCss.transform = "translate3d(0,0,0)");
    },
    _getFiltrItems: function () {
      var t = this,
          r = e(t.find(".filtr-item")),
          n = [];
      return e.each(r, function (r, o) {
        var a = e(o).extend(i)._init(r, t);

        n.push(a);
      }), n;
    },
    _makeSubarrays: function () {
      for (var t = this, e = [], r = 0; r < t._lastCategory; r++) e.push([]);

      for (r = 0; r < t._mainArray.length; r++) if ("object" == typeof t._mainArray[r]._category) for (var i in t._mainArray[r]._category) e[t._mainArray[r]._category[i] - 1].push(t._mainArray[r]);else e[t._mainArray[r]._category - 1].push(t._mainArray[r]);

      return e;
    },
    _makeMultifilterArray: function () {
      for (var t = this, e = [], r = {}, i = 0; i < t._mainArray.length; i++) {
        var n = t._mainArray[i],
            o = !1,
            a = n.domIndex in r == !1;

        if (Array.isArray(n._category)) {
          for (var s = 0; s < n._category.length; s++) if (n._category[s] in t._toggledCategories) {
            o = !0;
            break;
          }
        } else n._category in t._toggledCategories && (o = !0);

        a && o && (r[n.domIndex] = !0, e.push(n));
      }

      return e;
    },
    _setupControls: function () {
      var t = this;
      e("*[data-filter]").click(function () {
        var r = e(this).data("filter");
        t.options.filter !== r && t.filter(r);
      }), e("*[data-multifilter]").click(function () {
        var r = e(this).data("multifilter");
        "all" === r ? (t._toggledCategories = {}, t.filter("all")) : t.toggleFilter(r);
      }), e("*[data-shuffle]").click(function () {
        t.shuffle();
      }), e("*[data-sortAsc]").click(function () {
        var r = e("*[data-sortOrder]").val();
        t.sort(r, "asc");
      }), e("*[data-sortDesc]").click(function () {
        var r = e("*[data-sortOrder]").val();
        t.sort(r, "desc");
      }), e("input[data-search]").keyup(function () {
        t._typedText = e(this).val(), t._delayEvent(function () {
          t.search(t._typedText);
        }, 250, t._uID);
      });
    },
    _setupEvents: function () {
      var r = this;
      e(t).resize(function () {
        r._delayEvent(function () {
          r.trigger("resizeFiltrContainer");
        }, 250, r._uID);
      }), r.on("resizeFiltrContainer", function () {
        r._multifilterModeOn() ? r.toggleFilter() : r.filter(r.options.filter);
      }).on("filteringStart", function () {
        r.options.callbacks.onFilteringStart();
      }).on("filteringEnd", function () {
        r.options.callbacks.onFilteringEnd();
      });
    },
    _calcItemPositions: function () {
      var t = this,
          i = t._activeArray,
          n = 0,
          o = Math.round(t.width() / t.find(".filtr-item").outerWidth()),
          a = 0,
          s = i[0].outerWidth(),
          l = 0,
          f = 0,
          u = 0,
          c = 0,
          _ = 0,
          h = [];

      if ("packed" === t.options.layout) {
        e.each(t._activeArray, function (t, e) {
          e._updateDimensions();
        });
        var d = new r(t.outerWidth());

        for (d.fit(t._activeArray), c = 0; c < i.length; c++) h.push({
          left: i[c].fit.x,
          top: i[c].fit.y
        });

        n = d.root.h;
      }

      if ("horizontal" === t.options.layout) for (a = 1, c = 1; c <= i.length; c++) s = i[c - 1].outerWidth(), l = i[c - 1].outerHeight(), h.push({
        left: f,
        top: u
      }), f += s, l > n && (n = l);else if ("vertical" === t.options.layout) {
        for (c = 1; c <= i.length; c++) l = i[c - 1].outerHeight(), h.push({
          left: f,
          top: u
        }), u += l;

        n = u;
      } else if ("sameHeight" === t.options.layout) {
        a = 1;
        var g = t.outerWidth();

        for (c = 1; c <= i.length; c++) {
          s = i[c - 1].width();
          var p = i[c - 1].outerWidth(),
              y = 0;
          i[c] && (y = i[c].width()), h.push({
            left: f,
            top: u
          }), _ = f + s + y, _ > g ? (_ = 0, f = 0, u += i[0].outerHeight(), a++) : f += p;
        }

        n = a * i[0].outerHeight();
      } else if ("sameWidth" === t.options.layout) {
        for (c = 1; c <= i.length; c++) {
          if (h.push({
            left: f,
            top: u
          }), c % o === 0 && a++, f += s, u = 0, a > 0) for (_ = a; _ > 0;) u += i[c - o * _].outerHeight(), _--;
          c % o === 0 && (f = 0);
        }

        for (c = 0; o > c; c++) {
          for (var m = 0, v = c; i[v];) m += i[v].outerHeight(), v += o;

          m > n ? (n = m, m = 0) : m = 0;
        }
      } else if ("sameSize" === t.options.layout) {
        for (c = 1; c <= i.length; c++) h.push({
          left: f,
          top: u
        }), f += s, c % o === 0 && (u += i[0].outerHeight(), f = 0);

        a = Math.ceil(i.length / o), n = a * i[0].outerHeight();
      }
      return t.css("height", n), h;
    },
    _handleFiltering: function (t) {
      for (var e = this, r = e._getArrayOfUniqueItems(e._activeArray, t), i = 0; i < r.length; i++) r[i]._filterOut();

      e._activeArray = t, e._placeItems(t);
    },
    _multifilterModeOn: function () {
      var t = this;
      return Object.keys(t._toggledCategories).length > 0;
    },
    _isSearchActivated: function () {
      var t = this;
      return t._typedText.length > 0;
    },
    _placeItems: function (t) {
      var e = this;
      e._isAnimating = !0, e._itemPositions = e._calcItemPositions();

      for (var r = 0; r < t.length; r++) t[r]._filterIn(e._itemPositions[r]);
    },
    _getCollectionByFilter: function (t) {
      var e = this;
      return "all" === t ? e._mainArray : e._subArrays[t - 1];
    },
    _makeDeepCopy: function (t) {
      var e = {};

      for (var r in t) e[r] = t[r];

      return e;
    },
    _comparator: function (t, e) {
      return function (r, i) {
        return "asc" === e ? r[t] < i[t] ? -1 : r[t] > i[t] ? 1 : 0 : "desc" === e ? i[t] < r[t] ? -1 : i[t] > r[t] ? 1 : 0 : void 0;
      };
    },
    _getArrayOfUniqueItems: function (t, e) {
      var r,
          i,
          n = [],
          o = {},
          a = e.length;

      for (r = 0; a > r; r++) o[e[r].domIndex] = !0;

      for (a = t.length, r = 0; a > r; r++) i = t[r], i.domIndex in o || n.push(i);

      return n;
    },
    _delayEvent: function () {
      var t = {};
      return function (e, r, i) {
        if (null === i) throw Error("UniqueID needed");
        t[i] && clearTimeout(t[i]), t[i] = setTimeout(e, r);
      };
    }(),
    _fisherYatesShuffle: function (t) {
      for (var e, r, i = t.length; i;) r = Math.floor(Math.random() * i--), e = t[i], t[i] = t[r], t[r] = e;

      return t;
    }
  };
  var i = {
    _init: function (t, e) {
      var r = this;
      return r._parent = e, r._category = r._getCategory(), r._lastPos = {}, r.domIndex = t, r.sortData = r.data("sort"), r.w = 0, r.h = 0, r._isFilteredOut = !0, r._filteringOut = !1, r._filteringIn = !1, r.css(e.options.filterOutCss).css({
        "-webkit-backface-visibility": "hidden",
        perspective: "1000px",
        "-webkit-perspective": "1000px",
        "-webkit-transform-style": "preserve-3d",
        position: "absolute",
        transition: "all " + e.options.animationDuration + "s " + e.options.easing + " " + r._calcDelay() + "ms"
      }), r.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
        r._onTransitionEnd();
      }), r;
    },
    _updateDimensions: function () {
      var t = this;
      t.w = t.outerWidth(), t.h = t.outerHeight();
    },
    _calcDelay: function () {
      var t = this,
          e = 0;
      return "progressive" === t._parent.options.delayMode ? e = t._parent.options.delay * t.domIndex : t.domIndex % 2 === 0 && (e = t._parent.options.delay), e;
    },
    _getCategory: function () {
      var t = this,
          e = t.data("category");

      if ("string" == typeof e) {
        e = e.split(", ");

        for (var r in e) {
          if (isNaN(parseInt(e[r]))) throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");
          e[r] > t._parent._lastCategory && (t._parent._lastCategory = e[r]);
        }
      } else e > t._parent._lastCategory && (t._parent._lastCategory = e);

      return e;
    },
    _onTransitionEnd: function () {
      var t = this;
      t._filteringOut ? (e(t).addClass("filteredOut"), t._isFilteredOut = !0, t._filteringOut = !1) : t._filteringIn && (t._isFilteredOut = !1, t._filteringIn = !1), t._parent._isAnimating && (t._parent.trigger("filteringEnd"), t._parent._isAnimating = !1);
    },
    _filterOut: function () {
      var t = this,
          e = t._parent._makeDeepCopy(t._parent.options.filterOutCss);

      e.transform += " translate3d(" + t._lastPos.left + "px," + t._lastPos.top + "px, 0)", t.css(e), t._filteringOut = !0;
    },
    _filterIn: function (t) {
      var r = this,
          i = r._parent._makeDeepCopy(r._parent.options.filterInCss);

      e(r).removeClass("filteredOut"), r._filteringIn = !0, r._lastPos = t, i.transform += " translate3d(" + t.left + "px," + t.top + "px, 0)", r.css(i);
    }
  };
}(this, jQuery);

/***/ }),

/***/ "./src/js/vendor/jquery.waypoints.min.js":
/*!***********************************************!*\
  !*** ./src/js/vendor/jquery.waypoints.min.js ***!
  \***********************************************/
/***/ (() => {

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function () {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }

  var e = 0,
      i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t);
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function () {
    return this.enabled = !1, this;
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this;
  }, t.prototype.next = function () {
    return this.group.next(this);
  }, t.prototype.previous = function () {
    return this.group.previous(this);
  }, t.invokeAll = function (t) {
    var e = [];

    for (var o in i) e.push(i[o]);

    for (var n = 0, r = e.length; r > n; n++) e[n][t]();
  }, t.destroyAll = function () {
    t.invokeAll("destroy");
  }, t.disableAll = function () {
    t.invokeAll("disable");
  }, t.enableAll = function () {
    t.invokeAll("enable");
  }, t.refreshAll = function () {
    t.Context.refreshAll();
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  }, window.Waypoint = t;
}(), function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60);
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }

  var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh();
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical);
    t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1;
    }

    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1;
    }

    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll();
  }, e.prototype.handleScroll = function () {
    var t = {},
        e = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up"
      }
    };

    for (var i in e) {
      var o = e[i],
          n = o.newScroll > o.oldScroll,
          r = n ? o.forward : o.backward;

      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s],
            l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;
        (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
      }
    }

    for (var c in t) t[c].flushTriggers();

    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    };
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty();
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function () {
    var t = [];

    for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);

    for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
  }, e.prototype.refresh = function () {
    var t,
        e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };

    for (var r in t) {
      var s = t[r];

      for (var a in this.waypoints[r]) {
        var l,
            h,
            p,
            u,
            c,
            d = this.waypoints[r][a],
            f = d.options.offset,
            w = d.triggerPoint,
            y = 0,
            g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
      }
    }

    return n.requestAnimationFrame(function () {
      for (var t in o) o[t].flushTriggers();
    }), this;
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t);
  }, e.refreshAll = function () {
    for (var t in o) o[t].refresh();
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey];
  }, window.onload = function () {
    r && r(), e.refreshAll();
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e);
  }, n.Context = e;
}(), function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint;
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint;
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
  }

  var o = {
    vertical: {},
    horizontal: {}
  },
      n = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t);
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
          n = "up" === i || "left" === i;
      o.sort(n ? e : t);

      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
      }
    }

    this.clearTriggerQueues();
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
        o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1];
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null;
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t);
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1);
  }, i.prototype.first = function () {
    return this.waypoints[0];
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t);
  }, n.Group = i;
}(), function () {
  "use strict";

  function t(t) {
    this.$element = e(t);
  }

  var e = window.jQuery,
      i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t);
    };
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o];
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t;
}(), function () {
  "use strict";

  function t(t) {
    return function () {
      var i = [],
          o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
      }), i;
    };
  }

  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();

/***/ }),

/***/ "./src/js/vendor/particles.min.js":
/*!****************************************!*\
  !*** ./src/js/vendor/particles.min.js ***!
  \****************************************/
/***/ (() => {

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null;
}

function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
  return a.indexOf(e) > -1;
}

var pJS = function (e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: t,
      w: t.offsetWidth,
      h: t.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a), i.tmp.obj = {
    size_value: i.particles.size.value,
    size_anim_speed: i.particles.size.anim.speed,
    move_speed: i.particles.move.speed,
    line_linked_distance: i.particles.line_linked.distance,
    line_linked_width: i.particles.line_linked.width,
    mode_grab_distance: i.interactivity.modes.grab.distance,
    mode_bubble_distance: i.interactivity.modes.bubble.distance,
    mode_bubble_size: i.interactivity.modes.bubble.size,
    mode_repulse_distance: i.interactivity.modes.repulse.distance
  }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
        this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    } else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var n = {};

    switch (i.particles.move.direction) {
      case "top":
        n = {
          x: 0,
          y: -1
        };
        break;

      case "top-right":
        n = {
          x: .5,
          y: -.5
        };
        break;

      case "right":
        n = {
          x: 1,
          y: -0
        };
        break;

      case "bottom-right":
        n = {
          x: .5,
          y: .5
        };
        break;

      case "bottom":
        n = {
          x: 0,
          y: 1
        };
        break;

      case "bottom-left":
        n = {
          x: -.5,
          y: 1
        };
        break;

      case "left":
        n = {
          x: -1,
          y: 0
        };
        break;

      case "top-left":
        n = {
          x: -.5,
          y: -.5
        };
        break;

      default:
        n = {
          x: 0,
          y: 0
        };
    }

    i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = i.particles.shape.type;

    if ("object" == typeof r) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];
        this.shape = c;
      }
    } else this.shape = r;

    if ("image" == this.shape) {
      var o = i.particles.shape;
      this.img = {
        src: o.image.src,
        ratio: o.image.width / o.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }

    var a = this;
    if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;
    if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;
    if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";

    switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
        break;

      case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
        break;

      case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
        break;

      case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
        break;

      case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
        break;

      case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;
        r && e();
    }

    i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];

      if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;
        a.x += a.vx * t, a.y += a.vy * t;
      }

      if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
        x_left: a.radius,
        x_right: i.canvas.w,
        y_top: a.radius,
        y_bottom: i.canvas.h
      };else var s = {
        x_left: -a.radius,
        x_right: i.canvas.w + a.radius,
        y_top: -a.radius,
        y_bottom: i.canvas.h + a.radius
      };

      switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
        case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
      }

      if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];
        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();

    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];
      a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;

      if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;
        i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
    n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;

    for (var t = 0; e > t; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
      x: a ? a.pos_x : Math.random() * i.canvas.w,
      y: a ? a.pos_y : Math.random() * i.canvas.h
    })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }

    function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;
          d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;

        if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
          "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }

    if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;

      if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;
            o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;
            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }
          if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;
            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();

      "mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
        p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }

      i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);

      if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = {
          x: e.x + e.vx,
          y: e.y + e.vy
        };
        t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }

    if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = {
        x: t / n,
        y: s / n
      },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = {
        x: e.x + r.x * l,
        y: e.y + r.y * l
      };
      "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;
      c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);

      if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;

        if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;
          i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;
      i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
        case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
          break;

        case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
          break;

        case "bubble":
          i.tmp.bubble_clicking = !0;
          break;

        case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);
      }
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;
      i.tmp.retina && (e /= 2 * i.canvas.pxratio);
      var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
      0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
      c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
      return n;
    }),
        n = new Blob([s], {
      type: "image/svg+xml;charset=utf-8"
    }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
    o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;
    e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);

    for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);

    e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();
        a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();
        t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};

Object.deepExtend = function (e, a) {
  for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];

  return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
  var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
  if (s.length) for (; s.length > 0;) t.removeChild(s[0]);
  var n = document.createElement("canvas");
  n.className = i, n.style.width = "100%", n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();
  i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);
      window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
// import './_vendor';
// import vars from './_vars';
// import './_functions';

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
>>>>>>> 832040fb81ff8603f4dea6afa04642e0deeff629
