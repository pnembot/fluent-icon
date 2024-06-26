import type { SVGProps } from "react";

export function CursorHoverFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5v-4.5a1.5 1.5 0 0 1 2.56-1.06l5 5c.114.113.206.24.276.378A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H4Zm6.854 6.146A.5.5 0 0 0 10 10.5v7a.5.5 0 0 0 .91.287l1.571-2.245l2.943.452a.5.5 0 0 0 .43-.848l-5-5ZM11 15.915v-4.207l3.066 3.067l-1.74-.268a.5.5 0 0 0-.486.207l-.84 1.2Z"
      />
    </svg>
  );
}
export default CursorHoverFilled;
