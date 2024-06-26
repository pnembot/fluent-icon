import type { SVGProps } from "react";

export function BoxSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.304c.57.227.943.779.943 1.392v7.646a1.5 1.5 0 0 1-.943 1.393L11.3 17.518a3.499 3.499 0 0 1-1.493.245a1.503 1.503 0 0 0-.246-.324l-.061-.06V8.838L3 6.238v2.79a4.474 4.474 0 0 0-1 .228v-3.08a1.5 1.5 0 0 1 .943-1.392L8.7 2.48Zm2.229.93a2.5 2.5 0 0 0-1.857 0l-1.35.54l6.153 2.46l2.279-.91l-5.226-2.09Zm1.6 3.54L6.375 4.487L3.846 5.499L10 7.961l2.529-1.012ZM17 6.237l-6.5 2.6v7.88c.146-.03.289-.073.428-.128l5.758-2.303a.5.5 0 0 0 .314-.465V6.238ZM3.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 3.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default BoxSearch;
