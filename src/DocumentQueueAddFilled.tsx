import type { SVGProps } from "react";

export function DocumentQueueAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v11A1.5 1.5 0 0 0 5.5 16h3.707A5.5 5.5 0 0 1 16 9.207V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 7h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM6 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM5.5 17h4.1c.183.358.404.693.657 1H5.5A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 0 5.5 17ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm8 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default DocumentQueueAddFilled;
