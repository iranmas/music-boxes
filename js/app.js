// const cAudioC = document.querySelector('.c-audioC')
// const cAudioD = document.querySelector('.c-audioD')
// const cAudioE = document.querySelector('.c-audioE')
// const cAudioF = document.querySelector('.c-audioF')
// const cAudioG = document.querySelector('.c-audioG')
// const cAudioL = document.querySelector('.c-audioL')
// const cAudioB = document.querySelector('.c-audioB')
// const cAudioC2 = document.querySelector('.c-audioC2')

const notes = {
    a: {
    audio: document.querySelector('.audioC'),
    pianoKey: document.querySelector('.c-key')
},

s: {
    audio: document.querySelector('.audioD'),
    pianoKey: document.querySelector('.d-key')
},

d: {
    audio: document.querySelector('.audioE'),
    pianoKey: document.querySelector('.e-key')
},

f: {
    audio: document.querySelector('.audioF'),
    pianoKey: document.querySelector('.f-key')
},

g: {
    audio: document.querySelector('.audioG'),
    pianoKey: document.querySelector('.g-key'),
},

h: {
    audio: document.querySelector('.audioL'),
    pianoKey: document.querySelector('.a-key')
},

j: {
    audio: document.querySelector('.audioB'),
    pianoKey: document.querySelector('.b-key')
},

k: {
    audio: document.querySelector('.audioC2'),
    pianoKey: document.querySelector('.high-c-key')
},
}
    // a: document.querySelector('.audioC'),
    // s: document.querySelector('.audioD'),
    // d: document.querySelector('.audioE'),
    // f: document.querySelector('.audioF'),
    // g: document.querySelector('.audioG'),
    // h: document.querySelector('.audioL'),
    // j: document.querySelector('.audioB'),
    // k: document.querySelector('.audioC2')


function playNote(audioElement){
    audioElement.currentTime = 0
    audioElement.play()
}

document.addEventListener('keydown', function(event) {
    if(notes[event.key]===undefined) return
    // notes[event.key].audio.currentTime = 0
    // notes[event.key].audio.play()
    playNote(notes[event.key].audio)
    notes[event.key].pianoKey.classList.add('active')
})

document.addEventListener('keyup', function(event) {
    if(notes[event.key]===undefined) return

    notes[event.key].pianoKey.classList.remove('active')
})

for(let note in notes){
    notes[note].pianoKey.addEventListener('click', function(event){
        // notes[note].audio.currentTime = 0
        // notes[note].audio.play()
        playNote(notes[note].audio)
    })
}
//     console.log(event.key); //agrege .key
//
//     if (event.key === 'a') {
//         notes.a.currentTime = 0
//         notes.a.play()
//         setTimeout(function() {
//             notes.d.currentTime = 0
//             notes.d.play()
//         }, 500)
//     }
//     if (event.key === 'a') {
//         notes.a.currentTime = 0
//         notes.a.play()
//         setTimeout(function() {
//             notes.d.currentTime = 0
//             notes.d.play()
//         }, 1000)
//
//     }
//
//         if(event.key==='a') {
//             cAudioC.currentTime = 0  // devuelve el sonido al inicio
//             cAudioC.play()
//         }
//
//         if (event.key==='s') {
//             cAudioD.currentTime = 0  // devuelve el sonido al inicio
//             cAudioD.play()
//         }
//
//         if (event.key==='d') {
//             cAudioE.currentTime = 0  // devuelve el sonido al inicio
//             cAudioE.play()
//         }
//
//         if (event.key==='f') {
//             cAudioF.currentTime = 0  // devuelve el sonido al inicio
//             cAudioF.play()
//         }
//
//         if (event.key==='g') {
//             cAudioG.currentTime = 0  // devuelve el sonido al inicio
//             cAudioG.play()
//         }
//
//         if (event.key==='h') {
//             cAudioL.currentTime = 0  // devuelve el sonido al inicio
//             cAudioL.play()
//         }
//
//         if(event.key==='j') {
//             cAudioB.currentTime = 0  // devuelve el sonido al inicio
//             cAudioB.play()
//         }
//         if(event.key==='j') {
//             cAudioC2.currentTime = 0  // devuelve el sonido al inicio
//             cAudioC2.play()
//         }
//
// })
//
//
//
//
//
//
//
//
//
//
//     // cAudio.play()
