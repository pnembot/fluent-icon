import type { SVGProps } from "react";

export function PlayingCards(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.068 13.01a2.005 2.005 0 0 0 1.416 2.451l5.46 1.47a1.995 1.995 0 0 0 2.447-1.413l2.54-9.523a2.005 2.005 0 0 0-1.415-2.452l-5.46-1.47a1.995 1.995 0 0 0-2.448 1.413l-2.54 9.523Zm1.673 1.485a1.003 1.003 0 0 1-.707-1.226l2.54-9.523a.997.997 0 0 1 1.223-.706l5.461 1.47c.533.143.85.692.708 1.226l-2.54 9.522a.997.997 0 0 1-1.224.707l-5.46-1.47Zm-2.74-4.023L2.67 5.506a2 2 0 0 1 1.413-2.45l.076-.02a2.996 2.996 0 0 0-.16.966v.187a1 1 0 0 0-.364 1.058L4 6.608v3.864ZM5 9.384V4.002a2 2 0 0 1 2-2h.106c-.147.221-.262.47-.334.741l-.082.308A1 1 0 0 0 6 4v1.635L5 9.384ZM13 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default PlayingCards;
