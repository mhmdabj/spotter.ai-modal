const preview = document.getElementById("preview");
const lens = document.getElementById("zoom-lens");

/*
  If the second image is exactly the same size (468x190),
  we don't need an extra zoom factor. But if you want to simulate
  a "magnified" effect, you can increase ratio > 1.
*/
const ratio = 1; // Try 1 for 1:1 or bigger for more "zoom"

preview.addEventListener("mousemove", moveLens);
preview.addEventListener("mouseenter", () => {
  lens.style.display = "block";
});
preview.addEventListener("mouseleave", () => {
  lens.style.display = "none";
});

function moveLens(e) {
  const rect = preview.getBoundingClientRect();

  // (x, y) = mouse position within the image
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // half lens width/height (for centering)
  const lensHalfW = lens.offsetWidth / 2;
  const lensHalfH = lens.offsetHeight / 2;

  // clamp lens so it doesn’t go outside
  let lensLeft = x - lensHalfW;
  let lensTop = y - lensHalfH;
  if (lensLeft < 0) lensLeft = 0;
  if (lensTop < 0) lensTop = 0;
  if (lensLeft > preview.width - lens.offsetWidth) {
    lensLeft = preview.width - lens.offsetWidth;
  }
  if (lensTop > preview.height - lens.offsetHeight) {
    lensTop = preview.height - lens.offsetHeight;
  }

  lens.style.left = lensLeft + "px";
  lens.style.top = lensTop + "px";

  // For ratio=1, the background offset typically is:
  const bgPosX = -lensLeft;
  const bgPosY = -lensTop;

  lens.style.backgroundPosition = bgPosX + "px " + bgPosY + "px";
}
