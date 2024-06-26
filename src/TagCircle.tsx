import type { SVGProps } from "react";

export function TagCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 7A1.5 1.5 0 0 0 6 8.5v3A1.5 1.5 0 0 0 7.5 13h4.058c.4 0 .789-.137 1.1-.39l1.786-1.444a1.5 1.5 0 0 0 0-2.332L12.658 7.39a1.75 1.75 0 0 0-1.1-.39H7.5ZM7 8.5a.5.5 0 0 1 .5-.5h4.058a.75.75 0 0 1 .471.167l1.786 1.444a.5.5 0 0 1 0 .778l-1.786 1.444a.75.75 0 0 1-.471.167H7.5a.5.5 0 0 1-.5-.5v-3ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default TagCircle;
