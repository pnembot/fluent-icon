import type { SVGProps } from "react";

export function MailRead(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.743 3.071a.5.5 0 0 1 .514 0l6.772 4.063A2 2 0 0 1 18 8.85v5.65a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V8.85a2 2 0 0 1 .971-1.716l.213.355l-.213-.355l6.772-4.063ZM10 4.083L3.486 7.992L3.472 8L10 11.917L16.528 8l-.013-.008L10 4.083Zm7 4.8l-6.743 4.046a.5.5 0 0 1-.514 0L3 8.883V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5V8.883Z"
      />
    </svg>
  );
}
export default MailRead;
