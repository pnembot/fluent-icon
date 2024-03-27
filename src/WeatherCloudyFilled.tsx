import type { SVGProps } from "react";

export function WeatherCloudyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 7c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 14.763 16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.139 8.561 8.535 7 11 7ZM8.392 4c1.456 0 2.726.828 3.353 2.045A6.055 6.055 0 0 0 11 6C8.61 6 6.868 7.307 6.246 9.286l-.062.214l-.046.187l-.165.03a3.734 3.734 0 0 0-2.716 2.258a2.622 2.622 0 0 1 1.2-4.856l.222-.005A3.77 3.77 0 0 1 8.392 4Z"
      />
    </svg>
  );
}
export default WeatherCloudyFilled;
