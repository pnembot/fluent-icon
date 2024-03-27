import type { SVGProps } from "react";

export function ColorBackgroundAccent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m2.75 11.415l.328.328a3 3 0 0 0 4.243 0l.68-.68C8.028 12.404 8.96 14 10.75 14c1.816 0 2.75-1.646 2.75-3c0-1.014-.532-1.956-.862-2.472a9.15 9.15 0 0 0-.516-.722l-.007-.009l-.234-.282l-.012-.014a1.5 1.5 0 0 0-.85-.477a2.994 2.994 0 0 0-.794-2.274H15.5c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-11a1.75 1.75 0 0 1-1.75-1.75v-2.085Z"
      />
    </svg>
  );
}
export default ColorBackgroundAccent;
