import type { SVGProps } from "react";

export function SplitHint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5ZM2 6a2 2 0 0 1 2-2h4v1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4v1H4a2 2 0 0 1-2-2V6Zm13-1a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 10a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5Zm1.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm-4-4a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 11.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default SplitHint;
