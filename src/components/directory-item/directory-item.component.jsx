import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category: { id, title, imageUrl } }) => (
  <DirectoryItemContainer key={id}>
    <BackgroundImage imageUrl={imageUrl} />

    <DirectoryItemBody>
      <h2>{title}</h2>
      <p>Shop now</p>
    </DirectoryItemBody>
  </DirectoryItemContainer>
);

export default DirectoryItem;
