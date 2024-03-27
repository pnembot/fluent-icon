import type { SVGProps } from "react";

export function PhoneTablet(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.845 4C5.364 4 5 4.374 5 4.804V6H4V4.804C4 3.794 4.84 3 5.845 3h10.31C17.16 3 18 3.794 18 4.804v7.392c0 1.01-.84 1.804-1.845 1.804H10v-1h6.155c.481 0 .845-.374.845-.804V4.804c0-.43-.364-.804-.845-.804H5.845ZM10 12h2.5a.5.5 0 0 0 0-1H10v1Zm-5 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1H5ZM2 8.5A1.5 1.5 0 0 1 3.5 7h4A1.5 1.5 0 0 1 9 8.5v8A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5v-8ZM3.5 8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-4Z"
      />
    </svg>
  );
}
export default PhoneTablet;
