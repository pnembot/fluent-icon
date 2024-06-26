import type { SVGProps } from "react";

export function BeakerEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.25 3v4.747a2.5 2.5 0 0 1-.296 1.18L4.11 10.5h7.778l-.843-1.572a2.5 2.5 0 0 1-.296-1.181V3h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75Zm7.174 8.5H3.575l-1.227 2.292A1.5 1.5 0 0 0 3.67 16h5.805c.152-.501.426-.958.798-1.33l2.507-2.507l-.356-.663Zm-1.444 3.877l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default BeakerEditFilled;
