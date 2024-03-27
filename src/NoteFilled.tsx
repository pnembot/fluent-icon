import type { SVGProps } from "react";

export function NoteFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 3a3 3 0 0 1 2.995 2.824L17 6v4h-4l-.176.005a3 3 0 0 0-2.819 2.819L10 13v4H6a3 3 0 0 1-2.995-2.824L3 14V6a3 3 0 0 1 2.824-2.995L6 3h8Zm2.9 8.001a2 2 0 0 1-.358.652l-.128.14l-4.621 4.621c-.224.224-.496.39-.792.487L11 13l.005-.15a2 2 0 0 1 1.838-1.844L13 11l3.9.001Z"
      />
    </svg>
  );
}
export default NoteFilled;
