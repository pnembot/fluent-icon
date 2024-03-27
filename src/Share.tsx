import type { SVGProps } from "react";

export function Share(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.33 12.838l4.497-4.423l.057-.065a.587.587 0 0 0-.057-.767L13.33 3.162l-.062-.053c-.36-.27-.89-.01-.89.469v2.13l-.225.015c-3.563.282-5.65 2.537-6.148 6.627c-.064.525.538.854.928.506c1.431-1.278 2.91-2.072 4.445-2.39c.246-.051.493-.09.742-.117l.258-.023v2.096l.005.082c.06.453.609.666.947.334ZM12.226 6.72l1.152-.077V4.61l3.446 3.388l-3.446 3.39V9.231l-1.356.122h-.008c-1.703.183-3.31.865-4.827 2.002c.298-1.339.807-2.346 1.476-3.067c.83-.895 1.99-1.443 3.563-1.569ZM5.5 4A2.5 2.5 0 0 0 3 6.5v8A2.5 2.5 0 0 0 5.5 17h8a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 14.5v-8A1.5 1.5 0 0 1 5.5 5h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
}
export default Share;
