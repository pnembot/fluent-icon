import type { SVGProps } from "react";

export function TableOffsetSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.465 5.465 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V13h5.207c.099-.349.23-.683.393-1H8V8h8v1.207c.349.099.683.23 1 .393V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 12H4V8h3v4ZM4 7V5.5A1.5 1.5 0 0 1 5.5 4H12v3H4Zm12-1.5V7h-3V4h1.5A1.5 1.5 0 0 1 16 5.5Zm-3.933 5.942a2 2 0 0 1-1.431 2.478l-.461.118a4.703 4.703 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.157-.556a2 2 0 0 1 1.431-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.32 4.32 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.821.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TableOffsetSettings;
