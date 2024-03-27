import type { SVGProps } from "react";

export function WeatherFog(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 15.024h7a.5.5 0 0 1 .09.992l-.09.008h-7a.5.5 0 0 1-.09-.992l.09-.008Zm-1.996-2h10.992a.5.5 0 0 1 .091.992l-.09.008H4.503a.502.502 0 0 1-.504-.5a.5.5 0 0 1 .413-.491l.09-.009Zm5.496-10c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.498 17 7.735 17 9.261c0 1.526-1.286 2.763-2.872 2.763H5.872C4.286 12.024 3 10.787 3 9.261c0-1.469 1.192-2.67 2.697-2.758l.237-.005C6.139 4.586 7.535 3.024 10 3.024Zm0 1c-1.65 0-3.087 1.27-3.087 3.025c0 .278-.254.497-.545.497h-.55C4.814 7.546 4 8.324 4 9.285c0 .96.814 1.74 1.818 1.74h8.364c1.004 0 1.818-.78 1.818-1.74s-.814-1.74-1.818-1.74h-.55c-.29 0-.545-.218-.545-.496c0-1.777-1.438-3.025-3.087-3.025Z"
      />
    </svg>
  );
}
export default WeatherFog;
