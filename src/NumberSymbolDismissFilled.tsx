import type { SVGProps } from "react";

export function NumberSymbolDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.99 2.877a.75.75 0 0 0-1.48-.254l-.667 3.88l-3.093.001a.75.75 0 0 0 0 1.5l2.835-.001l-.688 3.996L2.75 12a.75.75 0 0 0 0 1.5h2.89l-.624 3.624a.75.75 0 1 0 1.478.254l.668-3.879h1.93a5.487 5.487 0 0 1 .51-1.501H7.42l.688-3.995L12.585 8l-.249 1.442a5.465 5.465 0 0 1 1.594-.413L14.107 8l3.143-.001a.75.75 0 1 0 0-1.5l-2.885.001l.624-3.622a.75.75 0 0 0-1.478-.254L12.843 6.5l-4.478.002l.624-3.625ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default NumberSymbolDismissFilled;
