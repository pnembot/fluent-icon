import type { SVGProps } from "react";

export function VideoBackgroundEffectFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.207 4L2 8.207V6.793L4.793 4h1.414Zm7 0l-1.464 1.464a3.478 3.478 0 0 0-1.024-.39L11.793 4h1.414ZM12.12 7.173A2.492 2.492 0 0 0 9.783 6.01a2.5 2.5 0 1 0 2.336 1.164Zm.72-.72c.205.283.368.597.48.935l3.376-3.375A1.517 1.517 0 0 0 16.5 4h-1.207L12.84 6.453ZM7.5 12A1.501 1.501 0 0 0 6 13.5V16h8v-2.5a1.498 1.498 0 0 0-1.5-1.5h-5Zm5-1c.217 0 .427.028.628.08L18 6.206V5.5c0-.209-.043-.407-.12-.588l-4.5 4.501A3.497 3.497 0 0 1 12.45 11h.05Zm1.908.885c.225.265.395.577.494.92L18 9.707V8.293l-3.592 3.592ZM15 16v-1.207l3-3v1.414L15.207 16H15Zm-10-.293v-1.414l-1.695 1.695c.064.008.13.012.195.012h1.207L5 15.707ZM6.574 9.22c.076.365.21.71.39 1.024L2.12 15.088A1.495 1.495 0 0 1 2 14.5v-.707l4.574-4.574ZM9.707 4L2 11.707v-1.414L8.293 4h1.414Z"
      />
    </svg>
  );
}
export default VideoBackgroundEffectFilled;
