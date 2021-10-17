$(document).ready(function () {
    var topImages = $('.img-top')
    var bottomImages = $('.img-bot')
    var rightBtn = $('.prev-btn')
    var leftBtn = $('.next-btn')

    $(rightBtn).click(() => {
        let lastImageTop = $(".img-top .image").last()
        $(lastImageTop).clone().prependTo(topImages)
        $(lastImageTop).hide('slow').remove()
        let lastImageBottom = $(".img-bot .image").last()
        $(lastImageBottom).clone().prependTo(bottomImages)
        $(lastImageBottom).hide('slow').remove()
    })

    $(leftBtn).click(() => {
        let firstImageTop = $(".img-top .image").first()
        $(firstImageTop).clone().appendTo(topImages)
        $(firstImageTop).hide('slow').remove()
        let firstImageBottom = $(".img-bot .image").first()
        $(firstImageBottom).clone().appendTo(bottomImages)
        $(firstImageBottom).hide('slow').remove()
    })
});