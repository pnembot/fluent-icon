import type { SVGProps } from "react";

export function TagLockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18.006 4.033a2 2 0 0 0-1.986-1.997l-4.89-.032a2 2 0 0 0-1.426.584L3.022 9.252a2 2 0 0 0-.002 2.83l4.949 4.95A2 2 0 0 0 10 17.52V14a2 2 0 0 1 1.5-1.937V12a3 3 0 0 1 5.68-1.351l.248-.249a2 2 0 0 0 .586-1.417l-.008-4.95ZM14 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-1.5 5v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default TagLockFilled;
