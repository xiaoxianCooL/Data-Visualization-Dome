(function($) {
    // 插件的定义  
    $.fn.scale = function(options) {
        var obj = this;
        var opts = $.extend({}, $.fn.scale.defaults, options);
        init(obj, opts);
        $(window).resize(function(event) {
            init(obj, opts);
        });
    };

    function init(obj, opts) {
        var w = $(window).width();
        var h = $(window).height();
        var obj_w = obj.width() + opts.offset * 2;
        if (w < opts.scale_w) {
            var xScale = w / obj_w; //缩放比例
            var yScale = xScale;
            //缩放以及偏移
            obj.css({
                'transform': 'scale(' + xScale + ', ' + yScale + ')',
                'transform-origin': '0px 0px',
                /* IE 9 */
                '-ms-transform': 'scale(' + xScale + ', ' + yScale + ')',
                '-ms-transform-origin': '0px 0px',
                /* Safari 和 Chrome */
                '-webkit-transform': 'scale(' + xScale + ', ' + yScale + ')',
                '-webkit-transform-origin': '0px 0px',
                /* Firefox */
                '-moz-transform': 'scale(' + xScale + ', ' + yScale + ')',
                '-moz-transform-origin': '0px 0px',
                /* Opera */
                '-o-transform': 'scale(' + xScale + ', ' + yScale + ')',
                '-o-transform-origin': '0px 0px'
            });
        } else {
            obj.css({
                'display': ' block',
                'margin': '0 auto',
                'transform': 'scale(1, 1)',
                'transform-origin': '0px 0px',
                /* IE 9 */
                '-ms-transform': 'scale(1, 1)',
                '-ms-transform-origin': '0px 0px',
                /* Safari 和 Chrome */
                '-webkit-transform': 'scale(1, 1)',
                '-webkit-transform-origin': '0px 0px',
                /* Firefox */
                '-moz-transform': 'scale(1, 1)',
                '-moz-transform-origin': '0px 0px',
                /* Opera */
                '-o-transform': 'scale(1, 1)',
                '-o-transform-origin': '0px 0px'
            });
        }
    }
    // 插件的defaults  
    $.fn.scale.defaults = {
        scale_w: 640, // 缩放标准宽度, 宽度小于此像素进行缩小
        offset: 20 //对象padding偏差
    };
    // 闭包结束  
})(jQuery);
