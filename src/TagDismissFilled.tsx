import type { SVGProps } from "react";

export function TagDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18.006 4.033a2 2 0 0 0-1.986-1.997l-4.89-.032a2 2 0 0 0-1.426.584L3.022 9.252a2 2 0 0 0-.002 2.83l4.949 4.95a2 2 0 0 0 1.95.512a5.5 5.5 0 0 1 7.797-7.507a2 2 0 0 0 .298-1.054l-.008-4.95ZM14 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default TagDismissFilled;
