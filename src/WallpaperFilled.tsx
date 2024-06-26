import type { SVGProps } from "react";

export function WallpaperFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h2.25a.75.75 0 0 1 0 1.5H6A1.5 1.5 0 0 0 4.5 6v2.25a.75.75 0 0 1-1.5 0V6Zm8-2.25a.75.75 0 0 1 .75-.75H14a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V6A1.5 1.5 0 0 0 14 4.5h-2.25a.75.75 0 0 1-.75-.75ZM3.75 11a.75.75 0 0 1 .75.75V14c0 .134.018.265.05.389l3.682-3.682a2.5 2.5 0 0 1 3.536 0l3.681 3.681A1.5 1.5 0 0 0 15.5 14v-2.25a.75.75 0 0 1 1.5 0V14a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H14c.134 0 .265-.018.389-.05l-3.682-3.682a1 1 0 0 0-1.414 0L5.61 15.449c.124.033.255.051.389.051h2.25a.75.75 0 0 1 0 1.5H6a3 3 0 0 1-3-3v-2.25a.75.75 0 0 1 .75-.75ZM14 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}
export default WallpaperFilled;
