import type { SVGProps } from "react";

export function MicPulseOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6.707V10a3 3 0 0 0 3.21 2.993a5.49 5.49 0 0 1 1.063-2.013l.711.711a4.5 4.5 0 0 0 6.37 6.287a.5.5 0 0 0 .5-.832l-15-15a.5.5 0 1 0-.708.708L6 6.707Zm9.112 9.112l-.148.367a.5.5 0 0 1-.935-.018l-.643-1.8l-.212.496a.5.5 0 0 1-.46.303H12a.5.5 0 0 1 0-1h.385l.322-.753l2.405 2.405Zm3.449.62v.001a4.5 4.5 0 0 0-6.002-6.002l6.002 6.002ZM6.158 4.038l5.66 5.66c.06-.033.12-.066.182-.097V5a3 3 0 0 0-5.842-.963ZM4.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-.706A5.48 5.48 0 0 1 9 14.5A4.5 4.5 0 0 1 4.5 10Z"
      />
    </svg>
  );
}
export default MicPulseOffFilled;
