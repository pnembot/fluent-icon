import type { SVGProps } from "react";

export function Fps60(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 7A1.5 1.5 0 0 1 11 7.5v-3a1.5 1.5 0 0 1 3 0v3A1.5 1.5 0 0 1 12.5 9Zm-9 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.966.784-1.75 1.75-1.75h.764c.82 0 1.486.665 1.486 1.486v.014a.5.5 0 0 1-1 0v-.014a.486.486 0 0 0-.486-.486h-.764a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.764c-.82 0-1.486-.665-1.486-1.486V16.5a.5.5 0 0 1 1 0v.014c0 .268.217.486.486.486h.764a.75.75 0 0 0 0-1.5h-.5A1.75 1.75 0 0 1 13 13.75ZM4 4.5v3a2.5 2.5 0 1 0 1-2v-1a1.5 1.5 0 1 1 3 0a.5.5 0 0 0 1 0a2.5 2.5 0 0 0-5 0ZM6.5 9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
export default Fps60;
