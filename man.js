// import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module";
// import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls";
AOS.init();
let ip = '1.1.1.1'
let namer = {

}
let myFont = new FontFace(
    "Pangolin",
    "url(https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2)"
);
let ismobile =
    navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/Mozilla/i)
        ? true : false
let l = "ABDEFGHIJKLMNOPQRSTUVWXYUZ";
let ee = 0;

let nam;

(async () => {
    ip = await (await fetch('https://api.ipify.org?format=json')).json()
    namer = {
        "mahian": `ip ${ip.ip} nigga`,
        "ahmed" : `name's good not you`,
        "madani": 'a bhondo',
        "gg":"also gg",
        "hammud habibi hammud": "my habibi",
        "hamud habibi hamud": "my habibi",
        "habibi": "my habibi",
        "batman": "The vengence",
        "bateman": "a psyco",

    }
    console.log("ip:", ip.ip)
})()
function h1_names(rname) {
    let girl = rname.split("").reverse().join("").startsWith('a')
    if (!rname) {
        return 'a stranger'
    }
    if (girl) {
        if (rname.match(/ayesha/ig)) return 'a dadi'
        return 'a lesbo'
    }
    // else if(rname.split("").reverse().join("").startsWith('i')){
    //     if (rname.match(/madani/ig)) {
    //         return 'a bhondo'
    //     }
    //     // if (rname.match(/ali/ig)) {
    //         // return 'gay hijra lgbtq anime lover'
    //     // }
    //     return 'a hijra'
    // }
    else {
        for (let name in namer) {
            if (rname.match(name)) {
                return namer[name]
            }
        }
        if (rname.match(/hasan/ig)) return 'a dharmik'
        if (rname.match(/zaf/ig)) return 'a Legend'
        if (rname.match(/nabil/ig) || rname.match(/arafat/ig) || rname.match(/baharul/ig) || rname.match(/forhad/ig)) return 'My Bro'
        if (rname.match(/salah[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/kawsar[A-Z]*/ig)) return 'a daddy'

        else return 'gay'
    }
}
function only_names(rname) {
    let girl = rname.split("").reverse().join("").startsWith('a')
    if (!rname) {
        return 'a stranger'
    }
    if (girl) {
        if (rname.match(/ayesha/ig)) return 'a dadi'
        return 'a lesbo'
    }
    // else if(rname.split("").reverse().join("").startsWith('i')){
    //     if (rname.match(/madani/ig)) {
    //         return 'a bhondo'
    //     }
    //     // if (rname.match(/ali/ig)) {
    //         // return 'gay hijra lgbtq anime lover'
    //     // }
    //     return 'a hijra'
    // }
    else {
        for (let name in namer) {
            if (rname.match(name)) {
                if (name == "ahmed"){
                    return 'gay'
                }
                if (name == "mahian"){
                    return 'lesbo'
                }
                return namer[name]
            }
        }
        if (rname.match(/hasan/ig)) return 'a dharmik'
        if (rname.match(/zaf/ig)) return 'a Legend'
        if (rname.match(/nabil/ig) || rname.match(/arafat/ig) || rname.match(/baharul/ig) || rname.match(/forhad/ig)) return 'My Bro'
        if (rname.match(/salah[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/kawsar[A-Z]*/ig)) return 'a daddy'

        else return 'gay'
    }
}
function names(rname) {
    let girl = rname.split("").reverse().join("").startsWith('a')
    if (!rname) {
        return 'a stranger'
    }
    if (girl) {
        if (rname.match(/ayesha/ig)) return 'a dadi'
        return 'succesfuly a lesbo now'
    }
    // else if(rname.split("").reverse().join("").startsWith('i')){
    //     if (rname.match(/madani/ig)) {
    //         return 'a bhondo'
    //     }
    //     // if (rname.match(/ali/ig)) {
    //         // return 'gay hijra lgbtq anime lover'
    //     // }
    //     return 'a hijra'
    // }
    else {
        for (let name in namer) {
            if (rname.match(name)) {
                return namer[name]
            }
        }
        if (rname.match(/hasan/ig)) return 'a dharmik'
        if (rname.match(/zaf/ig)) return 'a Legend'
        if (rname.match(/nabil/ig) || rname.match(/arafat/ig) || rname.match(/baharul/ig) || rname.match(/forhad/ig)) return 'My Bro'
        if (rname.match(/salah[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/moti[A-Z]*/ig) || rname.match(/kawsar[A-Z]*/ig)) return 'a daddy'
        
        else return 'succesfuly gay now'
    }
}
let speech_counter = 0
async function voic(text) {

    let person = new SpeechSynthesisUtterance(text)
    person.onend = ()=>{
        if (speech_counter ==0){
        $('html').css('overflow', 'scroll');
        document.querySelector('audio').play();
        }
        speech_counter++;
    }
    person.rate = 0.6
    console.log(person.voice)
    // person.volume = 0.5
    await speechSynthesis.cancel();
    await speechSynthesis.resume()
    await speechSynthesis.speak(person)


}
function textToImageDataUrl(text) {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 337.500;
    console.log(canvas.width, canvas.height);
    const context = canvas.getContext("2d");
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = "black";
    context.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    context.font = "30px  monospace,Consolas";
    // context.font = "30pt Arial";
    context.fillStyle = "black";
    let textWidth = context.measureText(`Thank you ${text || 'stranger'}`).width;
    // context.fo
    // context.rotate(1)
    // context.textAlign = 'center'
    context.fillText(`Thank you ${text || 'stranger'}`, (canvas.width / 2) - (textWidth / 2), canvas.height / 2 - 110
        // canvas.width / 2 -161,canvas.height / 2 - 110
    );
    // context.
    context.lineWidth = 3
    context.beginPath();
    context.moveTo(canvas.width / 2 - 122, canvas.height / 2 - 96)
    context.lineTo(canvas.width / 2 + 121, canvas.height / 2 - 96)
    context.stroke()
    context.font = "20px  monospace,Consolas";
    textWidth = context.measureText(`for being ${only_names(nam)}`).width;
    context.fillText(`for being ${only_names(nam)}`, (canvas.width / 2) - (textWidth / 2), canvas.height / 2 - 68);
    context.font = "12px  monospace,Consolas";
    context.fillText('proudly presented to you', canvas.width / 2 - 81, canvas.height / 2 - 38);
    context.lineWidth = 1.5
    context.beginPath();
    context.moveTo(canvas.width / 2 - 81, canvas.height / 2 - 30)
    context.lineTo(canvas.width / 2 + 81, canvas.height / 2 - 30)
    context.stroke()
    context.font = "28px Cinzel Decorative";
    context.fillText('HASAN', canvas.width / 2 - 57, canvas.height / 2 + 4);
    context.font = "10.4px monospace";

    context.fillText('thanks for joining the ', canvas.width / 2 - 87, canvas.height / 2 + 30);
    let grd = context.createLinearGradient(canvas.width / 2 + 47, 0, canvas.width / 2 + 90, 0);
    grd.textBaseline = "top";
    grd.addColorStop(0, "green");
    // grd.addColorStop(0.556, "blue");
    // grd.addColorStop(0.555, "green");
    grd.addColorStop(0.5, "red");
    grd.addColorStop(1, "blue");
    context.fillStyle = grd
    context.fillText(`${names(text) == 'a daddy' ? 'daddys' : names(text) == 'a bhondo' ? 'bhondami' : names(text) == 'a dharmik' ? 'islamik' : 'lgbtq'} cult`, canvas.width / 2 + 47, canvas.height / 2 + 30);
    context.font = "19px monospace";
    context.fillStyle = 'black'
    context.fillText(`${new Date().toLocaleDateString()}`, canvas.width / 2 - 240, canvas.height / 2 + 100);
    context.beginPath();
    context.moveTo(canvas.width / 2 - 240, canvas.height / 2 + 108)
    context.lineTo(canvas.width / 2 - 160, canvas.height / 2 + 108)
    context.stroke()
    context.font = "20.4px monospace";
    context.fillStyle = 'black'
    context.fillText('date', canvas.width / 2 - 220, canvas.height / 2 + 125);
    context.font = "19px Parisienne,Cinzel Decorative";
    context.fillStyle = 'black'
    textWidth = context.measureText(`${nam.split(' ')[0].toLocaleUpperCase()}`).width + 90;
    // (canvas.width/2) - (textWidth / 2) + (((canvas.width/2) - (textWidth / 2))/2)
    context.fillText(`${nam.split(' ')[0].toLocaleUpperCase()}`, canvas.width - textWidth, canvas.height / 2 + 100);
    context.beginPath();
    context.moveTo(canvas.width / 2 + 120, canvas.height / 2 + 108)
    context.lineTo(canvas.width / 2 + 240, canvas.height / 2 + 108)
    context.stroke()
    context.font = "20.4px monospace";
    context.fillStyle = 'black'
    context.fillText('signature', canvas.width / 2 + 130, canvas.height / 2 + 125);
    // context.drawImage(
    //     document.querySelector("img"),
    //     canvas.width / 2 + 47,
    //     canvas.height / 2 + 30,
    //     14,
    //     14,
    //   );
    // const img = new Image(); // Create new img element
    // img.src = "./earth2.jpg"; 
    // img.addEventListener("load",() => {
    //     console.log("img loaded");
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 3; j++) {
    //           context.drawImage(img, j * 50, i * 38, 50, 38);
    //         }
    //       }
    // // context.drawImage(img, canvas.width / 2 + 47, canvas.height / 2 + 30);
    // // context.beginPath();
    // // context.moveTo(30, 96);
    // // context.lineTo(70, 66);
    // // context.lineTo(103, 76);
    // // context.lineTo(170, 15);
    // // context.stroke();
    // }
    // );
    // canvas.width / 2 - 80,canvas.height / 2 - 60
    return canvas.toDataURL("image/jpeg");
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


// document.querySelector('body').style.overflow = 'hidden !important';
document.querySelector('.btn').onclick = () => {
    ;

    document.querySelectorAll("h1").forEach(async (element) => {
        // console.log(element)

        // element.target.style.color = "green"
        let i = `UR ${h1_names(nam)}`;
        i = i.toUpperCase()
        let ii = setInterval(async () => {
            element.innerHTML = i
                .split("")
                .map((le, ind) => {
                    if (ind + 26 < ee) {
                        return i[ind];
                    }
                    return l[Math.floor(Math.random() * l.length)];
                })
                .join("");
            if (ee >= i.length + 31) {
                clearInterval(ii);
                // names(nam) == 'a dadi' ? '' :names(nam) == 'a daddy' ? '' : names(nam) == 'a bhondo' ? '' : names(nam) == 'a stranger' ? '' : 
                await voic(`congratulation ${nam} your ${names(nam)}`)
                // myFont.load().then((font) => {
                //     document.fonts.add(font);
                //     console.log("Font loaded");
                //     document.querySelector('img').src = textToImageDataUrl(nam.charAt(0).toUpperCase() + nam.slice(1))
                //     document.querySelector('a').href = textToImageDataUrl(nam.charAt(0).toUpperCase() + nam.slice(1))
                //     document.querySelector('audio').play();
                // })
                // document.querySelector('audio').volume = 

                // o += 1
                // ee = 0;
            }
            ee += 1 / 4;
            // console.log(element)
        }, 30);
    });

}
// (() => {
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
// 	45,
// 	window.innerWidth / window.innerHeight,
// 	0.1,
// 	10000
// );

// const renderer = new THREE.WebGLRenderer({
// 	canvas: document.querySelector(".bg"),
// 	// alpha: true,
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(100);
// renderer.render(scene, camera);

// const pointLight = new THREE.PointLight(0xffffff, 0.8);
// pointLight.position.set(40, 30, 90);
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const controls = new OrbitControls(camera, document.querySelector(".bg"));
// console.log(ismobile);
// if(!ismobile){
//     controls.enableDamping = true;
//         controls.enablePan = false;
//         controls.enableZoom = false;
//         controls.autoRotate = true;
//         controls.autoRotateSpeed = 3;
//         controls.keyPanSpeed = "20px";

// }else{
//     controls.enabled = false;
//     controls.autoRotate = true;
//         controls.autoRotateSpeed = 3;
// }
// scene.add(lightHelper, pointLight)
// function addStar() {
// 	const geometry = new THREE.SphereGeometry(0.3, 24, 24);
// 	const material = new THREE.MeshStandardMaterial({
// 		// flatShading:true,
// 		// depthTest: false,
// 		// depthWrite: false,
// 		// color:0x049ef4 ,
// 		// wireframe:true,
// 		roughness: 0.4,
// 		color: 0xffffff,
// 	});
// 	const star = new THREE.Mesh(geometry, material);

// 	const z = THREE.MathUtils.randFloatSpread(100);
// 	let x = THREE.MathUtils.randFloatSpread(window.innerWidth / 6.5);
// 	let y = THREE.MathUtils.randFloatSpread(window.innerHeight / 4.5);
// 	star.position.set(x, y, z);
// 	scene.add(star);
// }
// Array(500).fill().forEach(addStar);
// function animate() {
// 	renderer.render(scene, camera);


// 	// a = a > 10 ? 0 : c % 10 == 0 ? a+1 : a +0.01;
// 	// scene.remove(torus);
// 	controls.update();


// 	requestAnimationFrame(animate);

// }
// animate()})()


// gsap.to(".main",{
// 	SmoothScroll:{
// 					smooth: 5,
// 					effects: true,
// 					smoothTouch: 0.1
// 					},
// 	// SmoothScroll:{
// 	// smooth: 0.01,
// 	// effects: true,
// 	// smoothTouch: 0.1
// 	// },
// 	// ScrollTrigger: ".cen h1" ,
// 	scrollTrigger: {
// 		trigger: "h2",
// 		start: "top bottom", 
// 		pin: true,
// 		// snap: 1 ,
// 		scrub: 2,
// 		toggleAction: "restart pause reverse restart",
// 		// markers: true,
// 		end: () => "+=" + (document.querySelector("h1").offsetWidth - 50)
// 	},
// 	opacity: 1,
// 	rotation: 360,
// 	y: 150,
// 	left: 0,
// 	duration: 1,
// })

// yy.onmouseover = function(event){
//       let ii = setInterval(() => {event.target.innerText =  event.target.innerText.split("")
//       .map((le,ind) => {
//           if (ind < e - 1) {
//               return event.target.dataset.v[ind]
//           }
//           return l[Math.floor(Math.random()*26)];})
//       .join("");
//       if (e >= 5){
//           clearInterval(ii)
//           e = 0
//       }
//       e += 1/3;
//   },30);

//   }

// if (o > 1) {
//   htag.innerHTML = "HASAN";
//   clearInterval(p);
// } else {
//   var p = setInterval(() => {
//     o++;
//     htag.innerHTML = htag.innerHTML
//       .split("")
//       .map((le, ind) => {
//         if (ind < e - 1) {
//           return htag.dataset.v[ind];
//         }

//         return l[Math.floor(Math.random() * 26)];
//       })

//       .join("");
//     if (e >= htag.dataset.v.length) {
//       // clearInterval(p);
//       e = 0;
//     }
//     if (o > 1) {
//       htag.innerHTML = "HASAN";
//       clearInterval(p);
//     }
//     e += 1 / 3;
//     console.log(o);
//   }, 50);
// }
// function(event){
//     let ii = setInterval(() => {event.target.innerText =  event.target.innerText.split("")
//     .map((le,ind) => {
//         if (ind < e - 1) {
//             return event.target.dataset.v[ind]
//         }
//         return l[Math.floor(Math.random()*26)];})
//     .join("");
//     if (e >= event.target.dataset.v.length){
//         clearInterval(ii)
//         e = 0
//     }
//     e += 1/3;
// },30);

// }
function main() {
    gsap.registerPlugin(ScrollTrigger, SmoothScroll);
    SmoothScroll("body");
    $("html, body").animate({ scrollTop: 0 }, "slow");
    // 'baharul' ;

    $('html,body').css('overflow', 'hidden');
    $('.nam').submit(function (e) {
        e.preventDefault();
        nam = $('.nam input').val()
        myFont.load().then((font) => {
            document.fonts.add(font);
            console.log("Font loaded");
            ""
            document.querySelector('img').src = textToImageDataUrl(nam.charAt(0).toUpperCase() + nam.slice(1))
            document.querySelector('a').href = textToImageDataUrl(nam.charAt(0).toUpperCase() + nam.slice(1))
        })
        $(".nam").animate({
            opacity: 0,
        }, 1000, function () {
            $('.nam ').css('display', 'none')
            // Animation complete.
        });


    });
    gsap.to('h1', { duration: 1, rotation: 360 })
    gsap.to("h2", {
        SmoothScroll: {
            smooth: 5,
            effects: true,
            smoothTouch: 0.1
        },
        // SmoothScroll:{
        // smooth: 0.01,
        // effects: true,
        // smoothTouch: 0.1
        // },
        // ScrollTrigger: ".cen h1" ,
        scrollTrigger: {
            trigger: "h2",
            start: "top bottom",
            // pin: true,
            // snap: 1 ,
            scrub: 2,
            toggleAction: "restart pause reverse restart",
            // markers: true,
            end: () => "+=" + (document.querySelector("h1").offsetWidth - 50),
            onEnter: () => { voic('hear is your certificate') }
        },
        // rotation: 360,
        x: window.innerWidth / 2,
        // left: 0,
        duration: 1,
    })
console.clear()
console.log("%cAyoo what you doing here??", 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')

}
main()