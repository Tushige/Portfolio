import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const SCREEN_MODIFIER_RES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
export const XL_2 = '2xl';
export const XL = 'xl';
export const LG = 'lg';
export const MD = 'md';
export const SM = 'sm';
export const XSM = 'xsm'

export function getScreenModifier(windowWidth) {
  if (windowWidth >= SCREEN_MODIFIER_RES['2xl']) return XL_2
  if (windowWidth >= SCREEN_MODIFIER_RES.xl) return XL
  if (windowWidth >= SCREEN_MODIFIER_RES.lg) return LG
  if (windowWidth >= SCREEN_MODIFIER_RES.md) return MD
  if (windowWidth >= SCREEN_MODIFIER_RES.sm) return SM
  else return XSM
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}