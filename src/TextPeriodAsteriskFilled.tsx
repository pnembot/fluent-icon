import type { SVGProps } from "react";

export function TextPeriodAsteriskFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.246 4.75a.75.75 0 0 0-1.5 0v1.858l-1.764-.573a.75.75 0 1 0-.464 1.426l1.768.575L9.194 9.54a.75.75 0 0 0 1.214.882l1.09-1.502l1.092 1.502a.75.75 0 1 0 1.213-.882L12.71 8.037l1.771-.576a.75.75 0 1 0-.463-1.426l-1.772.575V4.75ZM6.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}
export default TextPeriodAsteriskFilled;
