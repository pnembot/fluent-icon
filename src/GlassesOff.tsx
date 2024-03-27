import type { SVGProps } from "react";

export function GlassesOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L4.89 5.598L2.362 8.523A1.494 1.494 0 0 0 2 9.5v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h1.293l.707.707v.793a2.5 2.5 0 0 0 2.5 2.5h.793l2.853 2.854a.5.5 0 0 0 .708-.708l-15-15ZM7.293 8H4.136l1.463-1.693L7.293 8ZM8 9.5v3A1.5 1.5 0 0 1 6.5 14h-2A1.5 1.5 0 0 1 3 12.5v-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Zm4 .379l-.905-.905A1.5 1.5 0 0 1 12.5 8h3.357L13.57 5.347A1 1 0 0 0 12.813 5H12a.5.5 0 0 1 0-1h.813a2 2 0 0 1 1.514.694l3.205 3.718c.288.273.468.66.468 1.088v3c0 .916-.492 1.716-1.227 2.152l-.747-.747A1.5 1.5 0 0 0 17 12.5v-3a.498.498 0 0 0-.123-.328l-.006.004l-.054-.063A.498.498 0 0 0 16.5 9h-4a.5.5 0 0 0-.5.5v.379ZM7.123 5.002l-.804-.804A2 2 0 0 1 7.186 4H8a.5.5 0 0 1 0 1h-.814c-.02 0-.042 0-.063.002Z"
      />
    </svg>
  );
}
export default GlassesOff;
