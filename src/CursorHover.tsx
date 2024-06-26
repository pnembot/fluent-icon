import type { SVGProps } from "react";

export function CursorHover(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-1.164 1.818a1.497 1.497 0 0 0-.275-.379l-.446-.446A1 1 0 0 0 17 13V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H4a2 2 0 0 1-2-2V6Zm8.854 4.146A.5.5 0 0 0 10 10.5v7a.5.5 0 0 0 .91.287l1.571-2.245l2.943.452a.5.5 0 0 0 .43-.848l-5-5ZM11 15.915v-4.207l3.066 3.067l-1.74-.268a.5.5 0 0 0-.486.207l-.84 1.2Z"
      />
    </svg>
  );
}
export default CursorHover;
