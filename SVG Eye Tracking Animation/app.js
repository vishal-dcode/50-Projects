const svg = document.querySelector("#svg");
const mouse = svg.createSVGPoint();

const leftEye = createEye("#left-eye");
const rightEye = createEye("#right-eye");

let requestID = null;

window.addEventListener("mousemove", onMouseMove);

function onFrame() {
  let point = mouse.matrixTransform(svg.getScreenCTM().inverse());

  leftEye.rotateTo(point);
  rightEye.rotateTo(point);

  requestID = null;
}

function onMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (!requestID) {
    requestID = requestAnimationFrame(onFrame);
  }
}

function createEye(selector) {
  const element = document.querySelector(selector);

  TweenMax.set(element, {
    transformOrigin: "center",
  });

  let boundingBox = element.getBBox();
  let centerX = boundingBox.x + boundingBox.width / 2;
  let centerY = boundingBox.y + boundingBox.height / 2;

  function rotateTo(point) {
    let dx = point.x - centerX;
    let dy = point.y - centerY;

    let angle = Math.atan2(dy, dx);

    TweenMax.set(element, { rotation: `${angle}_rad_short` });
  }

  return { element, rotateTo };
}
