// Created & Designed by PrasadM @ 2024.05.18
var myVar = setInterval(function () {
    myTimer()
}, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("pm-hour").innerHTML = t;
}
n = new Date();
if (n.getTimezoneOffset() == 0) t = n.getTime() + (7 * 60 * 60 * 1000);
else t = n.getTime();
n.setTime(t);
var dn = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday");
d = n.getDay();
m = n.getMonth() + 1;
y = n.getFullYear()
var date = dn[d] + ", " + (n.getDate() < 10 ? "0" : "") + n.getDate() + "/" + (m < 10 ? "0" : "") + m + "/" + y;
document.getElementById("pm-date").innerHTML = date;

// Greetings
// function greetings() {
//     var message = "";
//     var time = new Date().getHours();

//     if (time >= 4 && time < 12) {
//         return (message = "😊 Good Morning !");
//     } else if (time >= 12 && time < 15) {
//         return (message = "😀 Good Afternoon !");
//     } else if (time >= 15 && time < 18) {
//         return (message = "😉 Good Evening !");
//     } else if (time >= 18 && time < 22) {
//         return (message = "😴 Good Night !");
//     } else {
//         return (message = "🤪 Have a Nightmares ?");
//     }
// }

// document.getElementById("greeting").innerHTML = greetings();


/*! Custom PWA install button  */
// (({ button: t, onInstall: n }) => {
//     let i = null;
//     var e = () => {
//         i && (t.disabled = !0,
//             i.prompt().then(e => {
//                 "accepted" === e.outcome && o()
//             }
//             ).finally(() => {
//                 t.disabled = !1
//             }
//             ),
//             i = null)
//     }
//         , l = e => {
//             e.preventDefault(),
//                 i = e,
//                 t.hidden = !1
//         }
//         ;
//     const o = () => {
//         t.hidden = !0,
//             t.removeEventListener("click", e),
//             window.removeEventListener("beforeinstallprompt", l)
//     }
//         ;
//     t instanceof HTMLElement && (t.hidden = !0,
//         t.addEventListener("click", e),
//         window.addEventListener("beforeinstallprompt", l));
//     const d = e => {
//         t instanceof HTMLElement && o(),
//             "function" == typeof n && n(e),
//             window.removeEventListener("appinstalled", d)
//     }
//         ;
//     window.addEventListener("appinstalled", d)
// }
// )({
//     button: document.getElementById("app_install_button") || Object.assign(document.body.appendChild(document.createElement("button")), {
//         hidden: !0,
//         type: "button",
//         className: "pwa-button",
//         innerHTML: "<svg class='flash' viewBox='0 0 24 24'><path d='M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z' stroke-miterlimit='10'></path></svg>"
//     }),
//     onInstall() {
//         setTimeout(() => toastNotif("Thank you for installing app!"), 5000);
//     }
// });