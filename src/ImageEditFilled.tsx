import type { SVGProps } from "react";

export function ImageEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.499 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM3 6a3 3 0 0 1 3-3h7.999a3 3 0 0 1 3 3v3.002a2.86 2.86 0 0 0-1.898.838l-2.308 2.308l-1.741-1.714a1.5 1.5 0 0 0-2.105 0l-5.39 5.307A2.986 2.986 0 0 1 3 13.998v-8Zm9.499 3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-2.227 5.669l1.813-1.814l-1.735-1.709a.5.5 0 0 0-.702 0l-5.383 5.3c.49.348 1.088.552 1.735.552h3.22l.21-.844a3.202 3.202 0 0 1 .842-1.485Zm.707.707l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02Z"
      />
    </svg>
  );
}
export default ImageEditFilled;
