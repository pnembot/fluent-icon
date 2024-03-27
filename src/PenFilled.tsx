import type { SVGProps } from "react";

export function PenFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.92 2.873a2.975 2.975 0 0 1 4.207 4.207l-.67.67l.336.336a2 2 0 0 1 0 2.828l-.94.94a.5.5 0 0 1-.707-.708l.94-.939a1 1 0 0 0 0-1.414l-.336-.336l-7.98 7.981a2.518 2.518 0 0 1-1.235.678l-3.926.873a.5.5 0 0 1-.597-.597l.878-3.95c.1-.452.328-.867.655-1.194l9.375-9.375Z"
      />
    </svg>
  );
}
export default PenFilled;
