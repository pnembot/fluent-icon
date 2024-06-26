import type { SVGProps } from "react";

export function CircleEraserFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.731 17.174a2.5 2.5 0 0 1 0-3.536l4.9-4.9a2.5 2.5 0 0 1 3.536 0l.8.8a7.995 7.995 0 1 0-8.441 8.44l-.795-.804Zm7.737-7.734l2.095 2.1a1.5 1.5 0 0 1 0 2.122l-3.6 3.6l-4.216-4.217l3.6-3.6a1.5 1.5 0 0 1 2.122 0l-.001-.005Zm-2.212 8.523l-4.216-4.217l-.6.6a1.5 1.5 0 0 0 0 2.122l2.1 2.095a1.502 1.502 0 0 0 1.117.438h4.092a.5.5 0 0 0 0-1h-2.531l.038-.038Z"
      />
    </svg>
  );
}
export default CircleEraserFilled;
