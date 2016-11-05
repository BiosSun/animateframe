/**
 * Easing
 */
(function (Animate) {
    var easing = Animate.easing,
        math = Math;

    easing.swing = function ( t, b, c, d ) {
        return this[this.def](x, t, b, c, d);
    };

    easing.easeInQuad = function ( t, b, c, d ) {
        return c*(t/=d)*t + b;
    };

    easing.easeOutQuad = function ( t, b, c, d ) {
        return -c *(t/=d)*(t-2) + b;
    };

    easing.easeInOutQuad = function ( t, b, c, d ) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    };

    easing.easeInCubic = function ( t, b, c, d ) {
        return c*(t/=d)*t*t + b;
    };

    easing.easeOutCubic = function ( t, b, c, d ) {
        return c*((t=t/d-1)*t*t + 1) + b;
    };

    easing.easeInOutCubic = function ( t, b, c, d ) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };

    easing.easeInQuart = function ( t, b, c, d ) {
        return c*(t/=d)*t*t*t + b;
    };

    easing.easeOutQuart = function ( t, b, c, d ) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };

    easing.easeInOutQuart = function ( t, b, c, d ) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    };

    easing.easeInQuint = function ( t, b, c, d ) {
        return c*(t/=d)*t*t*t*t + b;
    };

    easing.easeOutQuint = function ( t, b, c, d ) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    };

    easing.easeInOutQuint = function ( t, b, c, d ) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    };

    easing.easeInSine = function ( t, b, c, d ) {
        return -c * math.cos(t/d * (math.PI/2)) + c + b;
    };

    easing.easeOutSine = function ( t, b, c, d ) {
        return c * math.sin(t/d * (math.PI/2)) + b;
    };

    easing.easeInOutSine = function ( t, b, c, d ) {
        return -c/2 * (math.cos(math.PI*t/d) - 1) + b;
    };

    easing.easeInExpo = function ( t, b, c, d ) {
        return (t==0) ? b : c * math.pow(2, 10 * (t/d - 1)) + b;
    };

    easing.easeOutExpo = function ( t, b, c, d ) {
        return (t==d) ? b+c : c * (-math.pow(2, -10 * t/d) + 1) + b;
    };

    easing.easeInOutExpo = function ( t, b, c, d ) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-math.pow(2, -10 * --t) + 2) + b;
    };

    easing.easeInCirc = function ( t, b, c, d ) {
        return -c * (math.sqrt(1 - (t/=d)*t) - 1) + b;
    };

    easing.easeOutCirc = function ( t, b, c, d ) {
        return c * math.sqrt(1 - (t=t/d-1)*t) + b;
    };

    easing.easeInOutCirc = function ( t, b, c, d ) {
        if ((t/=d/2) < 1) return -c/2 * (math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (math.sqrt(1 - (t-=2)*t) + 1) + b;
    };

    easing.easeInElastic = function ( t, b, c, d ) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*math.PI) * math.asin (c/a);
        return -(a*math.pow(2,10*(t-=1)) * math.sin( (t*d-s)*(2*math.PI)/p )) + b;
    };

    easing.easeOutElastic = function ( t, b, c, d ) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*math.PI) * math.asin (c/a);
        return a*math.pow(2,-10*t) * math.sin( (t*d-s)*(2*math.PI)/p ) + c + b;
    };

    easing.easeInOutElastic = function ( t, b, c, d ) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*math.PI) * math.asin (c/a);
        if (t < 1) return -.5*(a*math.pow(2,10*(t-=1)) * math.sin( (t*d-s)*(2*math.PI)/p )) + b;
        return a*math.pow(2,-10*(t-=1)) * math.sin( (t*d-s)*(2*math.PI)/p )*.5 + c + b;
    };

    easing.easeInBack = function ( t, b, c, d, s ) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    };

    easing.easeOutBack = function ( t, b, c, d, s ) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    };

    easing.easeInOutBack = function ( t, b, c, d, s ) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    };

    easing.easeInBounce = function ( t, b, c, d ) {
        return c - this.easeOutBounce (d-t, 0, c, d) + b;
    };

    easing.easeOutBounce = function ( t, b, c, d ) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    };

    easing.easeInOutBounce = function ( t, b, c, d ) {
        if (t < d/2) return this.easeInBounce (t*2, 0, c, d) * .5 + b;
        return this.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
    };
})(Animate);
