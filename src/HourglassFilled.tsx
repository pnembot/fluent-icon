import type { SVGProps } from "react";

export function HourglassFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.69 5.4c.2-.44.305-.917.31-1.4H6c.006.484.115.961.32 1.4c.208.45.515.847.9 1.16l1.82 1.52c.28.234.506.528.66.86c.16.33.241.693.24 1.06c.001.367-.08.73-.24 1.06a2.48 2.48 0 0 1-.66.86l-1.82 1.52a3.25 3.25 0 0 0-.9 1.16A3.41 3.41 0 0 0 6 16h8a3.49 3.49 0 0 0-.31-1.4a3.37 3.37 0 0 0-.91-1.16L11 11.91a2.45 2.45 0 0 1-.65-.85a2.42 2.42 0 0 1-.29-1.06a2.42 2.42 0 0 1 .29-1.06a2.45 2.45 0 0 1 .65-.85l1.78-1.53a3.37 3.37 0 0 0 .91-1.16Z"
      />
    </svg>
  );
}
export default HourglassFilled;
