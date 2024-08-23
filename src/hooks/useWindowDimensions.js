'use client'
import { useState, useEffect } from 'react';
import { throttle } from 'lodash'

function getWindowDimensions() {
  if (typeof (window) === 'undefined') {
    return {
      innerWidth: 0,
      innerHeight: 0
    }
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}