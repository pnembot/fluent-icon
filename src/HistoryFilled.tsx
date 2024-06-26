import type { SVGProps } from "react";

export function HistoryFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.372 2.025A8 8 0 1 1 2.005 9.74a.75.75 0 0 1 1.5.045a6.5 6.5 0 1 0 1.573-4.029l-.204.248h1.877l.102.008a.75.75 0 0 1 0 1.486l-.102.007H3.253l-.102-.007a.75.75 0 0 1-.641-.641l-.007-.102v-4l.007-.102a.75.75 0 0 1 .641-.641l.102-.007l.102.007a.75.75 0 0 1 .641.641l.007.102l-.001 1.953a7.977 7.977 0 0 1 5.37-2.682Zm.378 3.979l.102.007a.75.75 0 0 1 .641.641l.007.102v3.245l1.75.001l.102.007a.75.75 0 0 1 0 1.487l-.102.006h-2.5l-.102-.006a.75.75 0 0 1-.641-.642L9 10.75V6.754l.007-.102a.75.75 0 0 1 .641-.641l.102-.007Z"
      />
    </svg>
  );
}
export default HistoryFilled;
