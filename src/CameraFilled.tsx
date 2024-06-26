import type { SVGProps } from "react";

export function CameraFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-.216-7.174A1.5 1.5 0 0 1 8.124 2h3.764a1.5 1.5 0 0 1 1.342.83L13.815 4h1.69a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h1.69l.589-1.174ZM10 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
      />
    </svg>
  );
}
export default CameraFilled;
