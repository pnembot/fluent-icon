import type { SVGProps } from "react";

export function UsbPlug(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 2h5a.5.5 0 0 1 .5.5V6h.079C14.137 6 15 6.853 15 7.912v5.176A1.916 1.916 0 0 1 13.079 15H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.921A1.916 1.916 0 0 1 5 13.088V7.912C5 6.852 5.863 6 6.921 6H7V2.5a.5.5 0 0 1 .5-.5Zm5.579 12a.916.916 0 0 0 .921-.912V7.912c0-.5-.41-.912-.921-.912H6.92a.916.916 0 0 0-.92.912v5.176c0 .5.41.912.921.912h6.158ZM12 6V3H8v3h4Z"
      />
    </svg>
  );
}
export default UsbPlug;
