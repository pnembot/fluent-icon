import type { SVGProps } from "react";

export function SelectObject(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM7 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3-8a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm11 0a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Z"
      />
    </svg>
  );
}
export default SelectObject;
