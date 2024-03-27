import type { SVGProps } from "react";

export function TextAbcUnderlineDouble(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M7.5 5a1 1 0 0 1 .916.6l3.5 8a1 1 0 1 1-1.832.8L9.471 13H5.53l-.613 1.4a1 1 0 0 1-1.832-.8l3.5-8A1 1 0 0 1 7.5 5Zm1.096 6L7.5 8.495L6.404 11h2.192ZM4 19a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2H4Zm0 6a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2H4Zm9-19a1 1 0 0 1 1-1h2.5a3 3 0 0 1 2.455 4.725A3 3 0 0 1 17 15h-3a1 1 0 0 1-1-1V6Zm2 5v2h2a1 1 0 0 0 0-2h-2Zm0-2h1.5a1 1 0 0 0 0-2H15v2Zm8 1c0-1.176.294-1.93.65-2.371A1.64 1.64 0 0 1 24.98 7c.66 0 1.23.32 1.604 1.178a1 1 0 1 0 1.833-.8C27.757 5.866 26.514 5 24.979 5a3.64 3.64 0 0 0-2.884 1.371C21.373 7.264 21 8.51 21 10s.373 2.736 1.095 3.629A3.639 3.639 0 0 0 24.98 15c1.535 0 2.778-.866 3.438-2.378a1 1 0 1 0-1.833-.8C26.21 12.681 25.64 13 24.98 13a1.64 1.64 0 0 1-1.329-.629c-.356-.44-.65-1.195-.65-2.371Z"
      />
    </svg>
  );
}
export default TextAbcUnderlineDouble;
