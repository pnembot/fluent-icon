import type { SVGProps } from "react";

export function BranchForkLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 1 .5 5.959V10H11a1.5 1.5 0 0 0 1.5-1.5v-.541a3 3 0 1 1 1 0V8.5A2.5 2.5 0 0 1 11 11H5.5v1.041a3 3 0 1 1-1 0V7.96A3 3 0 0 1 5 2ZM3 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm0 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm10-8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-.5 6a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default BranchForkLink;
