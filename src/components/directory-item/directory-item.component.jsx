import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category: { id, title, imageUrl, route } }) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={handleNavigate}>
      <BackgroundImage imageUrl={imageUrl} />

      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
