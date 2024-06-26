import type { SVGProps } from "react";

export function ArrowCollapseAll(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm3.146 2.646a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L6 8.707V15.5a.5.5 0 0 1-1 0V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708l2.5-2.5ZM17.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default ArrowCollapseAll;
