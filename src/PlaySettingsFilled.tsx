import type { SVGProps } from "react";

export function PlaySettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.221 8.685a1.5 1.5 0 0 1 0 2.628l-5.23 2.876a5.5 5.5 0 0 0-6.992-4.982V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497ZM4.065 11.442a2 2 0 0 1-1.43 2.478l-.462.118a4.709 4.709 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.258.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.315 4.315 0 0 0-.821.497l.156.557ZM6.499 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default PlaySettingsFilled;
