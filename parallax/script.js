function halfScroll(){
    const controller = new ScrollMagic.Controller();
    console.log(controller)
    
    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.content__image',
        triggerHook: 0
    })
    .setPin('.content__image')
    .addIndicators({
        colorTrigger: "red",
        colorStart : "green",
        colorEnd: 'blue',
    })
    .addTo(controller);
}

halfScroll()
