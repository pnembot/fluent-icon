import type { SVGProps } from "react";

export function TextGrammarOptions(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.853 13.147a.5.5 0 0 1 0 .707l-4 3.996a.5.5 0 0 1-.706-.707l3.999-3.997a.5.5 0 0 1 .707 0zM8.877 14l-1 1H2.5a.5.5 0 0 1 0-1h6.377zM14 7a.5.5 0 0 1 .496.439l.098.791a2.5 2.5 0 0 0 2.176 2.176l.791.098a.5.5 0 0 1 0 .992l-.791.098a2.5 2.5 0 0 0-2.176 2.176l-.098.791a.5.5 0 0 1-.992 0l-.098-.791a2.5 2.5 0 0 0-2.176-2.176l-.791-.098a.5.5 0 0 1 0-.992l.791-.098a2.5 2.5 0 0 0 2.176-2.176l.098-.791A.5.5 0 0 1 14 7zm0 2.597A3.507 3.507 0 0 1 12.597 11c.593.322 1.08.81 1.403 1.403c.322-.593.81-1.08 1.403-1.403A3.507 3.507 0 0 1 14 9.597zM9.01 11v.01c0 .323.103.625.279.871l.094.119H2.5a.5.5 0 0 1-.09-.992L2.5 11h6.51zm2.49-3a.5.5 0 0 1 .09.992L11.5 9h-9a.5.5 0 0 1-.09-.992L2.5 8h9zm6-3a.5.5 0 0 1 .09.992L17.5 6h-15a.5.5 0 0 1-.09-.992L2.5 5h15z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default TextGrammarOptions;
