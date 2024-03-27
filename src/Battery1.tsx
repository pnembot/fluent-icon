import type { SVGProps } from "react";

export function Battery1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 5A2.5 2.5 0 0 1 16 7.5v.833l1.167.003a.833.833 0 0 1 .833.833v1.667a.833.833 0 0 1-.833.833L16 11.667v.833a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.946H4.5c-.65 0-1.405.496-1.492 1.13L3 7.196v5.495c0 .647.492 1.18 1.122 1.244l.128.006h9.5a1.25 1.25 0 0 0 1.243-1.122l.007-.128V7.196a1.25 1.25 0 0 0-1.122-1.244l-.128-.006Zm-9.25 1a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0v-5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default Battery1;
