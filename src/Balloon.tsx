import type { SVGProps } from "react";

export function Balloon(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.002 4.43a.5.5 0 0 1 .566-.425a2.86 2.86 0 0 1 2.424 2.421a.5.5 0 0 1-.99.143a1.86 1.86 0 0 0-1.575-1.574a.5.5 0 0 1-.425-.565ZM5 7a5 5 0 0 1 10 0a8.313 8.313 0 0 1-1.598 4.859c-.791 1.074-1.837 1.892-2.902 2.093V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.048c-1.065-.2-2.11-1.017-2.902-2.091A8.311 8.311 0 0 1 5 7Zm5-4a4 4 0 0 0-4 4c0 1.637.585 3.16 1.402 4.268C8.237 12.399 9.232 13 10 13c.768 0 1.763-.602 2.598-1.734A7.313 7.313 0 0 0 14 7a4 4 0 0 0-4-4Z"
      />
    </svg>
  );
}
export default Balloon;
