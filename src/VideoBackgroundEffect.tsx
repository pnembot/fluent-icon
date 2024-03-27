import type { SVGProps } from "react";

export function VideoBackgroundEffect(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.207 4L2 8.207V6.793L4.793 4h1.414ZM3.5 16H5v-1.707l-1.695 1.695c.064.008.13.012.195.012Zm11.707 0H15v-1.207l3-3v1.414L15.207 16ZM18 9.707l-3.098 3.098a2.492 2.492 0 0 0-.494-.92L18 8.293v1.414ZM12.5 12a1.498 1.498 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5A1.501 1.501 0 0 1 7.5 12h5Zm-2.778-1.015A2.51 2.51 0 0 1 7.707 9.5a2.491 2.491 0 0 1-.198-1.216a2.5 2.5 0 1 1 2.213 2.7ZM10 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-7.88 5.088l4.844-4.845a3.478 3.478 0 0 1-.39-1.024L2 13.793v.707c0 .209.043.407.12.588Zm9.623-9.624a3.478 3.478 0 0 0-1.024-.39L11.793 4h1.414l-1.464 1.464Zm1.576 1.924a3.487 3.487 0 0 0-.48-.935L15.294 4H16.5c.066 0 .13.004.195.013l-3.376 3.375ZM12.45 11c.44-.43.766-.975.93-1.587l4.502-4.5c.076.18.12.378.12.587v.707l-4.873 4.872a2.542 2.542 0 0 0-.628-.079h-.05ZM2 11.707L9.707 4H8.293L2 10.293v1.414Z"
      />
    </svg>
  );
}
export default VideoBackgroundEffect;
