import type { SVGProps } from "react";

export function PremiumFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 2.75a.75.75 0 0 0-.657.389l-2.75 5a.75.75 0 0 0 .08.84l7.25 8.75a.75.75 0 0 0 1.155 0l7.25-8.75a.75.75 0 0 0 .08-.84l-2.75-5a.75.75 0 0 0-.658-.389h-9ZM4.156 7.5l1.787-3.25h1.5L6.305 7.5H4.156ZM6.144 9l1.929 4.748L4.138 9h2.006Zm3.845 5.481L7.763 9h4.386l-2.16 5.481ZM7.895 7.5l1.137-3.25h1.945l1.197 3.25h-4.28Zm5.878 0l-1.197-3.25h1.48l1.788 3.25h-2.071ZM13.761 9h2.1l-4.005 4.834L13.761 9Z"
      />
    </svg>
  );
}
export default PremiumFilled;
