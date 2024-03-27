import type { SVGProps } from "react";

export function VehicleCarCollision(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.355 2.021a.5.5 0 0 1 .561.202l1.723 2.584l2.584-1.723a.5.5 0 0 1 .762.537L14.14 7h3.36a.5.5 0 0 1 .354.854l-2.57 2.568l2.493 1.662A.5.5 0 0 1 17.5 13h-3a.5.5 0 1 1 0-1h1.349l-1.626-1.084a.5.5 0 0 1-.077-.77L16.293 8H13.5a.5.5 0 0 1-.485-.621l.686-2.746l-1.924 1.283a.5.5 0 0 1-.693-.139L10 4.151V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .355-.479ZM4.75 14.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm6.25-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM12 11c.607.456 1 1.182 1 2v4a1 1 0 1 1-2 0v-.5H4v.5a1 1 0 1 1-2 0v-4c0-.818.393-1.544 1-2h-.5a.5.5 0 1 1 0-1h.66l.138-.829A2 2 0 0 1 5.27 7.5h4.458a2 2 0 0 1 1.973 1.671l.138.829h.66a.5.5 0 0 1 0 1H12ZM5.27 8.5a1 1 0 0 0-.986.836l-.2 1.198c.136-.022.274-.034.416-.034h6c.142 0 .28.012.415.034l-.2-1.198A1 1 0 0 0 9.73 8.5H5.271ZM3 13v2.5h9V13a1.5 1.5 0 0 0-1.5-1.5h-6A1.5 1.5 0 0 0 3 13Z"
      />
    </svg>
  );
}
export default VehicleCarCollision;
