function attachEventFacebook() {
    try {
        FB.init({
            appId: "400193263386893",
            nativeInterface: CDV.FB,
            useCachedDialogs: false
        });
    }
    catch (e) {
        console.log(e);
    }


    $('.share_facebook_btn').click(function () {
        var msg = $("#TextArea_share").val();
        var str= ($('.share_img').css("background-image"));
        str=str.substring(4, str.length - 1);
        alert(str);
        var params = {
            method: 'feed',
            message: 'msg',
            name: 'CTC.Рецепты — приложение без прикосновения к экрану',
            link: 'http://www.domashniy.ru/article/eda/',
            picture: str,
            caption: 'Привет, Друзья ',
            description: 'Друзья, я готовлю при помощи приложения «СТС.Рецепты» и вот, что у меня получилось!'
        };
        console.log(params);
        FB.ui(params, function (obj) { console.log(obj); });

    });
}