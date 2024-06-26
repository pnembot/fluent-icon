import type { SVGProps } from "react";

export function Fps960(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 7.5a2.5 2.5 0 0 1-5 0a.5.5 0 0 1 1 0a1.5 1.5 0 1 0 3 0v-1a2.5 2.5 0 1 1 1-2v3Zm-1-3a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM10.5 2A2.5 2.5 0 0 0 8 4.5v3a2.5 2.5 0 1 0 1-2v-1a1.5 1.5 0 1 1 3 0a.5.5 0 0 0 1 0A2.5 2.5 0 0 0 10.5 2Zm0 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm6-6A1.5 1.5 0 0 0 15 4.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 16.5 3ZM14 4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3ZM3.5 12a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.966.784-1.75 1.75-1.75h.75a1.5 1.5 0 0 1 1.5 1.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h.75a.75.75 0 0 0 0-1.5h-.5A1.75 1.75 0 0 1 13 13.75Z"
      />
    </svg>
  );
}
export default Fps960;
