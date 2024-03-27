import type { SVGProps } from "react";

export function TextHeader2(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 4a.5.5 0 0 1 .5.5V9h6V4.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5Zm12 1C13.057 5 12 6.25 12 7.5a.5.5 0 0 1-1 0C11 5.75 12.452 4 14.5 4c1.236 0 2.403.566 3.047 1.536c.662.995.716 2.33-.118 3.721c-.421.702-1.008 1.247-1.615 1.717c-.305.235-.62.456-.929.67l-.132.09c-.264.184-.52.36-.769.543c-1.018.75-1.786 1.517-1.951 2.723H17.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5c0-1.996 1.168-3.126 2.39-4.027c.262-.193.533-.38.796-.562l.13-.09a20.4 20.4 0 0 0 .886-.638c.564-.437 1.04-.892 1.37-1.44c.665-1.109.56-2.024.142-2.654C16.28 5.434 15.446 5 14.5 5Z"
      />
    </svg>
  );
}
export default TextHeader2;
