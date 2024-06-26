import type { SVGProps } from "react";

export function TableOffsetLessThanOrEqualToFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM8 8h9v1.6A5.5 5.5 0 0 0 9.6 12H8V8Zm1 6.5a5.5 5.5 0 0 1 .207-1.5H3v1.5A2.5 2.5 0 0 0 5.5 17h4.1a5.47 5.47 0 0 1-.6-2.5ZM7 12V8H3v4h4Zm6-5h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm1.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM13 16h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm2.4-4.8a.5.5 0 0 1-.1.7L13.833 13l1.467 1.1a.5.5 0 0 1-.6.8l-2-1.5a.5.5 0 0 1 0-.8l2-1.5a.5.5 0 0 1 .7.1Z"
      />
    </svg>
  );
}
export default TableOffsetLessThanOrEqualToFilled;
