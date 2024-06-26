import type { SVGProps } from "react";

export function WindowDevTools(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.501a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v2.211a3.801 3.801 0 0 0-1 .213V6H3v7.5A1.5 1.5 0 0 0 4.5 15h6.69l-.438.76a2.171 2.171 0 0 0-.12.24H4.5A2.5 2.5 0 0 1 2 13.5v-9ZM4.499 3a1.5 1.5 0 0 0-1.5 1.5V5h12v-.5a1.5 1.5 0 0 0-1.5-1.5h-9Zm9.375 6.091a2.78 2.78 0 0 0 .147 3.009l-2.403 4.161a1.158 1.158 0 0 0 2.006 1.158l2.407-4.17a2.78 2.78 0 0 0 2.363-4.575l-1.31 2.27a.927.927 0 0 1-1.605-.926l1.31-2.27a2.78 2.78 0 0 0-2.915 1.343Zm-1.314 2.054a3.762 3.762 0 0 1 .215-2.076l-1.923-1.923a.5.5 0 1 0-.707.707L12.292 10l-2.147 2.146a.5.5 0 1 0 .707.707l1.708-1.708ZM8.352 7.853a.5.5 0 0 0-.707-.707l-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5a.5.5 0 0 0 .707-.707L6.206 10l2.146-2.147Z"
      />
    </svg>
  );
}
export default WindowDevTools;
