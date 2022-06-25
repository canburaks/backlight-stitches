import { styled } from '~/stitches';
import { CloseCircleIcon } from '~/close-circle/src/';

const TagWrapper = styled('div', {
  backgroundColor: '$brand',
  width: '55px',
  maxWidth: '55px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 0',
  flexShrink: 1,
  boxSizing: 'border-box',
  borderRadius: '6px',
  borderWidth: '1px',
  borderColor: '$brandLight',
  borderStyle: 'solid',
  position: 'relative',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.1) ',
  overflow: 'hidden',
});
const TagBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 4px 0 8px',
  flexShrink: 1,
  boxSizing: 'border-box',
  borderColor: 'transparent',
  position: 'relative',
  background: '$white',
});
const Text = styled('span', {
  color: '$brand',
  height: 'auto',
  fontWeight: '600px',
  textAlign: 'left',
  lineHeight: '20px',
  fontSize: '12px',
  margin: '0 6px 0 0',
  alignSelf: 'auto',
  textDecoration: 'none',
});

export const Tag = (props) => {
  return (
    <TagWrapper>
      <TagBox>
        <Text>{props.text}</Text>
        <CloseCircleIcon />
      </TagBox>
    </TagWrapper>
  );
};
