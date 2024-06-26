import type { SVGProps } from "react";

export function StoreMicrosoft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 7v3h-3V7h3Zm0 7v-3h-3v3h3Zm4-7v3h-3V7h3Zm0 7v-3h-3v3h3ZM7 4V2.5A1.5 1.5 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.5V4h4.5a.5.5 0 0 1 .5.5v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-10a.5.5 0 0 1 .5-.5H7Zm1-1.5V4h4V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Zm-5 12A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5V5H3v9.5Z"
      />
    </svg>
  );
}
export default StoreMicrosoft;
