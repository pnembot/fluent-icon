import type { SVGProps } from "react";

export function DrinkCoffeeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2.5a.5.5 0 0 0-1 0c0 1.002.686 1.515 1.16 1.87l.04.03c.526.394.8.63.8 1.1a.5.5 0 0 0 1 0c0-1.002-.686-1.515-1.16-1.87L5.8 3.6c-.526-.394-.8-.63-.8-1.1ZM3.935 7A.935.935 0 0 0 3 7.935V12a6 6 0 0 0 11.197 3H16a3 3 0 1 0 0-6h-1V7.935A.935.935 0 0 0 14.065 7H3.935ZM16 14h-1.341A5.99 5.99 0 0 0 15 12v-2h1a2 2 0 1 1 0 4ZM7.5 2a.5.5 0 0 1 .5.5c0 .47.274.706.8 1.1l.04.03c.474.355 1.16.868 1.16 1.87a.5.5 0 0 1-1 0c0-.47-.274-.706-.8-1.1l-.04-.03C7.686 4.015 7 3.502 7 2.5a.5.5 0 0 1 .5-.5Zm3.5.5a.5.5 0 0 0-1 0c0 1.002.686 1.515 1.16 1.87l.04.03c.526.394.8.63.8 1.1a.5.5 0 0 0 1 0c0-1.002-.686-1.515-1.16-1.87l-.04-.03c-.526-.394-.8-.63-.8-1.1Z"
      />
    </svg>
  );
}
export default DrinkCoffeeFilled;
