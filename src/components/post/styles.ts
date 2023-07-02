import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export const PostContainerScreen = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: auto;
  background-color: #282c34;
  margin: 1rem auto;

  /* padding: 1rem 0; */
  /* border-radius: 10px; */
`;

export const UserAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  padding: 0.5rem 0.5rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

export const UserLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  color: #e7e7e7;

  span {
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: 2px;
    margin-top: 5px;
  }
`;

export const MenuIconDots = styled(BiDotsHorizontalRounded)`
  display: flex;
  flex-direction: row;
  width: 70px;
  height: 30px;
  background-color: transparent;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin-right: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: transparent;
`;

export const Month = styled.small`
  font-size: 0.875rem;
  color: #eeee;
`;

export const InfoLabel = styled.small`
  margin-left: 5px;
  font-size: 0.875rem;
  color: #eeee;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const PostActions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  margin-right: 1rem;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
`;

export const PostLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  margin-left: 5px;
  margin-top: 0.5rem;
`;

export const NumLikes = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #eeee;
`;

export const NumLikesWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  margin-top: 10px;
  background-color: transparent;
  justify-content: flex-start;
  align-content: center;
  margin: 0.2rem 0;
`;

export const LikesLabel = styled.div`
  font-weight: 700;
  color: #eeee;
  margin-left: 5px;
`;

export const PostDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 0.5rem 0;
  margin-right: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #eeee;
    margin-right: 5px;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  padding: 0.2rem 0;
  margin: 0.8rem 0;
  span {
    font-size: 1rem;
    font-weight: bold;
    color: #eeee;
  }
`;

export const Comment = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.2rem 0;
  margin: 0 0.2rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const CommentLabel = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #eeee;
  margin-top: 2px;
  margin-left: 10px;

  font-size: 0.875rem;
  font-weight: 300;
`;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 0.5rem;

  height: 100%;
  background-color: transparent;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`;

export const InstagramMenuContainer = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  align-content: center;
  bottom: 0;
  padding: 1rem 0;
`;

export const InstaBottomMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding: 1rem 0;
`;
