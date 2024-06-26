import type { SVGProps } from "react";

export function DesktopKeyboardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.104a2.75 2.75 0 0 0-.75-.104h-5.5A2.75 2.75 0 0 0 9 13.75v3.5c0 .26.036.512.104.75H6.5a.5.5 0 0 1 0-1H8v-2H4a2 2 0 0 1-2-2V4Zm9.75 8A1.75 1.75 0 0 0 10 13.75v3.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 19 17.25v-3.5A1.75 1.75 0 0 0 17.25 12h-5.5Zm.25 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5-3.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm1.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm.5-1.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm1.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm.5-1.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default DesktopKeyboardFilled;
