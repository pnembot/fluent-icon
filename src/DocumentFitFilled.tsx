import type { SVGProps } from "react";

export function DocumentFitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Zm1.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1A1.5 1.5 0 0 1 7.5 4h1a.5.5 0 0 1 0 1h-1Zm0 10h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 6 14.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 0 .5.5ZM13 5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1A1.5 1.5 0 0 1 14 5.5v1a.5.5 0 0 1-1 0v-1Zm-.5 9.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 1 0-1h1Z"
      />
    </svg>
  );
}
export default DocumentFitFilled;
