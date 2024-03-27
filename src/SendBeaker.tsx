import type { SVGProps } from "react";

export function SendBeaker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.184 1.612a.5.5 0 0 1 .54-.06L17.499 10h-.01a.498.498 0 0 1-.213-.053L3.27 2.944L4.884 9H11.5a.5.5 0 1 1 0 1H4.884L3.27 16.056l8.742-4.37c.043.35.206.662.447.894l-9.734 4.867a.5.5 0 0 1-.707-.576L3.983 9.5L2.017 2.129a.5.5 0 0 1 .167-.517Zm.54-.06L17.508 10a.5.5 0 0 0 .216-.947l-15-7.5Zm14.273 12.853a2 2 0 0 0 .224.92l.35.675H13.43l.347-.67a2 2 0 0 0 .224-.92V12h-.498a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1h-.505v2.405ZM12.911 17l-.798 1.54a1 1 0 0 0 .888 1.46H18a1 1 0 0 0 .888-1.46L18.089 17h-5.178Z"
      />
    </svg>
  );
}
export default SendBeaker;
