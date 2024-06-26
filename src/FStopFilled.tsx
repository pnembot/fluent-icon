import type { SVGProps } from "react";

export function FStopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.08 5.681a2.583 2.583 0 0 1 3.525-1.955l.361.148a.75.75 0 1 0 .568-1.389l-.36-.147a4.083 4.083 0 0 0-5.572 3.09L8.991 9H5.75a.75.75 0 1 0 0 1.5h2.984l-.507 2.962c-.31 1.813-2.363 2.73-3.92 1.751l-.158-.098a.75.75 0 0 0-.798 1.27l.157.098c2.462 1.548 5.707.098 6.198-2.768l.55-3.215h2.994a.75.75 0 1 0 0-1.5h-2.737l.568-3.319Z"
      />
    </svg>
  );
}
export default FStopFilled;
