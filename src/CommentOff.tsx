import type { SVGProps } from "react";

export function CommentOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l.763.762A2.55 2.55 0 0 0 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591c.33.437.957.526 1.399.2l4.011-2.962h3.325l3.011 3.012a.5.5 0 0 0 .708-.708l-2.309-2.308L3.823 3.116l-.97-.97Zm10.281 11.696h-2.654L6.205 17H6.2v-3.158H4.6c-.896 0-1.6-.713-1.6-1.566v-6.71c0-.499.24-.95.62-1.239l9.515 9.515ZM17 12.276c0 .69-.46 1.288-1.11 1.492l.759.76A2.56 2.56 0 0 0 18 12.275v-6.71C18 4.149 16.836 3 15.4 3H5.121l1 1H15.4c.896 0 1.6.713 1.6 1.566v6.71Z"
      />
    </svg>
  );
}
export default CommentOff;
