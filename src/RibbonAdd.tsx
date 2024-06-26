import type { SVGProps } from "react";

export function RibbonAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5ZM9 2c.399 0 .789.039 1.166.113c-.223.286-.42.594-.583.92a5 5 0 1 0 3.542 7.793c.347.09.707.146 1.077.166A6.027 6.027 0 0 1 13 12.472V17.5a.5.5 0 0 1-.748.434L9 16.076l-3.252 1.858A.5.5 0 0 1 5 17.5v-5.028A6 6 0 0 1 9 2Zm0 12a5.972 5.972 0 0 1-3-.803v3.441l2.752-1.572a.5.5 0 0 1 .496 0L12 16.638v-3.44A5.972 5.972 0 0 1 9 14Z"
      />
    </svg>
  );
}
export default RibbonAdd;
