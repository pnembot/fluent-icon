import React, { SVGProps } from "react";

export function ShoppingBagArrowLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M15 6a1 1 0 0 1 1 1v2.207a5.48 5.48 0 0 0-1-.185V7h-3v2.6a5.503 5.503 0 0 0-1 .657V7H5v8a1.977 1.977 0 0 0 .586 1.414A2.018 2.018 0 0 0 7 17h2.6c.183.358.404.693.657 1H7a3 3 0 0 1-2.117-.875a3.062 3.062 0 0 1-.648-.953A2.932 2.932 0 0 1 4 15V7a1 1 0 0 1 1-1h1V4.5c0-.344.065-.667.195-.969c.13-.307.31-.573.539-.797c.224-.229.49-.409.797-.539c.302-.13.625-.195.969-.195c.281 0 .549.044.805.133c.256.089.49.214.703.375A2.442 2.442 0 0 1 11.5 2a2.484 2.484 0 0 1 2.305 1.531c.13.302.195.625.195.969V6h1Zm-2-1.5c0-.208-.039-.404-.117-.586A1.482 1.482 0 0 0 11.5 3c-.307 0-.583.086-.828.258A2.503 2.503 0 0 1 11 4.5V6h2V4.5ZM7 6h3V4.5c0-.208-.039-.404-.117-.586A1.482 1.482 0 0 0 8.5 3c-.208 0-.404.039-.586.117A1.482 1.482 0 0 0 7 4.5V6Zm7.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-2.356-4.851l.003-.003l2-2a.5.5 0 0 1 .707.708L13.707 14H16.5a.5.5 0 0 1 0 1h-2.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1-.146-.351v-.006a.5.5 0 0 1 .144-.348Z"
      />
    </svg>
  );
}
export default ShoppingBagArrowLeft;
