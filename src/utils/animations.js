export const animateWithGsapTimeline = (timeline, roationRef, roationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(roationRef.current.rotation, {
        y:roationState,
        duration:1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
     
    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

}