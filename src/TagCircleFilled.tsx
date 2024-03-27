import type { SVGProps } from "react";

export function TagCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm4-1.5v3A1.5 1.5 0 0 0 7.5 13h4.058c.4 0 .789-.137 1.1-.39l1.786-1.444a1.5 1.5 0 0 0 0-2.332L12.658 7.39a1.75 1.75 0 0 0-1.1-.39H7.5A1.5 1.5 0 0 0 6 8.5Z"
      />
    </svg>
  );
}
export default TagCircleFilled;
