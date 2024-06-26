import type { SVGProps } from "react";

export function DoorTag(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.293 6.293A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7.048a5 5 0 0 0-8.535-3.583a2 2 0 1 0 2.828 2.828Zm2.121 2.121a2 2 0 1 0-2.828-2.828a1 1 0 0 1-1.414-1.414A4 4 0 0 1 14 6.986V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3.002c.51 0 1.022-.196 1.412-.586ZM8 14a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8Z"
      />
    </svg>
  );
}
export default DoorTag;
