import type { SVGProps } from "react";

export function ShareIosFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.75 9.25a.75.75 0 0 1 .743.648L16.5 10v5.25a2.75 2.75 0 0 1-2.582 2.745L13.75 18h-7.5a2.75 2.75 0 0 1-2.745-2.582L3.5 15.25V10a.75.75 0 0 1 1.493-.102L5 10v5.25c0 .647.492 1.18 1.122 1.244l.128.006h7.5a1.25 1.25 0 0 0 1.243-1.122L15 15.25V10a.75.75 0 0 1 .75-.75ZM5.227 6.462L9.47 2.22a.75.75 0 0 1 .976-.073l.084.073l4.243 4.242a.75.75 0 0 1-.977 1.134l-.084-.073L10.75 4.56v7.69a.75.75 0 0 1-.648.743L10 13a.75.75 0 0 1-.743-.648l-.007-.102V4.56L6.288 7.523a.75.75 0 0 1-.977.073l-.084-.073a.75.75 0 0 1-.073-.977l.073-.084L9.47 2.22L5.227 6.462Z"
      />
    </svg>
  );
}
export default ShareIosFilled;
