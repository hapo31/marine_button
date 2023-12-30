import { CSSProperties, ReactNode } from "react";
import { OGPInfo } from "src/model/OGP/OGP";
import styled from "styled-components";

type Props = {
  href: string;
  ogp: OGPInfo;
  serviceIcon?: string;

  colorTheme: {
    color: string;
    backgroundColor: string;
    fontColor: string;
  };
};

export default function OGP({ href, ogp, serviceIcon, colorTheme }: Props) {
  return (
    <Container
      style={{
        color: colorTheme.fontColor,
        borderColor: colorTheme.color,
        backgroundColor: colorTheme.backgroundColor,
      }}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <Image src={ogp.image} />
      <TitleContainer>
        <Title>
          {serviceIcon && <ServiceImage src={serviceIcon} />} {ogp.title}
        </Title>
        <Description>{ogp.description}</Description>
      </TitleContainer>
    </Container>
  );
}

const Container = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  gap: 5px;
  border: 3px solid #ccc;
  text-decoration: none;
  padding: 5px;
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
`;

const Description = styled.div`
  font-size: 0.8rem;
  overflow: hidden;
  line-clamp: 3;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
`;

const ServiceImage = styled.img`
  margin-top: auto;
  height: 1.5rem;
`;
