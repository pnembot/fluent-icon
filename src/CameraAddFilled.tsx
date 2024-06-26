import type { SVGProps } from "react";

export function CameraAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.784 2.826A1.5 1.5 0 0 1 8.124 2h3.764a1.5 1.5 0 0 1 1.342.83L13.815 4h1.69a2.5 2.5 0 0 1 2.5 2.5v3.761a5.478 5.478 0 0 0-4.122-1.227A4.002 4.002 0 0 0 6 10a4.002 4.002 0 0 0 3.034 3.883A5.477 5.477 0 0 0 9.6 17H4.506a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h1.69l.589-1.174ZM10 7c1.393 0 2.564.95 2.902 2.236a5.512 5.512 0 0 0-3.666 3.666A3.001 3.001 0 0 1 10 7Zm9 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default CameraAddFilled;
