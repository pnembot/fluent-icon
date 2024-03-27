import type { SVGProps } from "react";

export function WeatherSnow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C17 11.763 15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4Zm0 1C8.35 5 6.913 6.27 6.913 8.025c0 .278-.254.496-.545.496h-.55C4.814 8.521 4 9.3 4 10.261C4 11.22 4.814 12 5.818 12h8.364C15.186 12 16 11.221 16 10.26c0-.96-.814-1.739-1.818-1.739h-.55c-.29 0-.545-.218-.545-.496C13.087 6.248 11.65 5 10 5Z"
      />
    </svg>
  );
}
export default WeatherSnow;
