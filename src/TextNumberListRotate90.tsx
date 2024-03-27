import type { SVGProps } from "react";

export function TextNumberListRotate90(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18.987 4.615A.5.5 0 0 1 18.5 5h-4a.5.5 0 0 1 0-1h2.582a3.626 3.626 0 0 1-.53-.776a.5.5 0 1 1 .895-.448c.207.414.524.736.803.959a3.51 3.51 0 0 0 .47.316c.205.108.32.335.267.564Zm-7.34-1.969a.5.5 0 0 1 .707 0v.002l.002.001l.004.004l.008.009a1.296 1.296 0 0 1 .103.12A2.497 2.497 0 0 1 13 4.317v.009c-.006.374-.103.78-.345 1.106c-.255.345-.65.568-1.155.568c-.548 0-.931-.242-1.204-.57c-.21-.251-.368-.573-.496-.835a3.42 3.42 0 0 0-.06-.121c-.155-.312-.293-.548-.475-.713A.929.929 0 0 0 9 3.589V5.5a.5.5 0 1 1-1 0V3a.5.5 0 0 1 .5-.5c.62 0 1.084.2 1.438.52c.333.304.54.693.697 1.006l.072.145c.133.27.23.467.357.618A.51.51 0 0 0 11.5 5c.18 0 .28-.067.351-.163c.084-.113.144-.297.149-.524a1.498 1.498 0 0 0-.351-.956l-.006-.007a.5.5 0 0 1 .003-.704ZM4.5 3.75a.5.5 0 0 1 .5.5c0 .343.097.532.183.628a.374.374 0 0 0 .298.129C5.675 4.999 6 4.82 6 4.25c0-.412-.102-.626-.166-.723a.414.414 0 0 0-.076-.088l-.005-.004a.525.525 0 0 0 .023.012l-.002-.001l-.003-.001l-.004-.003l-.008-.004l-.008-.005l.002.002a.5.5 0 0 1 .47-.882h.002l.002.001l.003.002l.006.003l.016.01a.833.833 0 0 1 .146.102c.081.067.177.165.268.302c.186.278.334.69.334 1.277c0 1.03-.675 1.726-1.481 1.756A1.371 1.371 0 0 1 4.5 5.61c-.283.278-.651.41-1.019.396C2.675 5.976 2 5.279 2 4.25c0-.587.148-.999.334-1.277c.091-.137.187-.235.268-.302a1.073 1.073 0 0 1 .146-.103l.016-.009l.006-.003l.003-.002h.002l.001-.001a.5.5 0 0 1 .471.882l-.005.004a.414.414 0 0 0-.076.088c-.064.097-.166.31-.166.723c0 .57.325.75.519.757a.374.374 0 0 0 .298-.13C3.903 4.783 4 4.594 4 4.25a.5.5 0 0 1 .5-.5ZM5.5 8a.5.5 0 0 1 .5.5v8a.5.5 0 1 1-1 0v-8a.5.5 0 0 1 .5-.5Zm5 0a.5.5 0 0 1 .5.5v8a.5.5 0 1 1-1 0v-8a.5.5 0 0 1 .5-.5Zm5 0a.5.5 0 0 1 .5.5v8a.5.5 0 1 1-1 0v-8a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default TextNumberListRotate90;
