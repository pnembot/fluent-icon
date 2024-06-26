import type { SVGProps } from "react";

export function DesktopKeyboard(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.104a2.753 2.753 0 0 0-.75-.104H17V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v3.25c0 .26.036.512.104.75H6.5a.5.5 0 0 1 0-1H8v-2H4a2 2 0 0 1-2-2V4Zm9.75 8h5.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 17.25 19h-5.5A1.75 1.75 0 0 1 10 17.25v-3.5c0-.966.784-1.75 1.75-1.75Zm.25 5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm.5-3.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default DesktopKeyboard;
