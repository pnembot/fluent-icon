import type { SVGProps } from "react";

export function ArrowWrapOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.179 1.178A.5.5 0 0 0 3.5 5h.793l4 4H6a3 3 0 1 0 0 6h8.293l1.353 1.353l.001.001l1.5 1.5a.5.5 0 0 0 .707-.708l-15-15ZM13.293 14H6a2 2 0 1 1 0-4h3.293l4 4ZM14 9h-2.879l1 1H14a3 3 0 1 0 0-6H6.121l1 1H14a2 2 0 1 1 0 4Zm3.414 6.293L16.121 14h.172l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-.44.439Z"
      />
    </svg>
  );
}
export default ArrowWrapOff;
