import type { SVGProps } from "react";

export function StoreMicrosoftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2.5V4H2.5a.5.5 0 0 0-.5.5v10A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-10a.5.5 0 0 0-.5-.5H13V2.5A1.5 1.5 0 0 0 11.5 1h-3A1.5 1.5 0 0 0 7 2.5ZM8.5 2h3a.5.5 0 0 1 .5.5V4H8V2.5a.5.5 0 0 1 .5-.5Zm-2 8V7h3v3h-3Zm0 4v-3h3v3h-3Zm7-4h-3V7h3v3Zm-3 4v-3h3v3h-3Z"
      />
    </svg>
  );
}
export default StoreMicrosoftFilled;
