import type { SVGProps } from "react";

export function Pi(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.18 4.668c-.202.388-.21.888-.141 1.234a.5.5 0 1 1-.98.196c-.098-.487-.106-1.237.233-1.89C2.655 3.504 3.377 3 4.542 3H16.5a.5.5 0 1 1 0 1H14v9.665c0 1.543.469 2.058.837 2.23c.423.199.998.091 1.436-.132a.5.5 0 1 1 .454.891c-.562.286-1.487.534-2.314.148c-.882-.413-1.413-1.424-1.413-3.137V4H8v.028a90.206 90.206 0 0 1-.617 6.514a44.425 44.425 0 0 1-.6 3.522c-.232 1.059-.507 2.002-.836 2.66a.5.5 0 1 1-.894-.448c.271-.542.525-1.386.754-2.427c.227-1.032.421-2.223.585-3.44c.325-2.42.523-4.916.607-6.409H4.542c-.828 0-1.187.328-1.363.668Z"
      />
    </svg>
  );
}
export default Pi;
