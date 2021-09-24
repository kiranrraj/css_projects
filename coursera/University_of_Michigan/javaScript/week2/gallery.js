const imgBlk = document.getElementById("image");
const defaultText = imgBlk.innerText;

function upDate(previewPic) {
  imgBlk.style.backgroundImage = `url('${previewPic.src}')`;
  // Above code is same as  
  // imgBlk.style.backgroundImage = "url('" + previewPic.src + "')";
  imgBlk.innerText = previewPic.alt;
}

function unDo() {
  imgBlk.style.backgroundImage = "";
  imgBlk.innerText = defaultText;
}