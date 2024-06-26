import type { SVGProps } from "react";

export function TableOffsetLessThanOrEqualTo(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.465 5.465 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V13h5.207c.099-.349.23-.683.393-1H8V8h8v1.207c.349.099.683.23 1 .393V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 12H4V8h3v4ZM4 7V5.5A1.5 1.5 0 0 1 5.5 4H12v3H4Zm12-1.5V7h-3V4h1.5A1.5 1.5 0 0 1 16 5.5ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM13 16h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm2.4-4.8a.5.5 0 0 1-.1.7L13.833 13l1.467 1.1a.5.5 0 0 1-.6.8l-2-1.5a.5.5 0 0 1 0-.8l2-1.5a.5.5 0 0 1 .7.1Z"
      />
    </svg>
  );
}
export default TableOffsetLessThanOrEqualTo;
