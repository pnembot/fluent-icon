import type { SVGProps } from "react";

export function GlobeAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.987 4.18a12.213 12.213 0 0 0-.669 2.32h5.364a12.21 12.21 0 0 0-.67-2.32c-.301-.733-.648-1.294-1.008-1.663C10.646 2.149 10.307 2 10 2c-.307 0-.646.149-1.004.517c-.36.37-.707.93-1.009 1.663Zm-.096-1.899c-.314.426-.59.941-.828 1.518c-.32.78-.58 1.694-.762 2.701H2.804a8.02 8.02 0 0 1 5.087-4.219Zm4.219 0c.313.426.59.941.827 1.518c.32.78.58 1.694.762 2.701h3.497a8.02 8.02 0 0 0-5.087-4.219ZM17.602 7.5H13.85c.06.493.104 1.002.128 1.524a5.477 5.477 0 0 1 4.018 1.23a7.994 7.994 0 0 0-.394-2.754Zm-4.76 0c.071.546.12 1.119.143 1.711a5.514 5.514 0 0 0-3.61 3.289H7.158A19.438 19.438 0 0 1 7 10c0-.875.056-1.715.158-2.5h5.684Zm-5.524 6h1.773c-.06.324-.091.659-.091 1c0 1.316.462 2.525 1.234 3.471A.987.987 0 0 1 10 18c-.307 0-.646-.149-1.004-.517c-.36-.37-.707-.93-1.009-1.663a12.211 12.211 0 0 1-.669-2.32Zm.573 4.219A8.02 8.02 0 0 1 2.804 13.5h3.497c.182 1.007.441 1.922.762 2.7c.237.578.514 1.093.828 1.519ZM2.398 12.5H6.15A20.524 20.524 0 0 1 6 10c0-.866.052-1.705.15-2.5H2.398A7.993 7.993 0 0 0 2 10c0 .873.14 1.713.398 2.5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default GlobeAddFilled;
