import type { SVGProps } from "react";

export function Link(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 6a.5.5 0 0 1 .09.992L8 7H6a3 3 0 0 0-.197 5.994L6 13h2a.5.5 0 0 1 .09.992L8 14H6a4 4 0 0 1-.22-7.994L6 6h2Zm6 0a4 4 0 0 1 .22 7.994L14 14h-2a.5.5 0 0 1-.09-.992L12 13h2a3 3 0 0 0 .197-5.994L14 7h-2a.5.5 0 0 1-.09-.992L12 6h2ZM6 9.5h8a.5.5 0 0 1 .09.992L14 10.5H6a.5.5 0 0 1-.09-.992L6 9.5h8h-8Z"
      />
    </svg>
  );
}
export default Link;
