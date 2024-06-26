import type { SVGProps } from "react";

export function CircleImageFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 7h2.478A5.5 5.5 0 1 0 7 12.978V10.5A3.5 3.5 0 0 1 10.5 7Zm0 1A2.5 2.5 0 0 0 8 10.5v5c0 .51.152.983.414 1.379l3.172-3.172a2 2 0 0 1 2.828 0l3.172 3.172A2.49 2.49 0 0 0 18 15.5v-5A2.5 2.5 0 0 0 15.5 8h-5Zm5.5 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm.879 6.586l-3.172-3.172a1 1 0 0 0-1.414 0L9.12 17.586c.396.262.87.414 1.379.414h5c.51 0 .983-.152 1.379-.414Z"
      />
    </svg>
  );
}
export default CircleImageFilled;
