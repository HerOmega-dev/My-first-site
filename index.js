let angle = 0;
const box = document.querySelector(".box");
const faces = document.querySelectorAll(".faces");
const images = document.querySelectorAll(".tardis");

// box.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     angle += e.deltaY * 0.45;
//     // console.log(angle)
//     faces.style.transform = `rotateY(${angle}deg)`
// }, {passive: false});

// const observer = new ResizeObserver(entries => {
//     entries.forEach(entry => {
//         const width = entry.contentRect.width;
//         entry.target.style.setProperty("--img-width", width + "px");
//     })
// })
// images.forEach(img => observer.observe(img));

// document.querySelectorAll('.faces').forEach(f => {
//   console.log(f.id, getComputedStyle(f).transform);
// });

// let imgLoad = 0;

// images.forEach(img => {
//     img.addEventListener('load', () => {
//         imgLoad++;
//         console.log(imgLoad);
//         if (imgLoad === images.length) {
//             boxSize();
//         }
//     })
// });

// function boxSize() {
//     let maxWidth = 0;
//     let maxHeight = 0;
    
//     faces.forEach(face => {
//         const rect = face.getBoundingClientRect();
//         maxWidth = Math.max(maxWidth, rect.width);
//         console.log(maxWidth);
//         maxHeight = Math.max(maxHeight, rect.height);
//         console.log(maxHeight);
//     });
    
//     box.style.setProperty('--box-width', `${maxWidth}px`);
//     box.style.setProperty('--box-height', `${maxHeight}px`);
// }