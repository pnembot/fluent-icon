import type { SVGProps } from "react";

export function TableOffsetAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.465 5.465 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V13h5.207c.099-.349.23-.683.393-1H8V8h8v1.207c.349.099.683.23 1 .393V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 12H4V8h3v4ZM4 7V5.5A1.5 1.5 0 0 1 5.5 4H12v3H4Zm12-1.5V7h-3V4h1.5A1.5 1.5 0 0 1 16 5.5Zm3 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default TableOffsetAdd;
