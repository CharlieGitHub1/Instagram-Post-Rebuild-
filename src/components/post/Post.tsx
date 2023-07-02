import React from 'react';
// import { Link } from 'react-router-dom';
import {
  PostContainerScreen,
  UserAvatar,
  UserLabel,
  MenuIconDots,
  ImageContainer,
  Wrapper,
  PostActions,
  PostInfo,
  PostLikes,
  NumLikes,
  LikesLabel,
  NumLikesWrapper,
  CommentsContainer,
  Comment,
  CommentLabel,
  InstagramMenuContainer,
  SecondaryInfo,
  ProfileWrapper,
  InstaBottomMenu,
  Month,
  InfoLabel,
  PostDescription,
} from './styles';
import { FcLike } from 'react-icons/fc';
import { BiMessageRounded } from 'react-icons/bi';
import { BsSendPlus } from 'react-icons/bs';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { PiFilmReelThin } from 'react-icons/pi';
import { AiTwotoneShopping } from 'react-icons/ai';
import { VscVerifiedFilled } from 'react-icons/vsc';
interface IPostProps {
  postData: {
    profileImage: string;
    username: string;
    postImage: string;
    likes: number;
    comments: {
      username: string;
      comment: string;
      timestamp: string;
      likes: number;
    }[];
    date: string;
    verified: boolean;
  };
}
const Post = ({ postData }: IPostProps) => {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes} ${ampm}`;
  };

  const randomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * 100);
    const avatarUrl = `https://i.pravatar.cc/150?img=${randomIndex}`;

    return avatarUrl;
  };

  const randomProfileImage = randomAvatar();

  const generateUsername = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    const usernameLength = 8;
    let username = '';

    for (let i = 0; i < usernameLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters[randomIndex];
    }

    return username;
  };

  const randomUsername = generateUsername();

  return (
    <PostContainerScreen>
      <ImageContainer>
        <ProfileWrapper>
          <UserAvatar>
            <img
              src={randomProfileImage}
              alt="avatar"
              width="35"
              height="35"
              style={{
                borderRadius: '50%',
                marginTop: '0.5rem',
                border: '2px solid #3349f0',
              }}
            />
          </UserAvatar>
          <UserLabel>
            <span>
              <strong>{randomUsername}</strong>
            </span>
            <span>
              {' '}
              {postData.verified && (
                <VscVerifiedFilled
                  style={{
                    color: '#3349f0',
                    fontSize: '1rem',
                  }}
                />
              )}
            </span>
          </UserLabel>
          <MenuIconDots />
        </ProfileWrapper>

        <img
          src={postData.postImage}
          alt="post"
          width={'100%'}
          height={650}
          className="App-image"
        />
      </ImageContainer>
      <Wrapper>
        <PostActions>
          <PostLikes>
            <FcLike
              style={{
                color: 'red',
                fontSize: '1.7rem',
                marginRight: '0.5rem',
              }}
            />

            <BiMessageRounded
              style={{
                color: '#eee',
                fontSize: '1.7rem',
                marginLeft: '0.5rem',
              }}
            />

            <BsSendPlus
              style={{
                color: '#eee',
                fontSize: '1.7rem',
                marginLeft: '1rem',
              }}
            />
          </PostLikes>
          <div>
            <MdOutlineSaveAlt
              style={{
                color: '#eee',
                fontSize: '1.7rem',
                marginRight: '1rem',
              }}
            />
          </div>
        </PostActions>
        <PostInfo>
          <NumLikesWrapper>
            <NumLikes>{postData.likes}</NumLikes>
            <LikesLabel>likes</LikesLabel>
          </NumLikesWrapper>
          <PostDescription>
            <span>
              <strong>{randomUsername}</strong>
            </span>{' '}
            <span>
              {
                postData.comments[
                  Math.floor(Math.random() * postData.comments.length)
                ].comment
              }
            </span>
          </PostDescription>
          <CommentsContainer>
            <Comment>
              {
                postData.comments[
                  Math.floor(Math.random() * postData.comments.length)
                ].username
              }{' '}
              <CommentLabel>
                {
                  postData.comments[
                    Math.floor(Math.random() * postData.comments.length)
                  ].comment
                }
              </CommentLabel>
            </Comment>
            <Comment>
              {
                postData.comments[
                  Math.floor(Math.random() * postData.comments.length)
                ].username
              }{' '}
              <CommentLabel>
                {
                  postData.comments[
                    Math.floor(Math.random() * postData.comments.length)
                  ].comment
                }
              </CommentLabel>
            </Comment>
            <Comment>
              {
                postData.comments[
                  Math.floor(Math.random() * postData.comments.length)
                ].username
              }{' '}
              <CommentLabel>
                {
                  postData.comments[
                    Math.floor(Math.random() * postData.comments.length)
                  ].comment
                }
              </CommentLabel>
            </Comment>
            <Comment>
              {
                postData.comments[
                  Math.floor(Math.random() * postData.comments.length)
                ].username
              }{' '}
              <CommentLabel>
                {
                  postData.comments[
                    Math.floor(Math.random() * postData.comments.length)
                  ].comment
                }
              </CommentLabel>
            </Comment>
          </CommentsContainer>
          <SecondaryInfo>
            <InfoLabel>
              <span>View all 100 comments</span>
            </InfoLabel>
          </SecondaryInfo>
        </PostInfo>
      </Wrapper>
      <InstagramMenuContainer>
        <InstaBottomMenu>
          <span>
            <AiFillHome
              style={{
                color: '#eee',
                fontSize: '2rem',
              }}
            />
          </span>
          <span>
            <BsSearch
              style={{
                color: '#eee',
                fontSize: '1.7rem',
                padding: '0.5rem',
              }}
            />
          </span>
          <span>
            <PiFilmReelThin
              style={{
                color: '#eee',
                fontSize: '2rem',
              }}
            />
          </span>
          <span>
            <AiTwotoneShopping
              style={{
                color: '#eee',
                fontSize: '2rem',
              }}
            />
          </span>
          <span>
            {' '}
            <img
              src={postData.profileImage}
              alt="avatar"
              width="25"
              height="25"
              style={{ borderRadius: '50%', border: '2px solid #ccc' }}
            />
          </span>
        </InstaBottomMenu>
      </InstagramMenuContainer>
    </PostContainerScreen>
  );
};

export default Post;
