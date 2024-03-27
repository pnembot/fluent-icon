import type { SVGProps } from "react";

export function VehicleCarCollisionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.355 2.021a.5.5 0 0 1 .561.202l1.723 2.584l2.584-1.723a.5.5 0 0 1 .762.537L14.14 7h3.36a.5.5 0 0 1 .354.854l-2.57 2.568l2.493 1.662A.5.5 0 0 1 17.5 13h-3a.5.5 0 1 1 0-1h1.349l-1.626-1.084a.5.5 0 0 1-.077-.77L16.293 8H13.5a.5.5 0 0 1-.485-.621l.686-2.746l-1.924 1.283a.5.5 0 0 1-.693-.139L10 4.151V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .355-.479ZM2.5 10.001a.5.5 0 1 0 0 1H3c-.607.455-1 1.181-1 2v4a1 1 0 0 0 2 0v-.5h7v.5a1 1 0 0 0 2 0v-4c0-.819-.393-1.545-1-2h.5a.5.5 0 0 0 0-1h-.66l-.138-.83a2 2 0 0 0-1.973-1.67H5.271a2 2 0 0 0-1.973 1.67l-.138.83H2.5Zm1.585.533l.2-1.198A1 1 0 0 1 5.27 8.5h4.458a1 1 0 0 1 .987.836l.2 1.198a2.517 2.517 0 0 0-.416-.034h-6c-.142 0-.28.012-.415.034ZM5.5 13.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm4.75.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}
export default VehicleCarCollisionFilled;
