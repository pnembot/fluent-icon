import type { SVGProps } from "react";

export function TagSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.02 2.036a2 2 0 0 1 1.986 1.997l.008 4.95a2 2 0 0 1-.586 1.417l-.359.359a4.5 4.5 0 1 0-6.31 6.31a2 2 0 0 1-2.79-.038L3.02 12.083a2 2 0 0 1 .002-2.83l6.682-6.665a2 2 0 0 1 1.425-.584l4.89.032ZM13 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm3.303 9.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55ZM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
}
export default TagSearchFilled;
