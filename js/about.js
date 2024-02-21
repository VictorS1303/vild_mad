function allowDrop(event) {
  event.preventDefault();
  // document.getElementById('dropBox').style.borderColor = '#4caf50';
}

function handleDrop(event) {
  event.preventDefault();
  // document.getElementById('dropBox').style.borderColor = '#ccc';

  var files = event.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  var fileInput = document.getElementById("fileInput");
  fileInput.files = files;

  var dragText = document.getElementById("dragText");

  if (files.length > 0) {
    dragText.innerHTML = "<span>x</span>" + files[0].name;
  } else {
    dragText.innerHTML = "Træk og slip en fil her eller klik for at vælge en fil.";
  }
}
