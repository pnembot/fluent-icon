import type { SVGProps } from "react";

export function LocationOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.146 2.146a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.708.708L14.094 14.8l-.272.268l-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118l-2.043-1.985l-1.52-1.499a7.007 7.007 0 0 1-.78-8.977L2.146 2.854a.5.5 0 0 1 0-.708Zm8.932 9.639a2.992 2.992 0 0 1-3.87-3.87l-2.22-2.22a6.01 6.01 0 0 0 .591 7.372l.176.183l.571.567l2.981 2.905l.093.08a.997.997 0 0 0 1.2 0l.093-.08l2.23-2.168l.465-.459l-2.31-2.31Zm.776-2.052l.744.744a2.992 2.992 0 0 0-4.083-4.083l.744.744a1.996 1.996 0 0 1 2.595 2.595ZM6.353 4.232a6.003 6.003 0 0 1 7.892.524a6.01 6.01 0 0 1 .526 7.894l.71.71a7.006 7.006 0 0 0-.531-9.309a6.999 6.999 0 0 0-9.307-.53l.71.71Z"
      />
    </svg>
  );
}
export default LocationOff;
