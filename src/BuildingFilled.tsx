import type { SVGProps } from "react";

export function BuildingFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3.5A1.5 1.5 0 0 1 5.5 2h6A1.5 1.5 0 0 1 13 3.5V8h1.5A1.5 1.5 0 0 1 16 9.5v8a.5.5 0 0 1-.5.5H13v-3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V18H4.5a.5.5 0 0 1-.5-.5v-14Zm2.75 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM12 15v3h-1.5v-3H12Zm-2.5 0H8v3h1.5v-3Z"
      />
    </svg>
  );
}
export default BuildingFilled;
