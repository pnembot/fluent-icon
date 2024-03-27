import type { SVGProps } from "react";

export function CurrencyDollarEuroFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 1.998a.75.75 0 0 0-.75.75v.332A3.501 3.501 0 0 0 2 6.5v.28a3.78 3.78 0 0 0 2.172 3.422l.578.272v4.864a2 2 0 0 1-1.25-1.855v-1.08a.75.75 0 0 0-1.5 0v1.08a3.501 3.501 0 0 0 2.75 3.42v.347a.75.75 0 0 0 1.5 0v-.348A3.501 3.501 0 0 0 9 13.482v-.272a3.774 3.774 0 0 0-2.168-3.415L6.25 9.52V4.645A2 2 0 0 1 7.5 6.499v1.096a.75.75 0 0 0 1.5 0V6.499a3.501 3.501 0 0 0-2.75-3.42v-.331a.75.75 0 0 0-.75-.75ZM3.5 6.5a2 2 0 0 1 1.25-1.854v4.17A2.281 2.281 0 0 1 3.5 6.78V6.5Zm2.75 8.839V11.18a2.274 2.274 0 0 1 1.25 2.03v.273a2 2 0 0 1-1.25 1.855ZM12.505 10c0-.335.019-.661.055-.978h1.694a.75.75 0 0 0 0-1.5h-1.37A6.1 6.1 0 0 1 13.611 6c.671-.996 1.52-1.5 2.358-1.5a1.6 1.6 0 0 1 .86.249a.75.75 0 0 0 .845-1.24A3.096 3.096 0 0 0 15.969 3c-1.489 0-2.748.895-3.602 2.161a7.802 7.802 0 0 0-1.047 2.361h-.569a.75.75 0 0 0 0 1.5h.301a10.023 10.023 0 0 0-.047 1.003h-.254a.75.75 0 1 0 .001 1.5h.37c.195 1.259.63 2.4 1.245 3.314C13.221 16.105 14.48 17 15.969 17c.542 0 1.192-.135 1.723-.517a.75.75 0 1 0-.875-1.218c-.207.15-.523.235-.848.235c-.839 0-1.687-.504-2.358-1.5c-.446-.661-.79-1.51-.969-2.477l1.613-.001a.75.75 0 1 0-.002-1.5l-1.748.001V10Z"
      />
    </svg>
  );
}
export default CurrencyDollarEuroFilled;
