import type { SVGProps } from "react";

export function PeopleCallFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 2.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5ZM1.5 12a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2v.084c0 .01 0 .023-.002.04a3.618 3.618 0 0 1-.085.588c-.085.368-.254.86-.595 1.354C10.617 15.08 9.263 16 6.75 16c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V12Zm13-8a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm1.084 7.582l.283-.75c.258-.681 1.062-1.017 1.74-.728l.388.166c.473.202.864.568.947 1.06c.457 2.725-1.908 6.601-4.63 7.59c-.492.178-1.023.04-1.445-.246l-.346-.235a1.184 1.184 0 0 1-.204-1.79l.545-.607a1.066 1.066 0 0 1 1.034-.323l1.225.29c.971-.607 1.492-1.46 1.562-2.56l-.878-.859a.937.937 0 0 1-.221-1.008Z"
      />
    </svg>
  );
}
export default PeopleCallFilled;
