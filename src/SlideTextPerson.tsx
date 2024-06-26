import type { SVGProps } from "react";

export function SlideTextPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM5 10a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .332.126c-.139.27-.238.563-.29.872a.525.525 0 0 1-.042.002h-7A.5.5 0 0 1 5 10Zm6.05 5H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v1.901c.401.233.744.555 1 .94V6.5A2.5 2.5 0 0 0 15.5 4h-11A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6.538a3.291 3.291 0 0 1-.038-.5c0-.171.017-.338.05-.5ZM5.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm12-1a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 16.75 12 15.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default SlideTextPerson;
