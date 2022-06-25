import { styled } from '~/stitches';
const SVG = styled('svg', {});
const Path = styled('path', {});

export function CloseCircleIcon(props) {
  return (
    <SVG
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.184 21a9 9 0 100-18 9 9 0 000 18zM15.184 9l-6 6M15.184 15l-6-6"
        stroke="#737373"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}
