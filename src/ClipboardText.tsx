import type { SVGProps } from "react";

export function ClipboardText(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
          d="M6.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
          fill="currentColor"
        />
        <path
          d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
        <path
          d="M6.5 14a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"
          fill="currentColor"
        />
        <path
          d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3zm-6 1h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default ClipboardText;
