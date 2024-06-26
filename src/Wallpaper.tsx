import type { SVGProps } from "react";

export function Wallpaper(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-1 0V6Zm8-2.5a.5.5 0 0 1 .5-.5H14a3 3 0 0 1 3 3v2.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1-.5-.5ZM3.5 11a.5.5 0 0 1 .5.5V14c0 .37.101.718.277 1.016l4.486-4.486a1.75 1.75 0 0 1 2.474 0l4.486 4.486C15.9 14.718 16 14.371 16 14v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3h-2.5a.5.5 0 0 1 0-1H14c.37 0 .718-.101 1.016-.277l-4.486-4.486a.75.75 0 0 0-1.06 0l-4.486 4.486C5.282 15.9 5.629 16 6 16h2.5a.5.5 0 0 1 0 1H6a3 3 0 0 1-3-3v-2.5a.5.5 0 0 1 .5-.5Zm9-4a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Zm-1.5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"
      />
    </svg>
  );
}
export default Wallpaper;
