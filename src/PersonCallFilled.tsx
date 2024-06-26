import type { SVGProps } from "react";

export function PersonCallFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18c.357 0 .71-.014 1.056-.043a2.207 2.207 0 0 1 .516-1.975l.545-.607a2.066 2.066 0 0 1 2.009-.629l.785.186c.378-.312.607-.68.712-1.121l-.518-.506a1.937 1.937 0 0 1-.457-2.077l.086-.228H5.009Zm10.575.582l.283-.75c.258-.681 1.062-1.017 1.74-.728l.388.166c.473.202.864.568.947 1.06c.457 2.725-1.908 6.601-4.63 7.59c-.492.178-1.023.04-1.445-.246l-.346-.235a1.184 1.184 0 0 1-.204-1.79l.545-.607a1.066 1.066 0 0 1 1.034-.323l1.225.29c.971-.607 1.492-1.46 1.562-2.56l-.878-.859a.937.937 0 0 1-.221-1.008Z"
      />
    </svg>
  );
}
export default PersonCallFilled;
