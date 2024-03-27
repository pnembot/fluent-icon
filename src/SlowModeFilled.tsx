import type { SVGProps } from "react";

export function SlowModeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M9.103 4.002c-1.476 0-2.499.55-3.215 1.378c-.694.803-1.076 1.839-1.358 2.77L4.272 9H2.5a.5.5 0 0 0-.5.5c0 1.077.497 2.102 1.297 2.63l-.441 1.073a1.31 1.31 0 0 0 1.212 1.81H5.53c.508 0 .97-.294 1.186-.753l.47-1c1.314.182 2.645.181 3.959 0l.47 1c.216.459.678.752 1.186.752h1.448a1.31 1.31 0 0 0 1.212-1.81l-.498-1.206h1.703c.675 0 1.334-.521 1.334-1.256v-.742c0-1.136-.988-1.996-2.121-1.996h-2.075c-.286-.906-.706-1.876-1.408-2.635c-.758-.82-1.818-1.366-3.293-1.366zm5.569 6.995l-.576-1.994h1.783c.657 0 1.121.485 1.121.996v.742c0 .089-.113.256-.334.256h-1.994zm-2.507 2.085c.653-.139 1.3-.323 1.936-.553l.435 1.056a.31.31 0 0 1-.287.428h-1.448a.31.31 0 0 1-.281-.178l-.354-.754zm-7.949-.556c.64.232 1.292.417 1.95.556l-.355.753a.31.31 0 0 1-.28.178H4.067a.311.311 0 0 1-.287-.428l.435-1.06zM3.97 10l-.338 1.116a2.056 2.056 0 0 1-.586-1.116h.924z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default SlowModeFilled;
