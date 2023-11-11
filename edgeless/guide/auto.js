try {
    var timer;
    $("#form-iframe").load(function () {
        if (timer) {
            clearInterval(timer);
        }
        //pre_height用于记录上次检查时body的高度
        //mainheight用于获取本次检查时body的高度，并赋予iframe的高度
        var mainheight, pre_height;
        var frame = $(this);
        timer = setInterval(function () {
            mainheight = $(document.body).height() + 10;
            if (mainheight != pre_height) {
                pre_height = mainheight;
                frame.height(Math.max(mainheight, 350));
            }
        }, 500);//每0.5秒检查一次
    });
} catch (e) {
}

