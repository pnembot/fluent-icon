import type { SVGProps } from "react";

export function TargetEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 11.499a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-5-1.5a5 5 0 0 1 9.998-.057l-1.15 1.151a4 4 0 1 0-2.754 2.754l-.822.822c-.104.103-.2.214-.288.33a5 5 0 0 1-4.984-5Zm5-7a7 7 0 0 1 6.929 6.007c.343-.024.69.014 1.021.112a8 8 0 1 0-8.943 8.82c.01-.095.025-.19.05-.286l.173-.695A7 7 0 0 1 10 3Zm.979 12.377l4.829-4.83a1.87 1.87 0 0 1 2.644 2.645l-4.829 4.83a2.197 2.197 0 0 1-1.02.577l-1.498.375a.89.89 0 0 1-1.079-1.079l.375-1.498c.097-.386.296-.739.578-1.02Z"
      />
    </svg>
  );
}
export default TargetEdit;
