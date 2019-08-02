import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'

function useOutsideClick(ref, callback) {
  const handleClick = function(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(function() {
    document.addEventListener("click", handleClick);

    return function() {
      document.removeEventListener("click", handleClick);
    };
  });
  /*
  useLayoutEffect(function() {
    document.getElementById("image-container").style.transition = "filter 0.3s"
    document.getElementById("image-container").style.filter = "opacity(1) blur(5px) grayscale(50%)"

    return function() {
      document.getElementById("image-container").style.transition = "filter 0.3s"
      document.getElementById("image-container").style.filter = "none"
    };
  })*/
};
export default useOutsideClick;
