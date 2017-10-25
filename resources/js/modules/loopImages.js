var $ = require('jquery');
var velocity = require('velocity-animate');

$(function () {
    var $list = $('.list');
    var position = 0;

    function animate() {
        window.requestAnimationFrame(animate);
        // $item.css({transform: 'translateX(-' + position + 'px)'});
        velocity($list, {
                translateX: -position
            },
            {
                duration: 0.1
            });
        position = position + 1;
        if (position === 3522) {
            position = 0;
        }

    }

    animate();
});



