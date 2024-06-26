import type { SVGProps } from "react";

export function Note(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 3a3 3 0 0 1 2.995 2.824L17 6v4.379a2 2 0 0 1-.467 1.284l-.119.13l-4.621 4.621a2 2 0 0 1-1.238.578l-.176.008H6a3 3 0 0 1-2.995-2.824L3 14V6a3 3 0 0 1 2.824-2.995L6 3h8Zm0 1H6a2 2 0 0 0-1.995 1.85L4 6v8a2 2 0 0 0 1.85 1.995L6 16h4v-3a3 3 0 0 1 2.824-2.995L13 10h3V6a2 2 0 0 0-1.85-1.995L14 4Zm1.783 7.001L13 11a2 2 0 0 0-1.995 1.85L11 13v2.781l.086-.074l4.621-4.621a.86.86 0 0 0 .075-.085Z"
      />
    </svg>
  );
}
export default Note;
