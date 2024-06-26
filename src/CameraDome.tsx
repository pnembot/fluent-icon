import type { SVGProps } from "react";

export function CameraDome(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0ZM2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v1a1.5 1.5 0 0 1-1 1.415V11a7 7 0 1 1-14 0V6.915A1.5 1.5 0 0 1 2 5.5v-1ZM4 7v4a6 6 0 1 0 12 0V7H4Zm-.5-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-13Z"
      />
    </svg>
  );
}
export default CameraDome;
