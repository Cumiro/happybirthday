let isRotated = false;
function launch_fireworks() {
    particlesJS('fireworks-container', {
        particles: {
            number: {
                value: 300
            },
            color: {
                value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 1,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 5,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 20,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                }
            }
        },
        retina_detect: true
    });
}

function playAudio() {
    const audio = document.getElementById('melody');
    const balloon = document.getElementById('balloon');
    audio.play();
    balloon.classList.add('animated-balloon');
    setTimeout(() => {
        balloon.classList.remove('animated-balloon');
    }, 12000); 
    setTimeout(() => {launch_fireworks();}, 12000);
    setTimeout(function() {
        document.getElementById('fireworks-container').innerHTML = '';
    }, 14000);
}
function rotateCard() {
    const card = document.getElementById('birthdayCard');
    card.classList.toggle('rotate');
    document.body.classList.toggle('flower-background');
    isRotated = !isRotated;
    if (isRotated) {
        document.body.classList.add('change-background-orange');
        document.body.classList.remove('change-background-pink');
    } else {
        document.body.classList.add('change-background-pink');
        document.body.classList.remove('change-background-orange');
    }
    
}
