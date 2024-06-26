import type { SVGProps } from "react";

export function CopyAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1.207a5.48 5.48 0 0 1-.185-1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.022a5.5 5.5 0 0 1 1 .185V4a2 2 0 0 0-2-2H8Zm-.5 15h2.1c.183.358.404.693.657 1H7.5A3.5 3.5 0 0 1 4 14.5V6a2 2 0 0 1 1-1.732V14.5A2.5 2.5 0 0 0 7.5 17ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default CopyAdd;
