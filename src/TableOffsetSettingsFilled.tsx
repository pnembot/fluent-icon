import type { SVGProps } from "react";

export function TableOffsetSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM8 8h9v1.6A5.5 5.5 0 0 0 9.6 12H8V8Zm1 6.5a5.5 5.5 0 0 1 .207-1.5H3v1.5A2.5 2.5 0 0 0 5.5 17h4.1a5.47 5.47 0 0 1-.6-2.5ZM7 12V8H3v4h4Zm6-5h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-.933 4.442a2 2 0 0 1-1.431 2.478l-.461.118a4.703 4.703 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.157-.556a2 2 0 0 1 1.431-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.32 4.32 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.821.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TableOffsetSettingsFilled;
