import type { SVGProps } from "react";

export function TvUsbFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.268A1.99 1.99 0 0 0 17 7h-2a2 2 0 0 0-2 2v1.268A2 2 0 0 0 12 12v2.179a2 2 0 0 0 .176.821H4a2 2 0 0 1-2-2V6Zm15 2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.206a1 1 0 0 1-.191.588l-1.309 1.8V18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.406l-1.313-1.833A1 1 0 0 1 13 14.18V12a1 1 0 0 1 1-1V9a1 1 0 0 1 1-1h2Zm0 3V9h-2v2h2Zm-3.5 5.915L12.845 16H5.5a.5.5 0 0 0 0 1h8v-.085Zm-.313-2.154l-.333.239Z"
      />
    </svg>
  );
}
export default TvUsbFilled;
