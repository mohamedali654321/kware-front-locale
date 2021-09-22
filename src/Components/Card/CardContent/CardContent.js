import React from 'react'
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
function CardContent(props) {
    return (
        <CardContentContainer>
        <CategoryList>
          {props.tag &&
            props.tag.map((tag) => <Category>{tag.name}</Category>)}
        </CategoryList>
        <CardTitle>{props.title}</CardTitle>
        <CardAbstract>{props.abstract}</CardAbstract>
        <CardMetaData>
          <div>
            <CardContentText>
              <FormattedMessage
                id="blog.details.meta.author"
                values={{ author: props.name }}
              />
           </CardContentText>

            {props.translator ? (
              <CardContentText>
                <FormattedMessage
                  id="blog.details.meta.translatedBy"
                  values={{ translator: props.translator }}
                />
              </CardContentText>
            ) : null}

           <CardContentText>
              {props.publishDate}
              </CardContentText>
          </div>
        </CardMetaData>
      </CardContentContainer>
    )
}

export default CardContent


const CardContentContainer = styled.div`
  display: flex;
  flex: 1 1;
  position: relative;

  flex-direction: column;
  text-align: center;
  padding: 24px;
  width: 100%;
  > * {
    text-decoration: none;
  }

  text-align: left;
  transform: translateZ(1000px);
  width: 100%;
`;

const CategoryList = styled.ul`
  display: inline-block;

  margin-bottom: 14px;
`;

const Category = styled.li`
  display: inline-block;
  font-family: Effra-ar;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  color: #13bb70;

  &:not(:last-child) {
    position: relative;
    padding-right: 22px;
  }

  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 20px;
    background-color: #13bb70;
  }

  color: #13bb70;
  font-weight: 600;
  font-family: Effra-ar;
  font-size: 11px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 13px;
  }
`;

const CardTitle = styled.h2`
  font-family: Effra-ar;
  line-height: 1.5;
  margin-bottom: 12px;
  font-weight: 600;
  color: #8d1cb8;
  margin-bottom: 20px;
  font-size: 17px;
  @media (min-width: 992px) {
    font-size: 17px;
  }
`;
const CardAbstract = styled.p`
  padding-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #9c45da;
  font-family: Effra-ar;
  font-weight: 500;
  line-height: 22px;
  @media (min-width: 992px) {
    font-size: 17px;
  }

  font-size: 17px;
`;

const CardMetaData = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  
`;
const CardContentText=styled.p`

font-family: Effra-ar;
      font-size: 17px;
      font-weight: 400;
      line-height: 28px;

      font-size: 17px;
      line-height: 1.5;
      color: #8D1CB8;
      font-size: 13px;
      line-height: 19px;
      @media (min-width: 992px) {
     
        font-size: 17px;
        font-size: 13px;
      
    }

`;