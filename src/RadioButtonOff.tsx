import type { SVGProps } from "react";

export function RadioButtonOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="m1.853 1.147l13 13a.5.5 0 0 1-.707.707l-2.272-2.272a6 6 0 0 1-8.456-8.456L1.146 1.854a.5.5 0 0 1 .707-.707ZM3 8a5 5 0 0 0 5 5h-.001a4.98 4.98 0 0 0 3.164-1.129L4.128 4.836A4.981 4.981 0 0 0 3 8Zm10 0a5 5 0 0 0-5-5l-.002-.002a4.94 4.94 0 0 0-2.295.583l-.747-.747A5.967 5.967 0 0 1 8 2a6 6 0 0 1 6 6c0 1.112-.308 2.15-.835 3.043l-.747-.747A4.94 4.94 0 0 0 13 8Z"
      />
    </svg>
  );
}
export default RadioButtonOff;
