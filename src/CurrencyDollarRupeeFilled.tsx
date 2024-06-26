import type { SVGProps } from "react";

export function CurrencyDollarRupeeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.25 2.748a.75.75 0 1 0-1.5 0v.332A3.501 3.501 0 0 0 2 6.5v.28a3.78 3.78 0 0 0 2.172 3.422l.578.272v4.864a2 2 0 0 1-1.25-1.855v-1.08a.75.75 0 0 0-1.5 0v1.08a3.501 3.501 0 0 0 2.75 3.42v.347a.75.75 0 0 0 1.5 0v-.348A3.501 3.501 0 0 0 9 13.482v-.272a3.774 3.774 0 0 0-2.168-3.415L6.25 9.52V4.645A2 2 0 0 1 7.5 6.499v1.096a.75.75 0 0 0 1.5 0V6.499a3.501 3.501 0 0 0-2.75-3.42v-.331Zm-1.5 1.897v4.17A2.281 2.281 0 0 1 3.5 6.78V6.5a2 2 0 0 1 1.25-1.855Zm1.5 6.535a2.274 2.274 0 0 1 1.25 2.03v.273a2 2 0 0 1-1.25 1.855V11.18ZM10.75 3a.75.75 0 0 0 0 1.5h2.75c.883 0 1.648.508 2.016 1.25H10.75a.75.75 0 0 0 0 1.5h4.944A2.251 2.251 0 0 1 13.5 9h-2.75a.75.75 0 0 0-.567 1.24l6.5 7.5a.75.75 0 1 0 1.134-.982l-5.425-6.259H13.5a3.75 3.75 0 0 0 3.717-3.25h.033a.75.75 0 0 0 0-1.5h-.135A3.736 3.736 0 0 0 16.5 4.5h.75a.75.75 0 0 0 0-1.5h-6.5Z"
      />
    </svg>
  );
}
export default CurrencyDollarRupeeFilled;
