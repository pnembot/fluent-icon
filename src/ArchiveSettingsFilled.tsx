import type { SVGProps } from "react";

export function ArchiveSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75v-1.5ZM3 8h14v1.6a5.47 5.47 0 0 0-2.5-.6c-1.177 0-2.268.37-3.163 1H8.5a.5.5 0 0 0 0 1h1.757A5.477 5.477 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H6a3 3 0 0 1-3-3V8Zm9.067 3.443a2 2 0 0 1-1.431 2.478l-.461.118a4.702 4.702 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.157-.556a2 2 0 0 1 1.431-2.479l.46-.117a4.702 4.702 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.32 4.32 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.821.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default ArchiveSettingsFilled;
