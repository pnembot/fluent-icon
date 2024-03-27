import type { SVGProps } from "react";

export function Drop(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.646 2.146a.5.5 0 0 1 .708 0c.531.532 1.804 2.064 2.946 3.903c1.13 1.82 2.2 4.05 2.2 5.951c0 1.844-.528 3.352-1.51 4.404C13.007 17.459 11.616 18 10 18c-1.615 0-3.006-.541-3.99-1.596C5.027 15.352 4.5 13.844 4.5 12c0-1.902 1.07-4.13 2.2-5.951c1.142-1.84 2.415-3.37 2.946-3.903ZM7.55 6.576C6.43 8.381 5.5 10.402 5.5 12c0 1.656.472 2.898 1.24 3.721C7.507 16.541 8.616 17 10 17c1.385 0 2.494-.459 3.26-1.279c.768-.823 1.24-2.065 1.24-3.721c0-1.598-.93-3.62-2.05-5.424A26.85 26.85 0 0 0 10 3.236a26.845 26.845 0 0 0-2.45 3.34Z"
      />
    </svg>
  );
}
export default Drop;
