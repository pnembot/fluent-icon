import type { SVGProps } from "react";

export function TextGrammarSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h14.5a.75.75 0 0 0 .75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h9.456A5.48 5.48 0 0 1 14.5 9a5.48 5.48 0 0 1 2.294.5h.456a.75.75 0 0 0 .75-.75ZM2.75 11h7.507a5.495 5.495 0 0 0-.882 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 3h6.272a5.571 5.571 0 0 0 .069 1.5H2.75a.75.75 0 0 1 0-1.5Zm9.316-2.558a2 2 0 0 1-1.43 2.478l-.462.118a4.703 4.703 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.258.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.731 4.731 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.157.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TextGrammarSettingsFilled;
