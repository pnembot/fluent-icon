import type { SVGProps } from "react";

export function TapDoubleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 8.5a5.5 5.5 0 1 1 10.967.602c.342.144.653.335.929.563A6.5 6.5 0 1 0 3.637 11.31c.255-.248.53-.452.819-.615A5.482 5.482 0 0 1 4 8.5Zm10 0c0 .112-.004.224-.012.334l-.992-.173a3.5 3.5 0 1 0-6.564 1.526a4.392 4.392 0 0 0-1.048.134A4.5 4.5 0 1 1 14 8.5Zm-6-1a1.5 1.5 0 1 1 3 0v2.08l2.937.514a2.5 2.5 0 0 1 1.914 3.327l-.983 2.67a2.5 2.5 0 0 1-1.918 1.6l-1.517.263c-1.025.178-1.956-.457-2.435-1.23c-.639-1.026-1.961-2.44-4.553-2.727a.5.5 0 0 1-.43-.618c.147-.59.428-1.044.818-1.36c.385-.315.843-.467 1.3-.516c.624-.068 1.283.05 1.867.248V7.5Z"
      />
    </svg>
  );
}
export default TapDoubleFilled;
