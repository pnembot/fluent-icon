import type { SVGProps } from "react";

export function TextMore(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 2a.5.5 0 0 1 .463.311L13.56 14.82a2.255 2.255 0 0 0-1.083-.009L11.331 12H4.67l-1.707 4.189a.5.5 0 1 1-.926-.378l5.5-13.5A.5.5 0 0 1 8 2Zm5 13.75A1.246 1.246 0 0 1 14.25 17A1.25 1.25 0 1 1 13 15.75Zm0 0ZM5.077 11h5.846L8 3.825L5.077 11Zm5.173 6a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM17 18.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default TextMore;
