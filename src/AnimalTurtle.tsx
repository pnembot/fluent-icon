import React, { SVGProps } from "react";

export function AnimalTurtle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.104 4.002c-1.476 0-2.5.55-3.216 1.378c-.694.802-1.075 1.838-1.357 2.769L4.273 9H2.5a.5.5 0 0 0-.5.5c0 1.076.497 2.102 1.298 2.63l-.442 1.072a1.31 1.31 0 0 0 1.212 1.81h1.463c.507 0 .97-.294 1.186-.753l.47-1c1.314.182 2.644.182 3.958 0l.47 1c.217.46.679.753 1.186.753h1.449a1.31 1.31 0 0 0 1.211-1.81l-.497-1.206h1.703c.674 0 1.333-.521 1.333-1.257V10c0-1.137-.987-1.996-2.12-1.996h-2.075c-.287-.907-.707-1.876-1.409-2.636c-.757-.819-1.817-1.365-3.292-1.365Zm5.569 6.995l-.576-1.994h1.782c.658 0 1.121.485 1.121.996v.741c0 .09-.112.257-.333.257h-1.995Zm-.572 1.532l.436 1.055a.31.31 0 0 1-.287.429H12.8a.31.31 0 0 1-.28-.179l-.355-.753c.653-.138 1.3-.323 1.935-.552Zm-7.935.553l-.354.752a.31.31 0 0 1-.281.179H4.068a.311.311 0 0 1-.287-.429l.436-1.059c.64.232 1.291.418 1.949.557Zm-2.533-1.965A2.056 2.056 0 0 1 3.047 10h.923l-.337 1.116Zm1.855-2.678c.276-.912.61-1.772 1.157-2.405c.524-.607 1.27-1.032 2.459-1.032c1.194 0 1.988.428 2.558 1.044c.586.635.959 1.495 1.23 2.39l.907 3.139a13.482 13.482 0 0 1-9.261.003l.95-3.14Z"
      />
    </svg>
  );
}
export default AnimalTurtle;
