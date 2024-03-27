import type { SVGProps } from "react";

export function GlassesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.186 4a2 2 0 0 0-1.513.692l-3.3 3.818C2.141 8.774 2 9.12 2 9.5v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h2v1.5a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3c0-.429-.18-.815-.468-1.088l-3.205-3.718A2 2 0 0 0 12.813 4H12a.5.5 0 1 0 0 1h.813a1 1 0 0 1 .757.347L15.857 8H12.5A1.5 1.5 0 0 0 11 9.5v.5H9v-.5A1.5 1.5 0 0 0 7.5 8H4.136L6.43 5.346A1 1 0 0 1 7.186 5H8a.5.5 0 0 0 0-1h-.814Z"
      />
    </svg>
  );
}
export default GlassesFilled;
