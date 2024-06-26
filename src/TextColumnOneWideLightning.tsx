import type { SVGProps } from "react";

export function TextColumnOneWideLightning(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM9 14.5c0-.168.008-.335.022-.5H3.5a.5.5 0 0 0 0 1h5.522A5.571 5.571 0 0 1 9 14.5Zm.6-2.5c.183-.358.404-.693.657-1H3.5a.5.5 0 0 0 0 1h6.1Zm9.4 2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.472.334l-.88 2.5A.5.5 0 0 0 13 15h.776l-.508 1.869a.5.5 0 0 0 .903.401l2.25-3.5A.5.5 0 0 0 16 13h-.746l.28-.842a.5.5 0 0 0-.474-.658h-1.18Z"
      />
    </svg>
  );
}
export default TextColumnOneWideLightning;
