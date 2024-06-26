import type { SVGProps } from "react";

export function ReOrderDotsHorizontalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm-5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0ZM5.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm8.5 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0ZM10.5 15a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM4 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"
      />
    </svg>
  );
}
export default ReOrderDotsHorizontalFilled;
