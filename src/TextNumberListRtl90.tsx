import type { SVGProps } from "react";

export function TextNumberListRtl90(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2a.5.5 0 0 1 .5.5v7.996a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5Zm5 0a.5.5 0 0 1 .5.5v7.996a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5Zm5 0a.5.5 0 0 1 .5.5v7.996a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5Zm-11 12.744a.5.5 0 0 1 .5.5c0 .343.097.532.183.627a.374.374 0 0 0 .298.13c.194-.008.519-.186.519-.757c0-.412-.102-.626-.166-.722a.415.415 0 0 0-.076-.089l-.005-.004a.459.459 0 0 0 .023.012h-.002l-.003-.002l-.004-.002l-.008-.004l-.008-.005l.002.001a.5.5 0 0 1 .47-.881h.002l.002.001l.003.002l.006.003l.016.009a.826.826 0 0 1 .146.102c.081.068.177.166.268.302c.186.279.334.69.334 1.277C6 16.273 5.325 16.97 4.519 17a1.371 1.371 0 0 1-1.019-.396c-.283.278-.651.41-1.019.396C1.675 16.97 1 16.273 1 15.244c0-.587.148-.998.334-1.277a1.405 1.405 0 0 1 .374-.38a.826.826 0 0 1 .04-.024l.016-.009l.006-.003l.004-.002h.001l.001-.001a.5.5 0 0 1 .471.881l-.005.004a.415.415 0 0 0-.076.089c-.064.096-.166.31-.166.722c0 .57.325.75.519.756a.374.374 0 0 0 .298-.129c.086-.095.183-.284.183-.627a.5.5 0 0 1 .5-.5Zm7.146-1.103a.5.5 0 0 1 .707 0l.002.001l.001.002l.004.003l.008.01a1.382 1.382 0 0 1 .103.12A2.495 2.495 0 0 1 12 15.312v.008c-.006.374-.103.78-.345 1.106c-.255.345-.65.567-1.155.567c-.548 0-.931-.242-1.205-.57c-.209-.25-.367-.573-.495-.834a3.49 3.49 0 0 0-.06-.122c-.155-.31-.293-.546-.475-.712A.927.927 0 0 0 8 14.584v1.91a.5.5 0 1 1-1-.001v-2.498a.5.5 0 0 1 .5-.5c.62 0 1.084.199 1.438.52c.333.303.54.692.697 1.005l.071.145c.134.27.232.467.358.618a.51.51 0 0 0 .436.21c.18 0 .28-.066.351-.162c.084-.113.144-.297.149-.524a1.496 1.496 0 0 0-.351-.956l-.006-.007a.5.5 0 0 1 .003-.703Zm7.34 1.968a.5.5 0 0 1-.486.385h-4a.5.5 0 1 1 0-1h2.582a3.624 3.624 0 0 1-.53-.776a.5.5 0 1 1 .895-.447c.207.414.524.735.803.958a3.51 3.51 0 0 0 .47.317c.205.107.32.334.267.563Z"
      />
    </svg>
  );
}
export default TextNumberListRtl90;
