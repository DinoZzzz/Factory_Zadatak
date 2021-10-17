$(document).ready(function () {
    const topImages = $('.img-top')
    const bottomImages = $('.img-bot')
    const leftBtn = $('.prev-btn')
    const rightBtn = $('.next-btn')

    $(rightBtn).click(() => {
        $(rightBtn).prop('disabled', true)
        let lastImageTop = $(".img-top .image").last()
        $(lastImageTop).clone().prependTo(topImages)
        $(lastImageTop).remove()
        let lastImageBottom = $(".img-bot .image").last()
        $(lastImageBottom).clone().prependTo(bottomImages)
        $(lastImageBottom).remove()
        if ($(rightBtn).is(':animated')) {
            $(rightBtn).prop('disabled', true)
        };
        setTimeout(() => {
            $(rightBtn).prop('disabled', false)
        }, 500)
    })

    $(leftBtn).click(() => {
        $(leftBtn).prop('disabled', true)
        let firstImageTop = $(".img-top .image").first()
        $(firstImageTop).clone().appendTo(topImages)
        $(firstImageTop).remove()
        let firstImageBottom = $(".img-bot .image").first()
        $(firstImageBottom).clone().appendTo(bottomImages)
        $(firstImageBottom).remove()
        setTimeout(() => {
            $(leftBtn).prop('disabled', false)
        }, 500)
    })
});