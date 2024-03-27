import type { SVGProps } from "react";

export function TextStrikethroughFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.252 3.702A6.56 6.56 0 0 1 10 2.5c2.783 0 4.489 1.485 5.1 2.3a.75.75 0 0 1-1.2.9C13.511 5.182 12.217 4 10 4a5.06 5.06 0 0 0-2.877.923C6.331 5.489 6 6.105 6 6.5c0 .78.376 1.285 1.11 1.71c.18.105.377.2.586.29H5.162c-.408-.523-.662-1.178-.662-2c0-1.105.794-2.114 1.752-2.798ZM16.5 10a.75.75 0 0 1 0 1.5h-1.662c.408.523.662 1.178.662 2c0 1.358-.874 2.376-1.912 3.014c-1.042.641-2.367.986-3.588.986c-1.142 0-2.133-.129-2.992-.498c-.877-.378-1.563-.982-2.132-1.836a.75.75 0 1 1 1.248-.832c.43.646.901 1.042 1.477 1.29c.594.255 1.354.376 2.4.376c.966 0 2.015-.28 2.801-.764C13.593 14.75 14 14.141 14 13.5c0-.78-.376-1.285-1.11-1.71a5.42 5.42 0 0 0-.586-.29H3.5a.75.75 0 0 1 0-1.5h13Z"
      />
    </svg>
  );
}
export default TextStrikethroughFilled;
