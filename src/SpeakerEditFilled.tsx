import type { SVGProps } from "react";

export function SpeakerEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.999 3.002c0-.873-1.04-1.327-1.68-.733L6.447 5.863a.5.5 0 0 1-.34.133H3.5a1.5 1.5 0 0 0-1.5 1.5v5.001a1.5 1.5 0 0 0 1.5 1.5h2.607a.5.5 0 0 1 .34.134L9.28 16.76l.152-.607c.14-.562.431-1.075.84-1.485L12 12.94V3.002Zm3.96 1.66a7.965 7.965 0 0 1 1.988 4.453a2.882 2.882 0 0 0-1.022-.11a6.965 6.965 0 0 0-1.711-3.675a.5.5 0 0 1 .744-.667Zm-1.2 2.585c.416.72.65 1.496.717 2.274a2.896 2.896 0 0 0-.375.317l-.63.629a4.48 4.48 0 0 0-.578-2.72a.5.5 0 0 1 .866-.5Zm-3.78 8.128l4.829-4.83a1.87 1.87 0 1 1 2.644 2.645l-4.829 4.83a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.079-1.08l.375-1.497c.097-.387.296-.74.578-1.021Z"
      />
    </svg>
  );
}
export default SpeakerEditFilled;
