import type { SVGProps } from "react";

export function StyleGuide(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.62 16.26a1 1 0 0 0 1.226.706l5.417-1.451a.999.999 0 0 0 .706-1.225L13.133 3.741a1 1 0 0 0-1.225-.707L6.49 4.486a.999.999 0 0 0-.706 1.224L8.62 16.26Zm1.486 1.672a2.002 2.002 0 0 1-2.451-1.414L4.819 5.97a1.998 1.998 0 0 1 1.413-2.45l5.416-1.451a2.002 2.002 0 0 1 2.451 1.413l2.836 10.55a1.998 1.998 0 0 1-1.413 2.449l-5.416 1.45ZM7.002 18h.152a2.48 2.48 0 0 1-.335-.74l-.079-.295A1.003 1.003 0 0 1 6 16v-1.79l-1.004-3.732l.005 5.523a2 2 0 0 0 2.001 2Zm-3.004-1.5c0 .152.014.3.04.445l-.054-.015a2.002 2.002 0 0 1-1.416-2.45l1.424-5.33l.003 3.864l-.46 1.725c-.12.446.082.902.462 1.124l.001.637Zm4.252-11a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default StyleGuide;
