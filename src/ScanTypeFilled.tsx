import type { SVGProps } from "react";

export function ScanTypeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 0 1-1.5 0v-1.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5h-1.5Zm0 13c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 18h1.5a.75.75 0 0 0 0-1.5h-1.5ZM16.5 4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1 0-1.5h1.5A2.75 2.75 0 0 1 18 4.75v1.5a.75.75 0 0 1-1.5 0v-1.5ZM15.25 16.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 15.25 18h-1.5a.75.75 0 0 1 0-1.5h1.5ZM6.5 5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0V6.5h2v7H9A.75.75 0 0 0 9 15h2a.75.75 0 0 0 0-1.5h-.25v-7h2v.25a.75.75 0 0 0 1.5 0v-1A.75.75 0 0 0 13.5 5h-7Z"
      />
    </svg>
  );
}
export default ScanTypeFilled;
