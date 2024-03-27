import type { SVGProps } from "react";

export function FolderZip(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.167 3c.27 0 .535.073.765.21l.135.09l1.6 1.2H15.5a2.5 2.5 0 0 1 2.479 2.174l.016.162L18 7v7.5a2.5 2.5 0 0 1-2.336 2.495L15.5 17h-11a2.5 2.5 0 0 1-2.495-2.336L2 14.5v-9a2.5 2.5 0 0 1 2.336-2.495L4.5 3h2.667Zm6.838 2.5h-1V8h1V5.5Zm-2 0H9.617l-1.46 1.534a1.5 1.5 0 0 1-.933.458l-.153.008L3 7.499V14.5a1.5 1.5 0 0 0 1.356 1.493L4.5 16h8.504v-.938a.512.512 0 0 1 0-.124V14h-.5a.5.5 0 1 1 0-1h.499L13 11h-.5a.5.5 0 0 1 0-1h.5V9h-.495a.5.5 0 0 1-.5-.5v-3Zm1.998 9h.497a.5.5 0 0 1 0 1h-.496v.5H15.5a1.5 1.5 0 0 0 1.493-1.355L17 14.5V7a1.5 1.5 0 0 0-1.355-1.493L15.5 5.5h-.495v3a.5.5 0 0 1-.5.5H14l.002 2.5h.503a.5.5 0 0 1 0 1h-.503v.958a.484.484 0 0 1 .001.083v.959ZM7.168 4H4.5a1.5 1.5 0 0 0-1.493 1.356L3 5.5v.999l4.071.001a.5.5 0 0 0 .302-.101l.06-.054L8.694 5.02L7.467 4.1a.5.5 0 0 0-.22-.093L7.167 4Z"
      />
    </svg>
  );
}
export default FolderZip;
