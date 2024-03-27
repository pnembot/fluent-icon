import type { SVGProps } from "react";

export function GlobeProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.318 6.5c.168-.873.397-1.657.67-2.32c.301-.733.648-1.294 1.008-1.663C9.354 2.149 9.693 2 10 2c.307 0 .646.149 1.004.517c.36.37.707.93 1.008 1.663c.273.663.502 1.447.67 2.32H7.318Zm-.255-2.7a7.188 7.188 0 0 1 .827-1.52A8.02 8.02 0 0 0 2.804 6.5h3.497c.182-1.007.441-1.922.762-2.7Zm5.874 0a7.19 7.19 0 0 0-.827-1.519A8.02 8.02 0 0 1 17.196 6.5h-3.497c-.182-1.007-.441-1.922-.762-2.7Zm.913 3.7h3.752a7.994 7.994 0 0 1 .394 2.754a5.477 5.477 0 0 0-4.018-1.23A19.975 19.975 0 0 0 13.85 7.5Zm-.865 1.711a18.997 18.997 0 0 0-.143-1.711H7.158A19.438 19.438 0 0 0 7 10c0 .875.056 1.714.158 2.5h2.217a5.514 5.514 0 0 1 3.61-3.289ZM9.09 13.5H7.318c.168.873.397 1.657.67 2.32c.301.733.648 1.294 1.008 1.663c.358.368.697.517 1.004.517c.076 0 .154-.01.234-.029A5.477 5.477 0 0 1 9 14.5c0-.341.031-.676.09-1Zm-6.287 0a8.02 8.02 0 0 0 5.087 4.219a7.187 7.187 0 0 1-.828-1.518c-.32-.78-.58-1.694-.762-2.701H2.804Zm3.346-1H2.398A7.992 7.992 0 0 1 2 10c0-.873.14-1.713.398-2.5H6.15C6.052 8.295 6 9.134 6 10c0 .866.052 1.705.15 2.5Zm3.85 2a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.707-.707a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default GlobeProhibitedFilled;
