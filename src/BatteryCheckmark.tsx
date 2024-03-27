import type { SVGProps } from "react";

export function BatteryCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 5A2.5 2.5 0 0 1 16 7.5v.833l1.167.003a.833.833 0 0 1 .833.833v1.667a.833.833 0 0 1-.833.833L16 11.667v.833a2.5 2.5 0 0 1-2.5 2.5h-2.707c.096-.34.16-.695.19-1.059h2.767a1.25 1.25 0 0 0 1.243-1.122l.007-.128V7.196a1.25 1.25 0 0 0-1.122-1.244l-.128-.006H4.5c-.65 0-1.405.496-1.492 1.13L3 7.196V8.6a5.508 5.508 0 0 0-1 .657V7.5A2.5 2.5 0 0 1 4.5 5h9ZM10 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L4.5 14.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default BatteryCheckmark;
