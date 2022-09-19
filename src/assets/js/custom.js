function restartAnimation() {
  // retrieve the element
  element = document.getElementById("wave-hi");

  // reset the transition by...
  element.addEventListener(
    "mouseover",
    function (event) {
      event.preventDefault;

      // -> removing the class
      element.classList.remove("wave");

      // -> triggering reflow /* The actual magic */
      // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
      void element.offsetWidth;

      // -> and re-adding the class
      element.classList.add("wave");
    },
    false
  );
}
