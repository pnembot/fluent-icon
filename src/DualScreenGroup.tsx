import type { SVGProps } from "react";

export function DualScreenGroup(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5Z"
      />
    </svg>
  );
}
export default DualScreenGroup;
