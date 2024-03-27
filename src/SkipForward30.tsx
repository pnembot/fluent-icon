import type { SVGProps } from "react";

export function SkipForward30(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1h3.249a6.997 6.997 0 0 0-12.012.89a.5.5 0 1 1-.896-.445A7.996 7.996 0 0 1 16 5.702V3.5a.5.5 0 0 1 .5-.5Zm-2.998 7c-.935 0-1.597.437-1.996 1.13c-.376.653-.504 1.507-.504 2.37c0 .863.128 1.717.504 2.37c.399.693 1.061 1.13 1.996 1.13s1.597-.437 1.996-1.13c.376-.653.504-1.507.504-2.37c0-.863-.128-1.717-.504-2.37c-.399-.693-1.061-1.13-1.996-1.13Zm-1.5 3.5c0-.793.122-1.44.37-1.872c.227-.393.565-.628 1.13-.628s.903.235 1.13.628c.248.432.37 1.079.37 1.872c0 .793-.122 1.44-.37 1.872c-.227.393-.565.628-1.13.628s-.903-.235-1.13-.628c-.248-.432-.37-1.079-.37-1.872Zm-6.857-1.896a.5.5 0 0 0 .705.002l.002-.001a2.39 2.39 0 0 1 .418-.29A2.559 2.559 0 0 1 7.499 11c.598 0 .98.162 1.202.35a.8.8 0 0 1 .303.637C8.994 12.397 8.6 13 7.5 13a.5.5 0 0 0 0 1c1.101 0 1.495.602 1.505 1.013a.8.8 0 0 1-.303.637c-.221.188-.604.35-1.202.35a2.559 2.559 0 0 1-1.555-.527a1.542 1.542 0 0 1-.092-.078a.5.5 0 0 0-.707.001c-.337.338 0 .708 0 .708l.056.051a3.377 3.377 0 0 0 .59.409c.399.218.98.436 1.708.436c.777 0 1.407-.212 1.849-.587a1.8 1.8 0 0 0 .656-1.426c-.015-.589-.309-1.122-.812-1.487c.503-.365.797-.898.812-1.487a1.799 1.799 0 0 0-.656-1.426C8.906 10.213 8.276 10 7.499 10a3.559 3.559 0 0 0-2.171.74a2.575 2.575 0 0 0-.164.139l-.012.01l-.004.005l-.001.001l-.001.001a.5.5 0 0 0 0 .708Zm.707 3.791H5.85Z"
      />
    </svg>
  );
}
export default SkipForward30;
