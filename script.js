$('.fire').on('click', function(){
    anime({
        targets: '.fire',
        translateX: '200px',
        easing: 'easeInOutBounce',
        rotate:50,
        duration: 2000,
        loop: true,
    })
})

$('.totoro').on('click', function(){
    anime({
        targets: '.totoro',
        translateX: '200px',
        easing: 'easeInOutBounce',
        rotate:50,
        duration: 2000,
        loop: true,
    })
})

$('.chernushka').on('click', function(){
    anime({
        targets: '.chernushka',
        translateX: '200px',
        easing: 'easeInOutBounce',
        rotate: 100,
        duration: 2000,
        loop: true,
    })
})