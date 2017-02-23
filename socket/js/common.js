/**
 * Created by wangzeming on 15/12/22.
 */

var fps = 1000/12;
//var load_img = [];
//var timer = null;
//for(var i =1; i< 327; i++){
//    load_img.push('img/animate1/' + i + '.jpg')
//}
//
//var load_img_progress = 0;
//var load_img_total = load_img.length;
//function loading (){
//    jQuery.imgpreload(load_img,{
//        each: function() {
//            var status = $(this).data('loaded') ? 'success' : 'error';
//            if (status == 'success') {
//                load_img_progress++;
//                var percent = Math.ceil(load_img_progress / load_img_total * 100);
//                $('#loading .percent').html(percent + '%');
//            }
//        },
//        all: function() {
//            $('#loading').hide()
//            timer = setInterval(draw,fps)
//        }
//    });
//}
//var draw1Index = 1;
//function draw (){
//    draw1Index++;
//    console.log(draw1Index)
//    var before = draw1Index - 2;
//    var after = draw1Index + 9;
//    $('#wrap .bg .img-' + before).remove();
//    $('#wrap .bg .img-' + draw1Index).addClass('show');
//    if (after <= 327 && after > 10) {
//        $('#wrap .bg').append('<img src="img/animate1/' + after + '.jpg" class="img-' + after + '">');
//    }
//    if(draw1Index == 328){
//        clearInterval(timer)
//    }
//}
$(function(){
    //loading()
    $('body').on('touchend','.music',function(){
        $(this).toggleClass('on')
    })
    $('body').on('touchend','.btn-2',function(){
        $('.share').show();
    })
    $('body').on('touchend','.share',function(){
        $(this).hide();
    })
    $('body').on('touchend','.music',function(){
        var ms = document.getElementById('bg')
        //ms.paused
        if (ms !== null) {
            if (!ms.paused) {
                ms.pause();// 这个就是暂停//audio.play();// 这个就是播放
                $('.topinfo .music').css('opacity', '0.5')
            } else {
                ms.play()
                $('.topinfo .music').css('opacity', '1')
            }
        }
    })

})