import type { SVGProps } from "react";

export function HeadphonesSoundWave(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 0 0-7 7v1h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-6a8 8 0 1 1 16 0v6a2 2 0 0 1-2 2h-.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H17v-1a7 7 0 0 0-7-7ZM3 16a1 1 0 0 0 1 1v-5H3v4Zm14 0v-4h-1v5a1 1 0 0 0 1-1Zm-6.5-5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Zm5.5.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z"
      />
    </svg>
  );
}
export default HeadphonesSoundWave;
