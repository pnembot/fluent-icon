import type { SVGProps } from "react";

export function ArrowParagraph(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.146 10.854a.5.5 0 0 0 .708-.708L10.707 8H15.5A2.5 2.5 0 0 0 18 5.5v-3s0-.5-.5-.5s-.5.5-.5.5v3A1.5 1.5 0 0 1 15.5 7h-4.793l2.147-2.146a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3ZM7.854 9.146a.5.5 0 1 0-.708.708L9.293 12H2.5s-.5 0-.5.5s.5.5.5.5h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3Z"
      />
    </svg>
  );
}
export default ArrowParagraph;
