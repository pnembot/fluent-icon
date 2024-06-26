import type { SVGProps } from "react";

export function TableSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 9.6a5.47 5.47 0 0 0-2.5-.6a5.5 5.5 0 0 0-1.5.207V8h4v1.6ZM9.207 13A5.5 5.5 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H8v-4h1.207ZM12 9.6A5.523 5.523 0 0 0 9.6 12H8V8h4v1.6ZM7 8v4H3V8h4Zm0 5H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm10-6h-4V3h1.5A2.5 2.5 0 0 1 17 5.5V7Zm-5 0V3H8v4h4ZM7 7V3H5.5A2.5 2.5 0 0 0 3 5.5V7h4Zm5.065 4.442a2 2 0 0 1-1.43 2.478l-.462.118a4.735 4.735 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423c.258.203.537.377.835.517l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.46-.118a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.31 4.31 0 0 0-.821.497l.156.557Zm2.434 4.058a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TableSettingsFilled;
