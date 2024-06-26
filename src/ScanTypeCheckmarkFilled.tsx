import type { SVGProps } from "react";

export function ScanTypeCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 0 1-1.5 0v-1.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5h-1.5Zm0 13c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 18h1.5a.75.75 0 0 0 0-1.5h-1.5ZM16.5 4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1 0-1.5h1.5A2.75 2.75 0 0 1 18 4.75v1.5a.75.75 0 0 1-1.5 0v-1.5ZM6.5 5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0V6.5h2v6.356a5.502 5.502 0 0 1 1.5-2.38V6.5h2v.25a.75.75 0 0 0 1.5 0v-1A.75.75 0 0 0 13.5 5h-7Zm1.25 8.5h1.34a5.531 5.531 0 0 0-.068 1.5H7.75a.75.75 0 0 1 0-1.5Zm11.25 1a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.5.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L13.5 15.293Z"
      />
    </svg>
  );
}
export default ScanTypeCheckmarkFilled;
