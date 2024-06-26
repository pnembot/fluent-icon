import type { SVGProps } from "react";

export function CellularWarning(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.503 4a.5.5 0 0 1 .492.41l.008.09v7.027l-.71-1.422a2.049 2.049 0 0 0-.29-.433V4.5a.5.5 0 0 1 .5-.5Zm-6.5 11.533L11 13.536v-5.04l-.008-.09a.5.5 0 0 0-.992.09V15.5l.003.034ZM13 9.675a1.959 1.959 0 0 1 1-.613v-2.56l-.008-.09a.5.5 0 0 0-.992.09v3.173ZM7.503 10a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09l-.008-.09v-5a.5.5 0 0 1 .5-.5ZM4.5 12a.5.5 0 0 1 .492.41L5 12.5v3a.5.5 0 0 1-.992.09L4 15.5v-3a.5.5 0 0 1 .5-.5Zm9.103-1.446l-3.496 6.998A1 1 0 0 0 11.002 19h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.003a.5.5 0 0 1-1 0v-3.003a.5.5 0 0 1 1 0Zm-.5 5.505a.5.5 0 1 1 0-1.001a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default CellularWarning;
