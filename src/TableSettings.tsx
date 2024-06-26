import type { SVGProps } from "react";

export function TableSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V8h-3v1.207c-.349.099-.683.23-1 .393V8H8v4h1.6a5.465 5.465 0 0 0-.393 1H8v3h1.207c.099.349.23.683.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3H4Zm4-6h4V4H8v3Zm6.5-3H13v3h3V5.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4ZM4 5.5V7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5ZM7 12V8H4v4h3Zm5.065-.558a2 2 0 0 1-1.43 2.478l-.462.118a4.735 4.735 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423c.258.203.537.377.835.517l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.46-.118a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.31 4.31 0 0 0-.821.497l.156.557Zm2.434 4.058a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TableSettings;
