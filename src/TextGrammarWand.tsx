import type { SVGProps } from "react";

export function TextGrammarWand(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 3a.5.5 0 0 0 0 1h6.883a1.496 1.496 0 0 1-.373-.99V11H2.5Zm0 3h6.377l-1 1H2.5a.5.5 0 0 1 0-1ZM14 7a.5.5 0 0 1 .496.439l.098.791a2.5 2.5 0 0 0 2.176 2.176l.791.098a.5.5 0 0 1 0 .992l-.791.098a2.5 2.5 0 0 0-2.176 2.176l-.098.791a.5.5 0 0 1-.992 0l-.098-.791a2.5 2.5 0 0 0-2.176-2.176l-.791-.098a.5.5 0 0 1 0-.992l.791-.098a2.5 2.5 0 0 0 2.176-2.176l.098-.791A.5.5 0 0 1 14 7Zm0 2.597A3.507 3.507 0 0 1 12.597 11c.593.322 1.08.81 1.403 1.403c.322-.593.81-1.08 1.403-1.403A3.507 3.507 0 0 1 14 9.597Zm-2.147 3.55a.5.5 0 0 1 0 .707l-4 3.996a.5.5 0 0 1-.706-.707l3.999-3.997a.5.5 0 0 1 .707 0Z"
      />
    </svg>
  );
}
export default TextGrammarWand;
