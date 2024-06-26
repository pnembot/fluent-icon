import type { SVGProps } from "react";

export function MicPulseOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6.707V10a3 3 0 0 0 3.21 2.993c.11-.387.26-.757.448-1.104A2 2 0 0 1 7 10V7.708l3.984 3.984a4.5 4.5 0 0 0 6.37 6.287a.5.5 0 0 0 .5-.832l-15-15a.5.5 0 1 0-.708.708L6 6.707Zm9.112 9.112l-.148.367a.5.5 0 0 1-.935-.018l-.643-1.8l-.212.496a.5.5 0 0 1-.46.303H12a.5.5 0 0 1 0-1h.385l.322-.753l2.405 2.405ZM11 5v3.879l.818.818c.06-.033.12-.066.182-.097V5a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 11 5Zm7.56 11.44h.001a4.5 4.5 0 0 0-6.002-6.002l6.002 6.002ZM4.5 10A4.5 4.5 0 0 0 9 14.5c0 .819.179 1.596.5 2.294v.706a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 3.5 10a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default MicPulseOff;
