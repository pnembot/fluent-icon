import type { SVGProps } from "react";

export function CameraDomeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 4.5ZM10 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0ZM3 7h14v4a7 7 0 1 1-14 0V7Zm7 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
      />
    </svg>
  );
}
export default CameraDomeFilled;
