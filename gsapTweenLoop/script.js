const controller = new ScrollMagic.Controller();


$(".section").each(function(i){
    let inner = $(this).find('.inner');
    let outer = $(this).find('.outer');

    let tl = new TimelineMax();

    tl.from(outer, 0.25, { scaleX: 0 })
    tl.from(inner, 0.65, { ypercent: 100, ease: Back.easeOut })

    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.15
    })
    .setTween(tl)
    .addIndicators({
        colorTrigger: "white",
        colorStart : "white",
        colorEnd: 'white',
        indent: 40
    })
    .addTo(controller);
})  
    