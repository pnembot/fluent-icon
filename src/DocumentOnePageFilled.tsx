import type { SVGProps } from "react";

export function DocumentOnePageFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Zm1.5 4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM7 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5-4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default DocumentOnePageFilled;
