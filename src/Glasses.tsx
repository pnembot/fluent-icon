import type { SVGProps } from "react";

export function Glasses(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.186 4a2 2 0 0 0-1.513.692L2.362 8.523A1.494 1.494 0 0 0 2 9.5v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h2v1.5a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3c0-.429-.18-.815-.468-1.088l-3.205-3.718A2 2 0 0 0 12.813 4H12a.5.5 0 1 0 0 1h.813a1 1 0 0 1 .757.347L15.857 8H12.5A1.5 1.5 0 0 0 11 9.5v.5H9v-.5A1.5 1.5 0 0 0 7.5 8H4.135L6.43 5.346A1 1 0 0 1 7.186 5H8a.5.5 0 1 0 0-1h-.814ZM8 9.5v3A1.5 1.5 0 0 1 6.5 14h-2A1.5 1.5 0 0 1 3 12.5v-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Zm4 3v-3a.5.5 0 0 1 .5-.5h4c.12 0 .23.042.316.113l.055.063l.006-.004A.498.498 0 0 1 17 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5Z"
      />
    </svg>
  );
}
export default Glasses;
