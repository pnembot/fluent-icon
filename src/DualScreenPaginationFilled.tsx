import type { SVGProps } from "react";

export function DualScreenPaginationFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM4 4h5.5v12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8.5 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default DualScreenPaginationFilled;
