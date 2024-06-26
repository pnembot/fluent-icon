import type { SVGProps } from "react";

export function ScanTypeCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2ZM5 17a2 2 0 0 1-2-2v-1.5a.5.5 0 0 0-1 0V15a3 3 0 0 0 3 3h1.5a.5.5 0 0 0 0-1H5ZM17 4.5A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM6.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V6h2.5v6.206a5.51 5.51 0 0 1 1-1.48V6H13v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5h-7ZM8 14h1.022a5.571 5.571 0 0 0 0 1H8a.5.5 0 0 1 0-1Zm11 .5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.854-1.854L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708Z"
      />
    </svg>
  );
}
export default ScanTypeCheckmark;
