import type { SVGProps } from "react";

export function DialpadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm0 4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM7.25 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM11.25 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM10 13.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM11.25 16a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM14 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM15.25 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM14 13.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default DialpadFilled;
