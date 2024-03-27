import type { SVGProps } from "react";

export function PersonAlertFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm0 16a12.8 12.8 0 0 1-.373-.005c1.304-.105 1.87-1.765.838-2.64l-.966-.818V13c0-.729-.195-1.412-.535-2H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C13.583 17.614 11.855 18 10 18Zm-7.503-5a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.323.881H1.501a.5.5 0 0 1-.323-.881L2.498 15v-2Zm3 6a1.501 1.501 0 0 1-1.414-1h2.829a1.5 1.5 0 0 1-1.415 1Z"
      />
    </svg>
  );
}
export default PersonAlertFilled;
