import type { SVGProps } from "react";

export function DrawerArrowDownload(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 5.5a4.5 4.5 0 0 1 4-4.473v3.766l-.646-.647a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.707L14 4.793V1.027A4.5 4.5 0 1 1 9 5.5Zm2 2a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm6 2.243a5.507 5.507 0 0 1-1 .657v.6h-3.5a.5.5 0 0 0-.5.5a2 2 0 1 1-4 0a.5.5 0 0 0-.5-.5H4V8h4.6a5.463 5.463 0 0 1-.393-1H4a2 2 0 0 1 2-2h2.022a5.48 5.48 0 0 1 .185-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.743ZM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.041a3 3 0 0 0 5.918 0H16v3Z"
      />
    </svg>
  );
}
export default DrawerArrowDownload;
