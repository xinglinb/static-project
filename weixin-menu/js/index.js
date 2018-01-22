// index.js
$(document).ready(function() {


    $.ajax({
        url: './json.json',
        timeout: 5000,
        type: 'GET',
        dataType: 'json',
        success: succyFun,
        error: erroyFun
    })

    function succyFun(data) {
        console.log(data);
        if (data.success) {
            for (let i in data.data) {
                if ((i + 1) % 3 == 0) {
                    $('.div-body').append(`<div style="width:26%;" class="module div-m l-col"><a href="${data.data[i].link}"><img src="${data.data[i].url}" /><p>${data.data[i].title}</p></a></div>`)

                } else if (data.data[i].id == 0) {
                    $('.div-body').append(`<div style="width:26%;" class="module logo "><a href="${data.data[i].link}"><img src="${data.data[i].url}" /></a></div>`)

                } else {
                    $('.div-body').append(`<div style="width:26%;" class="module div-m"><a href="${data.data[i].link}"><img src="${data.data[i].url}" /><p>${data.data[i].title}</p></a></div>`)

                }

            }
            $('.div-body').append(`<div class="clear"></div>`)
            var width = $('.div-body').find('.module').css('width')
            console.log(width)
            $('.module').css('height', width)
        } else {
            alert(data.message)
        }
    }

    function erroyFun() {
        alert('error!')
    }


})