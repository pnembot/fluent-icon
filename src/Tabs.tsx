import type { SVGProps } from "react";

export function Tabs(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 8a6 6 0 0 1 6-6h3c.892 0 1.693.39 2.243 1.007A4.066 4.066 0 0 0 13 3H8a5 5 0 0 0-5 5v5c0 .081.002.162.007.243A2.993 2.993 0 0 1 2 11V8Zm13-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6Zm-8 9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6ZM4 8.5A4.5 4.5 0 0 1 8.5 4H13c.892 0 1.693.39 2.243 1.007A4.066 4.066 0 0 0 15 5H8.5A3.5 3.5 0 0 0 5 8.5V15c0 .081.002.162.007.243A2.993 2.993 0 0 1 4 13V8.5Z"
      />
    </svg>
  );
}
export default Tabs;
