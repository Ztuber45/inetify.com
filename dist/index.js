"use strict";
let iframeDiv = document.querySelector("#iframe-div");
let iframeTag = document.querySelector("#iframe-tag");
let homeAnchor = document.querySelector("#home");
let playlistAnchor = document.querySelector("#playlist");
let musicasAnchor = document.querySelector("#musicas");
const showIFrame = (src) => {
    iframeDiv.style.height = "700px";
    iframeDiv.style.marginTop = "50px";
    iframeDiv.style.visibility = "visible";
    iframeTag.src = src;
};
const hideIFrame = () => {
    iframeDiv.style.height = "0px";
    iframeDiv.style.marginTop = "0px";
    iframeDiv.style.visibility = "hidden";
};
homeAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    hideIFrame();
});
playlistAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    showIFrame("./html/playlist.html");
});
musicasAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    showIFrame("./html/musicas.html");
});
