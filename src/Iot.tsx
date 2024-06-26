import type { SVGProps } from "react";

export function Iot(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M16 3.992a2 2 0 0 1-2.647 1.893l-1.284 1.943c.571.544.928 1.311.931 2.162l1.17.202a2 2 0 1 1-.162.987l-1.17-.203a3.01 3.01 0 0 1-1.426 1.673l.444 1.357a2 2 0 1 1-.948.319l-.445-1.36a2.995 2.995 0 0 1-2.874-1.18l-1.635.788a2 2 0 1 1-.452-.892l1.633-.787a2.999 2.999 0 0 1 .637-2.902l-.935-1.174a2 2 0 1 1 .775-.632l.944 1.185C8.984 7.135 9.476 7 10 7c.442 0 .862.095 1.24.267l1.278-1.933A2 2 0 1 1 16 3.992Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM6 6.001a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-5 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm8 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm3-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default Iot;
