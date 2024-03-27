import type { SVGProps } from "react";

export function Sleep(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.585 2.61a.5.5 0 0 0-.582.546c.389 3.585-.511 6.105-1.853 7.754c-1.35 1.66-3.175 2.47-4.69 2.591a.5.5 0 0 0-.37.785c1.365 1.957 3.875 3.214 6.405 3.214a7.5 7.5 0 0 0 7.5-7.5c0-3.723-2.902-6.783-6.41-7.39Zm-1.66 8.931c1.44-1.768 2.366-4.34 2.133-7.801c2.776.77 4.937 3.296 4.937 6.26a6.5 6.5 0 0 1-6.5 6.5c-1.924 0-3.823-.834-5.056-2.138c1.552-.341 3.212-1.255 4.486-2.82ZM3.5 10A1.5 1.5 0 0 0 5 8.5V4.89l3-.75v1.945A1.5 1.5 0 1 0 9 7.5v-4a.5.5 0 0 0-.621-.486l-4 1A.5.5 0 0 0 4 4.5v2.585A1.5 1.5 0 1 0 3.5 10Z"
      />
    </svg>
  );
}
export default Sleep;
