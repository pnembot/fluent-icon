import type { SVGProps } from "react";

export function SelectObjectSkewFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm-4 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0ZM3.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM6 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm8.115.75h-4.23a2.499 2.499 0 0 0 0-1.5h4.23a2.498 2.498 0 0 0 0 1.5ZM3.61 13.002l2.37-6.517c.394.302.88.49 1.41.513l-2.37 6.517a2.488 2.488 0 0 0-1.41-.513Zm6.505 3.248h-4.23a2.5 2.5 0 0 0 0-1.5h4.23a2.498 2.498 0 0 0 0 1.5Zm2.495-3.248l2.37-6.517c.394.302.88.49 1.41.513l-2.37 6.517a2.488 2.488 0 0 0-1.41-.513Z"
      />
    </svg>
  );
}
export default SelectObjectSkewFilled;
