import type { SVGProps } from "react";

export function History(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m3.5 1.996l.09.008a.5.5 0 0 1 .402.402l.008.09v2.212a8 8 0 1 1-1.865 6.75a10.314 10.314 0 0 1-.13-1.98a.5.5 0 0 1 .998.042a9.36 9.36 0 0 0 .114 1.755a7 7 0 1 0 1.141-5.28l2.74.001l.09.008a.5.5 0 0 1 0 .984l-.09.008H3.5l-.09-.008a.5.5 0 0 1-.402-.402L3 6.496v-4l.008-.09a.5.5 0 0 1 .402-.402l.09-.008Zm6 4l.09.008a.5.5 0 0 1 .402.402l.008.09V10h2l.09.008a.5.5 0 0 1 0 .984L12 11H9.5l-.09-.008a.5.5 0 0 1-.402-.402L9 10.5V6.496l.008-.09a.5.5 0 0 1 .402-.402l.09-.008Z"
      />
    </svg>
  );
}
export default History;
